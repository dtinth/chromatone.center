/**
 * @module Calculations
 * @description All the basic math for note-frequency convertion
 */

/**
 * Note 0 in MIDI
 */
export const midiA = 69

export function midiColor(note: number) {
  const { pitch, octave } = pitchNoteOctave(note - midiA)
  return pitchColor(pitch, octave)
}

/**
 * Convert an unbound pitch to 0-11 pitch + octave
 */
export function pitchNoteOctave(pitch: number): { pitch: number, octave: number } {
  return {
    pitch: pitch > 0 ? pitch % 12 : 12 + (pitch % 12),
    octave: Math.floor(pitch / 12) + 4,
  }
}

/**
 * Determine a frequency in Hz out of a pitch with octave and optional tuning info
 */
export function pitchFreq(
  pitch = 0,
  octave = 3,
  middleA = 440,
  tuning = 'equal',
) {
  let hz = 0
  const justCents = [0, 112, 204, 316, 386, 498, 590, 702, 814, 884, 1017, 1088]
  if (tuning == 'equal') {
    hz = Number(middleA * Math.pow(2, octave - 3 + pitch / 12))
  }
  if (tuning == 'just') {
    let diff = Number(Math.pow(Math.pow(2, 1 / 1200), justCents[pitch]))
    hz = Number(middleA * Math.pow(2, octave - 4) * diff)
  }
  return hz
}

/**
 * Get a color for any given pitch and octave (velocity and alpha are also configurable)
 */
export function pitchColor(pitch = 0, octave?: number, velocity = 1, alpha = 1) {
  if (octave === undefined) {
    octave = Math.floor(pitch / 12) + 4
  }
  return `hsla(${(pitch % 12) * 30},${velocity * 100}%,${Math.abs(octave + 2) * 8
    }%,${alpha})`
}

/** 
 * Get a color for a certain pitch frequency in Hz 
 * */
export function freqColor(freq: number) {
  return pitchColor(freqPitch(freq))
}

/**
 * Get a pitch from a frequency
 */
export function freqPitch(freq: number | string, middleA = 440) {
  return 12 * (Math.log(Number(freq) / middleA) / Math.log(2))
}

/**
 * Check if a note in included in a chroma string
 */
export function isInChroma(chroma: string, tonic: number, note: number): boolean {
  return chroma.split('')[(24 + note - tonic) % 12] == '1'
}

/**
 * Radial coordinates calculation
 */
export function getCircleCoord(n = 0, total = 12, radius = 35, width = 100): { x: number, y: number } {
  let angle = ((n - total / 4) / (total / 2)) * Math.PI // Calculate the angle at which the element will be placed.
  // For a semicircle, we would use (i / numNodes) * Math.PI.
  let x = radius * Math.cos(angle) + width / 2 // Calculate the x position of the element.
  let y = radius * Math.sin(angle) + width / 2 // Calculate the y position of the element.
  return { x, y }
}

/** Rotate and array by a number of steps */
export function rotateArray(arr: any[], count = 1) {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)]
}

/**
 * Get cents difference between a certain pitch and an arbitrary frequency
 */
export function getCents(frequency: number, pitch: number) {
  return Math.floor(
    (1200 * Math.log(frequency / getStandardFrequency(pitch))) / Math.log(2)
  );
}
/**
 * Get a frequency for any given pitch
 */
export function getStandardFrequency(pitch: number, middleA = 440): number {
  return middleA * Math.pow(2, (pitch - 69) / 12);
}