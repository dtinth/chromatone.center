/**
 * @module AudioRecorder
 */

import { Recorder } from 'tone';
import { useLastChanged, useTimestamp } from '@vueuse/core'
import { getFilename } from './cast';
import { ref, computed } from 'vue'


export let recorder: Recorder

export const recording = ref(false)

const toggled = useLastChanged(recording)

const timestamp = useTimestamp()

const duration = computed(() => timestamp.value - toggled.value)

export const record = {
  start() {
    if (!recorder) useRecorder()
    recorder.start()
    recording.value = true
  },
  async stop() {
    recording.value = false
    // the recorded audio is returned as a blob
    const rec = await recorder.stop();
    // download the recording by creating an anchor element and blob url
    const url = URL.createObjectURL(rec);
    const anchor = document.createElement("a");
    anchor.download = getFilename('rec');
    anchor.href = url;
    anchor.click();
  }
}

export function useRecorder() {
  if (!recorder) { recorder = new Recorder(); }

  return { recorder, record, recording, toggled, duration }
}

