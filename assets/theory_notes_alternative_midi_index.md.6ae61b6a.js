import{_ as t,v as a,b as n,F as e}from"./chunks/framework.7e747cd7.js";const s="/assets/midi-notes.95bdeb97.jpg",o="/assets/midi_data.5a82b6a0.gif",i="/assets/GM_Standard_Drum_Map_on_the_keyboard.3c4386ee.svg",w=JSON.parse('{"title":"MIDI","description":"Standard for digital music communication","frontmatter":{"title":"MIDI","description":"Standard for digital music communication","date":"2021-09-12T00:00:00.000Z","cover":"GM_Standard_Drum_Map_on_the_keyboard.svg"},"headers":[],"relativePath":"theory/notes/alternative/midi/index.md","filePath":"theory/notes/alternative/midi/index.md"}'),r={name:"theory/notes/alternative/midi/index.md"},d=e("p",null,"At the 1983 Winter NAMM Show, Smith demonstrated a MIDI connection between Prophet 600 and Roland JP-6 synthesizers. The MIDI specification was published in August 1983. The MIDI standard was unveiled by Kakehashi and Smith, who received Technical Grammy Awards in 2013 for their work. In 1982, the first instruments were released with MIDI, the Roland Jupiter-6 and the Prophet 600. In 1983, the first MIDI drum machine, the Roland TR-909, and the first MIDI sequencer, the Roland MSQ-700 were released. The first computer to support MIDI, the NEC PC-88 and PC-98, was released in 1982.",-1),c=e("p",null,[e("img",{src:s,alt:""})],-1),h=e("p",null,"A MIDI message is an instruction that controls some aspect of the receiving device. A MIDI message consists of a status byte, which indicates the type of the message, followed by up to two data bytes that contain the parameters. MIDI messages can be channel messages sent on only one of the 16 channels and monitored only by devices on that channel, or system messages that all devices receive. Each receiving device ignores data not relevant to its function.There are five types of message: Channel Voice, Channel Mode, System Common, System Real-Time, and System Exclusive.",-1),m=e("p",null,[e("img",{src:o,alt:""})],-1),l=e("p",null,`Channel Voice messages transmit real-time performance data over a single channel. Examples include "note-on" messages which contain a MIDI note number that specifies the note's pitch, a velocity value that indicates how forcefully the note was played, and the channel number; "note-off" messages that end a note; program change messages that change a device's patch; and control changes that allow adjustment of an instrument's parameters. MIDI notes are numbered from 0 to 127 assigned to C−1 to G9. This corresponds to a range of 8.175799 to 12543.85 Hz (assuming equal temperament and 440 Hz A4) and extends beyond the 88 note piano range from A0 to C8. Middle C has the number 60. A4 (A440) – 69.`,-1),p=e("p",null,[e("img",{src:i,alt:"svg"})],-1),_=[d,c,h,m,l,p];function u(f,g,I,v,y,M){return a(),n("div",null,_)}const D=t(r,[["render",u]]);export{w as __pageData,D as default};