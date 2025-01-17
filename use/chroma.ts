/**
 * @module Chroma
 * @description Global scale info and chroma
 */

import { Frequency } from "tone";
import { midiPlay, midiStop, midiOnce } from "./midi";
import { synthOnce, synthAttack, synthRelease } from "./synth";
import { rotateArray } from "./calculations";
import { notes } from './theory'
import { Note, ScaleType, Scale, Pcset } from "tonal";
import { reactive, computed } from 'vue'
import { useStorage } from "@vueuse/core";
import { useClamp } from "@vueuse/math";

export interface NamedPitch {
  name: string
  pitch: number
}

const allNotes = [...notes].map((n, i): NamedPitch => ({ name: n, pitch: i }))

export const globalScale: {
  tonic: number
  note: NamedPitch
  chroma: string
  set: any
  full: any
  pcs: string[]
  isIn: (noteName: string) => boolean
} = reactive({
  tonic: useClamp(useStorage("global-tonic", 0), 0, 11),
  note: computed(() => allNotes[globalScale.tonic]),
  chroma: useStorage("global-chroma", "101011010101"),
  set: computed(() => ScaleType.get(globalScale.chroma)),
  full: computed(() => {
    let sc = globalScale.note.name + "4 " + globalScale.set.name;
    return Scale.get(sc);
  }),
  pcs: computed(() => Scale.scaleNotes(globalScale.full.notes)),
  isIn: computed(() => Pcset.isNoteIncludedIn(globalScale.pcs)),
});

function getChromaNotes(chroma = "100010010000", tonic = globalScale.tonic) {
  let shiftChroma = rotateArray(chroma.split(""), -tonic);
  let chOct = rotateArray(allNotes, -tonic).map((n) => {
    let noteName = Frequency(n.pitch + tonic + 57, "midi").toNote();
    return noteName;
  });
  let filtered = chOct.filter((val, i) => {
    if (shiftChroma[i] == "1") {
      return true;
    }
  });
  return Note.sortedNames(filtered);
}

export function playChromaOnce(chroma: string, tonic: number) {
  let notes = getChromaNotes(chroma, tonic);

  notes.forEach((name) => {
    midiOnce(name);
  });
  synthOnce(notes, "4n");
  // pianoOnce(notes, '4n')
}

export function playChroma(chroma: string, tonic: number): void {
  let notes = getChromaNotes(chroma, tonic);
  notes.forEach((name) => {
    midiPlay(name);
  });
  synthAttack(notes);
  // pianoAttack(notes)
}

export function stopChroma(chroma, tonic) {
  let notes = getChromaNotes(chroma, tonic);
  notes.forEach((name) => {
    midiStop(name);
  });
  synthRelease(notes);
  // pianoRelease(notes)
}

export function playNote(name) {
  midiPlay(name);
  synthAttack(name);
  // pianoAttack(notes)
}

export function stopNote(name) {
  midiStop(name);
  synthRelease(name);
  // pianoRelease(notes)
}
