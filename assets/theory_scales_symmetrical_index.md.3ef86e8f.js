import{_ as t}from"./chunks/collection.ed368683.js";import{c as o,d as i,u as s,e as n,o as a}from"./chunks/framework.f75e5dc4.js";import"./chunks/index.670ce27b.js";import"./chunks/row.9c52a30c.js";import"./chunks/calculations.65ee336d.js";import"./chunks/colors.6e70028c.js";import"./chunks/index.654bd828.js";import"./chunks/index.cccf7ef0.js";import"./chunks/midi.ee496394.js";import"./chunks/index.de966dde.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.140cffd8.js";import"./chunks/synth.ffb45e01.js";import"./chunks/audio.2835df43.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.0ce05937.js";import"./chunks/AutoPanner.5498cf00.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/theory.dec16ed9.js";import"./chunks/index.be7eb4a8.js";import"./chunks/index.9f9b4fe3.js";import"./chunks/index.2a263da6.js";import"./chunks/code.6b804159.js";import"./chunks/circle.ef9ab7a5.js";import"./chunks/keys.da6b4081.js";import"./chunks/render.da300d4a.js";import"./chunks/svg.fc0f1a55.js";import"./chunks/state.55b93a5f.js";import"./chunks/index.04f31bd2.js";import"./chunks/state.4dc7c12e.js";const r={first:{title:"First",link:"https://en.wikipedia.org/wiki/Whole_tone_scale",chroma:"101010101010",description:'A whole-tone scale is a scale in which each note is separated from its neighbors by the interval of a whole tone. In twelve-tone equal temperament, there are only two complementary whole-tone scales, both six-note or hexatonic scales. A single whole tone scale can also be thought of as a "six-tone equal temperament".'},second:{title:"Second",link:"https://en.wikipedia.org/wiki/Octatonic_scale",chroma:"110110110110",description:"The second mode, also called the octatonic, diminished, whole-half, or half-whole scale, is divided into four groups of three notes each. It contains the intervals semitone, tone, semitone, tone, semitone, tone, semitone, tone – it has three transpositions, like the diminished 7th chord, and two modes."},third:{title:"Third",link:"https://en.wikipedia.org/wiki/Mode_of_limited_transposition",chroma:"101110111011",description:"The third mode is divided into three groups of four notes each. It contains the intervals tone, semitone, semitone, tone, semitone, semitone, tone, semitone, semitone – it has four transpositions, like the augmented triad, and three modes."},fourth:{title:"Fourth",chroma:"111001111001",description:"The fourth mode contains the intervals semitone, semitone, minor third, semitone, semitone, semitone, minor third, semitone – it has six transpositions, like the tritone, and four modes."},fifth:{title:"Fifth",chroma:"110001110001",description:"The fifth mode contains the intervals semitone, major third, semitone, semitone, major third, semitone – it has six transpositions, like the tritone, and three modes."},sixth:{title:"Sixth",chroma:"101011101011",description:"The sixth mode has the intervals tone, tone, semitone, semitone, tone, tone, semitone, semitone – it has six transpositions, like the tritone, and four modes."},seven:{title:"Seventh",chroma:"111101111101",description:"The seventh mode contains the intervals semitone, semitone, semitone, tone, semitone, semitone, semitone, semitone, tone, semitone – it has six transpositions, like the tritone, and five modes."}},h=n('<p>Asymmetric scales are &quot;far more common&quot; than symmetric scales and this may be accounted for by the inability of symmetric scales to possess the property of uniqueness (containing each interval class a unique number of times) which assists with determining the location of notes in relation to the first note of the scale.</p><p>Modes of limited transposition are musical modes or scales that fulfill specific criteria relating to their symmetry and the repetition of their interval groups. These scales may be transposed to all twelve notes of the chromatic scale, but at least two of these transpositions must result in the same pitch classes, thus their transpositions are &quot;limited&quot;. They were compiled by the French composer Olivier Messiaen, and published in his book La technique de mon langage musical (&quot;The Technique of my Musical Language&quot;).</p><blockquote><p>Based on our present chromatic system, a tempered system of 12 sounds, these modes are formed of several symmetrical groups, the last note of each group always being common with the first of the following group. At the end of a certain number of chromatic transpositions which varies with each mode, they are no longer transposable, giving exactly the same notes as the first.</p></blockquote><p>Messiaen found ways of employing all of the modes of limited transposition harmonically, melodically, and sometimes polyphonically. The whole-tone and octatonic scales have enjoyed quite widespread use since the turn of the 20th century, particularly by Debussy (the whole-tone scale) and Stravinsky (the octatonic scale).</p><p>The symmetry inherent in these modes (which means no note can be perceived as the tonic), together with certain rhythmic devices, Messiaen described as containing &quot;the charm of impossibilities&quot;.</p><p>The composer Tōru Takemitsu made frequent use of Messiaen&#39;s modes, particularly the third mode.</p><h2 id="definition-by-chromatic-transposition" tabindex="-1">Definition by chromatic transposition <a class="header-anchor" href="#definition-by-chromatic-transposition" aria-label="Permalink to &quot;Definition by chromatic transposition&quot;">​</a></h2><p>Transposing the diatonic major scale up in semitones results in a different set of notes being used each time. For example, C major consists of C, D, E, F, G, A, B, and the scale a semitone higher (D♭ major) consists of D♭, E♭, F, G♭, A♭, B♭, C. By transposing D♭ major up another semitone, another new set of notes (D major) is produced, and so on, giving 12 different diatonic scales in total. When transposing a mode of limited transposition this is not the case. For example, the mode of limited transposition that Messiaen labelled &quot;Mode 1&quot;, which is the whole tone scale, contains the notes C, D, E, F♯, G♯, A♯; transposing this mode up a semitone produces C♯, D♯, F, G, A, B. Transposing this up another semitone produces D, E, F♯, G♯, A♯, C, which is the same set of notes as the original scale. Since transposing the mode up a whole tone produces the same set of notes, mode 1 has only 2 transpositions.</p><p>Any scale having 12 different transpositions is not a mode of limited transposition.</p><h2 id="definition-by-shifting-modal-degrees" tabindex="-1">Definition by shifting modal degrees <a class="header-anchor" href="#definition-by-shifting-modal-degrees" aria-label="Permalink to &quot;Definition by shifting modal degrees&quot;">​</a></h2><p>Consider the intervals of the major scale: tone, tone, semitone, tone, tone, tone, semitone. Starting the scale on a different degree will always create a new mode with individual interval layouts—for example starting on the second degree of a major scale gives the &quot;Dorian mode&quot;—tone, semitone, tone, tone, tone, semitone, tone. This is not so of the modes of limited transposition, which can be modally shifted only a limited number of times. For example, mode 1, the whole tone scale, contains the intervals tone, tone, tone, tone, tone, tone. Starting on any degree of the mode gives the same sequence of intervals, and therefore the whole tone scale has only 1 mode. Messiaen&#39;s mode 2, or the diminished scale, consists of semitone, tone, semitone, tone, semitone, tone, semitone, tone, which can be arranged only 2 ways, starting with either a tone or a semitone. Therefore mode 2 has two modes.</p><p>Any scale having the same number of modes as notes is not a mode of limited transposition.</p><h3 id="whole-tone-scale" tabindex="-1">Whole tone scale <a class="header-anchor" href="#whole-tone-scale" aria-label="Permalink to &quot;Whole tone scale&quot;">​</a></h3><p>Interval cycle 2 (C2).</p><p>A whole-tone scale is a scale in which each note is separated from its neighbors by the interval of a whole tone. In twelve-tone equal temperament, there are only two complementary whole-tone scales, both six-note or hexatonic scales. A single whole tone scale can also be thought of as a &quot;six-tone equal temperament&quot;.</p><p>The whole-tone scale has no leading tone and because all tones are the same distance apart, &quot;no single tone stands out, and the scale creates a blurred, indistinct effect&quot;. This effect is especially emphasised by the fact that triads built on such scale tones are all augmented triads. Indeed, all six tones of a whole-tone scale can be played simply with two augmented triads whose roots are a major second apart. Since they are symmetrical, whole-tone scales do not give a strong impression of the tonic or tonality.</p><p>Whole tone scale was used notably by Bach and Mozart, Glinka and Rimsky-Korsakov. H. C. Colles names as the &quot;childhood of the whole-tone scale&quot; the music of Berlioz and Schubert in France and Austria and then Russians Glinka and Dargomyzhsky. Claude Debussy, who had been influenced by Russians, along with other impressionist composers made extensive use of whole tone scales. Voiles, the second piece in Debussy&#39;s first book of Préludes, is almost entirely within one whole-tone scale.</p><p>The rāga Sahera in Hindustani classical music uses the same intervals as the whole-tone scale.</p><h3 id="from-second-to-the-seventh-modes" tabindex="-1">From second to the seventh modes <a class="header-anchor" href="#from-second-to-the-seventh-modes" aria-label="Permalink to &quot;From second to the seventh modes&quot;">​</a></h3>',19),L=JSON.parse('{"title":"Symmetrical scales","description":"Modes of limited transpostions and interval cycles","frontmatter":{"title":"Symmetrical scales","description":"Modes of limited transpostions and interval cycles","date":"2021-09-12T00:00:00.000Z"},"headers":[],"relativePath":"theory/scales/symmetrical/index.md","filePath":"theory/scales/symmetrical/index.md","lastUpdated":1678955889000}'),l={name:"theory/scales/symmetrical/index.md"},J=Object.assign(l,{setup(m){return(c,d)=>{const e=t;return a(),o("div",null,[h,i(e,{collection:s(r)},null,8,["collection"])])}}});export{L as __pageData,J as default};
