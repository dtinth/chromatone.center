import { Writer, Track, NoteEvent } from "midi-writer-js";
import { createAndDownloadBlobFile } from "./midi";
import { Midi } from "@tonejs/midi";
import { tempo } from "@use/tempo.js";
let notes = ["C", "E", "G", "B", "D", "F", "A", "C#", "D#", "F#", "G#", "A#"];

export function renderMidi(tracks) {
  let render = [];
  tracks.forEach((track, t) => {
    let division = 512 / track.metre.under;
    let midiTrack = new Track();
    midiTrack.setTempo(tempo.bpm);
    midiTrack.addInstrumentName("116");
    midiTrack.addTrackName("Chromatone beat " + t);
    midiTrack.setTimeSignature(4, 4);
    track.steps.forEach((step, s) => {
      step.forEach((code) => {
        if (track.mutes[s] || track.mutes[code]) return;
        let [beat, sub] = code.split("-").map(Number);
        let subdivision = division / step.length;
        let subStep = 0;
        if (step.length > 1) {
          subStep = sub * subdivision;
        }
        midiTrack.addEvent(
          new NoteEvent({
            pitch: track.accents[s]
              ? notes[t * 2] + "2"
              : notes[t * 2 + 1] + "2",
            duration: `T${subdivision}`,
            startTick: division * beat + subStep,
            velocity: track.accents[s] || track.accents[code] ? 100 : 64,
          })
        );
      });
    });
    // midiTrack.addEvent(
    //   new NoteEvent({
    //     pitch: 0,
    //     duration: `T1`,
    //     startTick: division * (track.steps.length - 1),
    //     velocity: 1,
    //   })
    // )
    render[t] = midiTrack;
  });

  var write = new Writer(render);
  let midiData = new Midi(write.buildFile());
  midiData.tracks.forEach((track, t) => {
    midiData.tracks[t].instrument.number = 119;
  });

  createAndDownloadBlobFile(midiData.toArray(), "Chromatone-beat");
}
