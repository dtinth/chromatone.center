import{_ as t,c as e,o as d,b as o}from"./chunks/framework.aa37bc02.js";const m=JSON.parse('{"title":"Module: Tempo","description":"","frontmatter":{},"headers":[],"relativePath":"support/code/docs/modules/Tempo.md","filePath":"support/code/docs/modules/Tempo.md"}'),l={name:"support/code/docs/modules/Tempo.md"},c=o('<p><a href="./../README.html">Use-chromatone documentation</a> / <a href="./../modules.html">Exports</a> / Tempo</p><h1 id="module-tempo" tabindex="-1">Module: Tempo <a class="header-anchor" href="#module-tempo" aria-label="Permalink to &quot;Module: Tempo&quot;">​</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h3><ul><li><a href="./Tempo.html#tempo">tempo</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./Tempo.html#tap">tap</a></li><li><a href="./Tempo.html#usetempo">useTempo</a></li></ul><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="tempo" tabindex="-1">tempo <a class="header-anchor" href="#tempo" aria-label="Permalink to &quot;tempo&quot;">​</a></h3><p>• <code>Const</code> <strong>tempo</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>blink</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>bpm</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>number</code>&gt;</td></tr><tr><td style="text-align:left;"><code>clock?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>digit</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>number</code>&gt;</td></tr><tr><td style="text-align:left;"><code>hz</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>initialized</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>metre</code></td><td style="text-align:left;">{ <code>num</code>: <code>MaybeRef</code>&lt;<code>string</code>&gt; ; <code>over</code>: <code>number</code> ; <code>under</code>: <code>number</code> }</td></tr><tr><td style="text-align:left;"><code>metre.num</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>metre.over</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>metre.under</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>midiClock</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>mute</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>note</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>pitch</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>number</code>&gt;</td></tr><tr><td style="text-align:left;"><code>playing</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>position</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>progress</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>set</code></td><td style="text-align:left;">(<code>diff</code>: <code>number</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>started</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>stopped</code></td><td style="text-align:left;"><code>boolean</code> | <code>number</code></td></tr><tr><td style="text-align:left;"><code>tabSync</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>tap</code></td><td style="text-align:left;">{ <code>bpm</code>: <code>number</code> ; <code>diff</code>: <code>number</code> ; <code>last</code>: <code>number</code> ; <code>tap</code>: <code>Function</code> ; <code>timeout</code>: <code>number</code> ; <code>times</code>: <code>number</code>[] }</td></tr><tr><td style="text-align:left;"><code>tap.bpm</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>tap.diff</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>tap.last</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>tap.tap</code></td><td style="text-align:left;"><code>Function</code></td></tr><tr><td style="text-align:left;"><code>tap.timeout</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>tap.times</code></td><td style="text-align:left;"><code>number</code>[]</td></tr><tr><td style="text-align:left;"><code>ticks</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>volume</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>number</code>&gt;</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/tempo.ts#L19" target="_blank" rel="noreferrer">use/tempo.ts:19</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="tap" tabindex="-1">tap <a class="header-anchor" href="#tap" aria-label="Permalink to &quot;tap&quot;">​</a></h3><p>▸ <strong>tap</strong>(): <code>void</code></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/tempo.ts#L252" target="_blank" rel="noreferrer">use/tempo.ts:252</a></p><hr><h3 id="usetempo" tabindex="-1">useTempo <a class="header-anchor" href="#usetempo" aria-label="Permalink to &quot;useTempo&quot;">​</a></h3><p>▸ <strong>useTempo</strong>(): <code>Object</code></p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>blink</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>bpm</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>number</code>&gt;</td></tr><tr><td style="text-align:left;"><code>clock?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>digit</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>number</code>&gt;</td></tr><tr><td style="text-align:left;"><code>hz</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>initialized</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>metre</code></td><td style="text-align:left;">{ <code>num</code>: <code>MaybeRef</code>&lt;<code>string</code>&gt; ; <code>over</code>: <code>number</code> ; <code>under</code>: <code>number</code> }</td></tr><tr><td style="text-align:left;"><code>metre.num</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>metre.over</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>metre.under</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>midiClock</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>mute</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>note</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>pitch</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>number</code>&gt;</td></tr><tr><td style="text-align:left;"><code>playing</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>position</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>progress</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>set</code></td><td style="text-align:left;">(<code>diff</code>: <code>number</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>started</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>stopped</code></td><td style="text-align:left;"><code>number</code> | <code>boolean</code></td></tr><tr><td style="text-align:left;"><code>tabSync</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>tap</code></td><td style="text-align:left;">{ <code>bpm</code>: <code>number</code> ; <code>diff</code>: <code>number</code> ; <code>last</code>: <code>number</code> ; <code>tap</code>: <code>Function</code> ; <code>timeout</code>: <code>number</code> ; <code>times</code>: <code>number</code>[] }</td></tr><tr><td style="text-align:left;"><code>tap.bpm</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>tap.diff</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>tap.last</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>tap.tap</code></td><td style="text-align:left;"><code>Function</code></td></tr><tr><td style="text-align:left;"><code>tap.timeout</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>tap.times</code></td><td style="text-align:left;"><code>number</code>[]</td></tr><tr><td style="text-align:left;"><code>ticks</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>volume</code></td><td style="text-align:left;"><code>MaybeRef</code>&lt;<code>number</code>&gt;</td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/tempo.ts#L99" target="_blank" rel="noreferrer">use/tempo.ts:99</a></p>',29),a=[c];function n(r,i,s,f,g,y){return d(),e("div",null,a)}const u=t(l,[["render",n]]);export{m as __pageData,u as default};
