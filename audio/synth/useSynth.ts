import { onMounted, watch, computed, ref, reactive } from 'vue'
import { useMidi } from '#/use/midi'

import { NodeRepr_t, el } from '@elemaudio/core';

import { midiFrequency } from '../tools/toolbox';
import { useAudio } from '../useAudio'
import { useUI } from '../tools/useUI';

import params from './params.json'
import { useVoices, Voice } from './useVoices';

export function useSynth() {

  const { audio, render } = useAudio()

  const { controls, groups, cv } = useUI(params, 'synth')

  const { voices, cycleNote, stopAll } = useVoices()

  watch([voices, controls], () => {
    audio.layers.synth = {
      volume: 1,
      signal: pingPong(el.scope(
        { name: 'synth', size: 512 },
        poly(voices.list)))
    }
    render('synth')
  })

  const { midi } = useMidi()

  watch(() => midi.note, n => cycleNote(n.number, n.velocity))


  function genVoice(voice: Voice) {
    let frequency = midiFrequency(voice.midi, voice.key)

    let osc = el.mul(
      cv['osc:gain'],
      el.adsr(
        cv['osc:attack'],
        cv['osc:decay'],
        cv['osc:sustain'],
        cv['osc:release'],
        el.const({ key: `${voice.key}:gate`, value: voice.gate })),
      el.lowpass(
        el.mul(
          cv['osc:cut-off'],
          frequency),
        cv['osc:cut-q'],
        el.blepsaw(frequency)))

    let noise = el.mul(
      cv['noise:gain'],
      el.adsr(
        cv['noise:attack'],
        cv['noise:decay'],
        cv['noise:sustain'],
        cv['noise:release'],
        el.const({ key: `${voice.key}:gate`, value: voice.gate })),
      el.bandpass(
        frequency,
        cv['noise:band-q'],
        el.noise()))

    return el.mul(
      el.const({ key: `${voice.key}:vel`, value: voice.vel }),
      el.add(osc, noise))
  }

  function poly(vs = voices.list) {
    return el.mul(
      cv['main:volume'],
      el.mul(
        el.sqrt(
          el.const({
            key: 'voice-count',
            value: 1 / vs.length
          })),
        el.add(...vs.map(voice => genVoice(voice)))))
  }

  function pingPong(x: NodeRepr_t | number): (number | NodeRepr_t)[] {
    return Array(2).fill(null).map((n, i) => el.add(
      x,
      el.mul(
        cv['fx:pingPong'],
        el.delay(
          { size: 44100 },
          el.ms2samps(300 * (1 + i * .75)),
          .2,
          x))))
  }

  return { groups, controls, voices, cycleNote, stopAll }
}