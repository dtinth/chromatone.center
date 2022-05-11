import { WebMidi, Note } from "webmidi"
import { useStorage, onKeyDown, onKeyUp } from "@vueuse/core"

export const midi = reactive({
  enabled: false,
  initiated: false,
  out: true,
  inputs: {},
  outputs: {},
  forwards: {},
  playing: false,
  channels: {},
  channel: useStorage("global-midi-channel", 1),
  note: {
    pitch: 0,
    channel: 1
  },
  offset: 0,
  keyboard: true,
  cc: {},
  message: null,
  log: [],
  clock: 0,
  filter: useStorage("global-midi-filter", {}),
  available: computed(() => Object.entries(midi.outputs).length > 0),
});

const noteKeys = {
  'aф': { note: 'C', offset: 0 },
  'wц': { note: 'C#', offset: 0 },
  'sы': { note: 'D', offset: 0 },
  'уe': { note: 'D#', offset: 0 },
  'dв': { note: 'E', offset: 0 },
  'fа': { note: 'F', offset: 0 },
  'tе': { note: 'F#', offset: 0 },
  'gп': { note: 'G', offset: 0 },
  'yн': { note: 'G#', offset: 0 },
  'hр': { note: 'A', offset: 0 },
  'uг': { note: 'A#', offset: 0 },
  'jо': { note: 'B', offset: 0 },
  'kл': { note: 'C', offset: 1 },
  'oщ': { note: 'C#', offset: 1 },
  'lд': { note: 'D', offset: 1 },
  'pз': { note: 'D#', offset: 1 },
  ';ж': { note: 'E', offset: 1 },
  '\'э': { note: 'F', offset: 1 },
  ']ъ': { note: 'F#', offset: 1 },
  '\\ё': { note: 'G', offset: 1 },
}

export function playKey(name, offset, off) {

  const note = new Note(name + (4 + offset + midi.offset), {
    attack: off ? 0 : 1,
  });
  const ev = {
    type: off ? "noteoff" : "noteon",
    note,
    port: { id: "PC Keyboard" },
    timestamp: midi.time,
    target: { number: 0 },
  };
  noteInOn(ev);
}

export function useMidi() {

  for (let keys in noteKeys) {
    onKeyDown(keys.split(''), (ev) => {
      if (ev.repeat || !midi.keyboard) return
      playKey(noteKeys[keys].note, noteKeys[keys].offset)
    })
    onKeyUp(keys.split(''), (ev) => {
      if (ev.repeat || !midi.keyboard) return
      playKey(noteKeys[keys].note, noteKeys[keys].offset, true)
    })
  }

  onMounted(() => {
    if (WebMidi.supported) {
      setupMidi();
    }
  });

  watchEffect(() => {
    if (!midi.out) return;
    let outs = Object.values(WebMidi.outputs);
    if (midi.playing) {
      outs.forEach((output) => {
        output.sendContinue();
      });
    } else {
      outs.forEach((output) => {
        output.sendStop();
      });
    }
  });

  return {
    midi,
    midiAttack,
    midiRelease,
    midiOnce,
    setCC,
    WebMidi,
  };
}

function setupMidi() {
  if (midi.initiated) return;

  WebMidi.enable();
  WebMidi.addListener("enabled", (e) => {
    midi.enabled = true;
    initMidi();
  });

  // let interval = setInterval(() => {
  //   initMidi();
  // }, 3000);

  WebMidi.addListener("connected", (e) => {
    initMidi();
  });

  WebMidi.addListener("disconnected", (e) => {
    delete midi[e.port.type + "s"][e.port.id];
  });
  midi.initiated = true;
}

function initMidi() {
  midi.inputs = reactive({});

  WebMidi.inputs.forEach((input) => {
    midi.enabled = true;
    midi.inputs[input.id] = {
      name: input.name,
      manufacturer: input.manufacturer,
      forwarder: input.addForwarder(),
      event: null,
      note: null,
      cc: null,
    };
    input.removeListener();
    input.addListener("start", () => {
      midi.playing = true;
    });
    input.addListener("stop", () => {
      midi.playing = false;
      midi.channels = {};
    });
    input.addListener("midimessage", (ev) => {
      if (ev?.message?.type == "clock") return;
      midi.inputs[input.id].event = ev;
      midi.message = ev.message;
      midi.log.unshift(ev);
      if (midi.log.length > 100) midi.log.pop();
    });
    input.addListener(
      "noteon",
      (ev) => {
        midi.inputs[input.id].note = noteInOn(ev);
      },
      {
        channels: "all",
      }
    );
    input.addListener(
      "noteoff",
      (ev) => {
        midi.inputs[input.id].note = noteInOn(ev);
      },
      { channels: "all" }
    );

    input.addListener(
      "controlchange",
      (ev) => {
        const cc = ccIn(ev);
        if (!cc) return;
        midi.inputs[input.id].cc = cc;
        midi.cc = cc;
      },
      {
        channels: "all",
      }
    );

    input.addListener("clock", (ev) => {
      midi.clock = ev.timestamp;
      //bpm = 60000 / ((ev.timestamp - prevTimestamp) * PPQ)  ppq=24
    });
  });

  midi.outputs = reactive({});
  WebMidi.outputs.forEach((output) => {
    midi.outputs[output.id] = {
      name: output.name,
      manufacturer: output.manufacturer,
    };
  });
}

function noteInOn(ev) {
  let note = ev.note;
  note.port = ev.port.id;
  note.type = ev.type;
  note.timestamp = ev.timestamp;
  note.channel = ev.target.number;
  if (ev.type == "noteoff") {
    note.velocity = 0;
  } else {
    note.velocity = 100;
  }
  note.pitch = (note.number + 3) % 12;
  note.octA = Math.floor((note.number + 3) / 12) - 1;
  if (midi.filter[note.channel]) return;
  midi.note = note;
  createChannel(note.channel);
  midi.channels[note.channel].notes[note.number] = note;
  return note;
}

function ccIn(ev) {
  if (midi.filter[ev.target.number]) return;
  let cc = {
    channel: ev.target.number,
    timestamp: ev.timestamp,
    number: ev.controller.number,
    value: ev.value,
    raw: ev.rawValue,
    port: ev.port.id,
  };
  createChannel(cc.channel);
  midi.channels[cc.channel].cc[cc.number] = cc;
  return cc;
}

function createChannel(ch) {
  if (!midi.channels[ch]) {
    midi.channels[ch] = { num: ch, activeNotes: {}, notes: {}, cc: {} };
  }
}

function setVelocity(channel, note, velocity) {
  if (midi.channels?.[channel]?.notes?.[note]) {
    midi.channels[channel].notes[note].velocity = velocity;
  }
}

export function midiAttack(note, options) {
  if (!midi.out) return;
  let channel = note?.channel || midi.channel;
  setVelocity(channel, note?.number, 100);
  WebMidi.outputs.forEach((output) => {
    output.playNote(note.number, {
      channels: channel,
      ...options,
    });
  });
}

export function midiPlay(note, options) {
  if (!midi.out) return;
  WebMidi.outputs.forEach((output) => {
    output.playNote(note, {
      channels: midi.channel,
      ...options,
    });
  });
}

export function midiStop(note, options) {
  if (!midi.out) return;
  if (note) {
    WebMidi.outputs.forEach((output) => {
      output.stopNote(note, { channels: midi.channel, ...options });
    });
  } else {
    WebMidi.outputs.forEach((output) => {
      output.sendAllNotesOff();
      output.sendAllSoundOff({ time: "+1" });
    });
  }
}

export function midiRelease(note) {
  if (!midi.out) return;
  if (note) {
    let channel = note?.channel || midi.channel;
    setVelocity(channel, note?.number, 0);
    WebMidi.outputs.forEach((output) => {
      output.stopNote(note.number, { channels: channel });
    });
  } else {
    WebMidi.outputs.forEach((output) => {
      output.sendAllNotesOff();
      output.sendAllSoundOff({ time: "+1" });
    });
  }
}

export function midiOnce(note, options) {
  if (!midi.out || midi.filter[midi.channel]) return;
  midiPlay(note, options);
  setTimeout(() => {
    midiStop(note, options);
  }, 300);
}

export function setCC(cc, value) {
  if (!midi.out) return;
  WebMidi.outputs.forEach((output) => {
    output.sendControlChange(Number(cc.number), value, cc.channel);
  });
}

export function stopAll() {
  if (!midi.out) return;
  midi.channels = {};
  midi.playing = false;
  WebMidi.outputs.forEach((output) => {
    output.sendAllNotesOff();
    output.sendAllSoundOff({ time: "+1" });
    output.sendReset();
  });
}

export function forwardMidi(iid, oid) {
  const output = WebMidi.outputs.find((out) => out.id == oid);
  const destinations = midi.inputs[iid].forwarder.destinations;
  const index = destinations.indexOf(output);

  if (index == -1) {
    destinations.push(output);
    midi.forwards[iid] = midi.forwards[iid] || {};
    midi.forwards[iid][oid] = true;
  } else {
    destinations.splice(index, 1);
    delete midi.forwards?.[iid]?.[oid];
  }
}
