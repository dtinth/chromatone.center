import{_ as e,c as t,o as a,b as r}from"./chunks/framework.aa37bc02.js";const m=JSON.parse('{"title":"Module: Calculations","description":"","frontmatter":{},"headers":[],"relativePath":"support/code/docs/modules/Calculations.md","filePath":"support/code/docs/modules/Calculations.md"}'),o={name:"support/code/docs/modules/Calculations.md"},l=r('<p><a href="./../README.html">Use-chromatone documentation</a> / <a href="./../modules.html">Exports</a> / Calculations</p><h1 id="module-calculations" tabindex="-1">Module: Calculations <a class="header-anchor" href="#module-calculations" aria-label="Permalink to &quot;Module: Calculations&quot;">​</a></h1><p><strong><code>Description</code></strong></p><p>All the basic math for note-frequency convertion</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h3><ul><li><a href="./Calculations.html#midia">midiA</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./Calculations.html#freqcolor">freqColor</a></li><li><a href="./Calculations.html#freqpitch">freqPitch</a></li><li><a href="./Calculations.html#getcents">getCents</a></li><li><a href="./Calculations.html#getcirclecoord">getCircleCoord</a></li><li><a href="./Calculations.html#getstandardfrequency">getStandardFrequency</a></li><li><a href="./Calculations.html#isinchroma">isInChroma</a></li><li><a href="./Calculations.html#midicolor">midiColor</a></li><li><a href="./Calculations.html#pitchcolor">pitchColor</a></li><li><a href="./Calculations.html#pitchfreq">pitchFreq</a></li><li><a href="./Calculations.html#pitchnoteoctave">pitchNoteOctave</a></li><li><a href="./Calculations.html#rotatearray">rotateArray</a></li></ul><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="midia" tabindex="-1">midiA <a class="header-anchor" href="#midia" aria-label="Permalink to &quot;midiA&quot;">​</a></h3><p>• <code>Const</code> <strong>midiA</strong>: <code>69</code></p><p>Note 0 in MIDI</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/calculations.ts#L9" target="_blank" rel="noreferrer">use/calculations.ts:9</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="freqcolor" tabindex="-1">freqColor <a class="header-anchor" href="#freqcolor" aria-label="Permalink to &quot;freqColor&quot;">​</a></h3><p>▸ <strong>freqColor</strong>(<code>freq</code>): <code>string</code></p><p>Get a color for a certain pitch frequency in Hz</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>freq</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/calculations.ts#L61" target="_blank" rel="noreferrer">use/calculations.ts:61</a></p><hr><h3 id="freqpitch" tabindex="-1">freqPitch <a class="header-anchor" href="#freqpitch" aria-label="Permalink to &quot;freqPitch&quot;">​</a></h3><p>▸ <strong>freqPitch</strong>(<code>freq</code>, <code>middleA?</code>): <code>number</code></p><p>Get a pitch from a frequency</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>freq</code></td><td style="text-align:left;"><code>string</code> | <code>number</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>middleA</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>440</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/calculations.ts#L68" target="_blank" rel="noreferrer">use/calculations.ts:68</a></p><hr><h3 id="getcents" tabindex="-1">getCents <a class="header-anchor" href="#getcents" aria-label="Permalink to &quot;getCents&quot;">​</a></h3><p>▸ <strong>getCents</strong>(<code>frequency</code>, <code>pitch</code>): <code>number</code></p><p>Get cents difference between a certain pitch and an arbitrary frequency</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>frequency</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>pitch</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/calculations.ts#L98" target="_blank" rel="noreferrer">use/calculations.ts:98</a></p><hr><h3 id="getcirclecoord" tabindex="-1">getCircleCoord <a class="header-anchor" href="#getcirclecoord" aria-label="Permalink to &quot;getCircleCoord&quot;">​</a></h3><p>▸ <strong>getCircleCoord</strong>(<code>n?</code>, <code>total?</code>, <code>radius?</code>, <code>width?</code>): <code>Object</code></p><p>Radial coordinates calculation</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>n</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td></tr><tr><td style="text-align:left;"><code>total</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>12</code></td></tr><tr><td style="text-align:left;"><code>radius</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>35</code></td></tr><tr><td style="text-align:left;"><code>width</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>100</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>x</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>y</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/calculations.ts#L82" target="_blank" rel="noreferrer">use/calculations.ts:82</a></p><hr><h3 id="getstandardfrequency" tabindex="-1">getStandardFrequency <a class="header-anchor" href="#getstandardfrequency" aria-label="Permalink to &quot;getStandardFrequency&quot;">​</a></h3><p>▸ <strong>getStandardFrequency</strong>(<code>pitch</code>, <code>middleA?</code>): <code>number</code></p><p>Get a frequency for any given pitch</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pitch</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>middleA</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>440</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/calculations.ts#L106" target="_blank" rel="noreferrer">use/calculations.ts:106</a></p><hr><h3 id="isinchroma" tabindex="-1">isInChroma <a class="header-anchor" href="#isinchroma" aria-label="Permalink to &quot;isInChroma&quot;">​</a></h3><p>▸ <strong>isInChroma</strong>(<code>chroma</code>, <code>tonic</code>, <code>note</code>): <code>boolean</code></p><p>Check if a note in included in a chroma string</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>chroma</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>tonic</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>note</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/calculations.ts#L75" target="_blank" rel="noreferrer">use/calculations.ts:75</a></p><hr><h3 id="midicolor" tabindex="-1">midiColor <a class="header-anchor" href="#midicolor" aria-label="Permalink to &quot;midiColor&quot;">​</a></h3><p>▸ <strong>midiColor</strong>(<code>note</code>): <code>string</code></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>note</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/calculations.ts#L11" target="_blank" rel="noreferrer">use/calculations.ts:11</a></p><hr><h3 id="pitchcolor" tabindex="-1">pitchColor <a class="header-anchor" href="#pitchcolor" aria-label="Permalink to &quot;pitchColor&quot;">​</a></h3><p>▸ <strong>pitchColor</strong>(<code>pitch?</code>, <code>octave?</code>, <code>velocity?</code>, <code>alpha?</code>): <code>string</code></p><p>Get a color for any given pitch and octave (velocity and alpha are also configurable)</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pitch</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td></tr><tr><td style="text-align:left;"><code>octave?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>velocity</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>1</code></td></tr><tr><td style="text-align:left;"><code>alpha</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>1</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/calculations.ts#L50" target="_blank" rel="noreferrer">use/calculations.ts:50</a></p><hr><h3 id="pitchfreq" tabindex="-1">pitchFreq <a class="header-anchor" href="#pitchfreq" aria-label="Permalink to &quot;pitchFreq&quot;">​</a></h3><p>▸ <strong>pitchFreq</strong>(<code>pitch?</code>, <code>octave?</code>, <code>middleA?</code>, <code>tuning?</code>): <code>number</code></p><p>Determine a frequency in Hz out of a pitch with octave and optional tuning info</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pitch</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td></tr><tr><td style="text-align:left;"><code>octave</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>3</code></td></tr><tr><td style="text-align:left;"><code>middleA</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>440</code></td></tr><tr><td style="text-align:left;"><code>tuning</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;equal&#39;</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/calculations.ts#L29" target="_blank" rel="noreferrer">use/calculations.ts:29</a></p><hr><h3 id="pitchnoteoctave" tabindex="-1">pitchNoteOctave <a class="header-anchor" href="#pitchnoteoctave" aria-label="Permalink to &quot;pitchNoteOctave&quot;">​</a></h3><p>▸ <strong>pitchNoteOctave</strong>(<code>pitch</code>): <code>Object</code></p><p>Convert an unbound pitch to 0-11 pitch + octave</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pitch</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>octave</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>pitch</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/calculations.ts#L19" target="_blank" rel="noreferrer">use/calculations.ts:19</a></p><hr><h3 id="rotatearray" tabindex="-1">rotateArray <a class="header-anchor" href="#rotatearray" aria-label="Permalink to &quot;rotateArray&quot;">​</a></h3><p>▸ <strong>rotateArray</strong>(<code>arr</code>, <code>count?</code>): <code>any</code>[]</p><p>Rotate and array by a number of steps</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>arr</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>count</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>1</code></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code>[]</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/calculations.ts#L91" target="_blank" rel="noreferrer">use/calculations.ts:91</a></p>',126),d=[l];function n(i,c,s,h,u,f){return a(),t("div",null,d)}const p=e(o,[["render",n]]);export{m as __pageData,p as default};
