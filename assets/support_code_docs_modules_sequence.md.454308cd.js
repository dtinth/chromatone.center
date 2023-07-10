import{_ as e,c as t,o as a,b as d}from"./chunks/framework.aa37bc02.js";const b=JSON.parse('{"title":"Module: sequence","description":"","frontmatter":{},"headers":[],"relativePath":"support/code/docs/modules/sequence.md","filePath":"support/code/docs/modules/sequence.md"}'),o={name:"support/code/docs/modules/sequence.md"},l=d('<p><a href="./../README.html">Use-chromatone documentation</a> / <a href="./../modules.html">Exports</a> / sequence</p><h1 id="module-sequence" tabindex="-1">Module: sequence <a class="header-anchor" href="#module-sequence" aria-label="Permalink to &quot;Module: sequence&quot;">​</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h3><ul><li><a href="./../interfaces/sequence.ClickSampler.html">ClickSampler</a></li></ul><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h3><ul><li><a href="./sequence.html#maxratio">maxRatio</a></li><li><a href="./sequence.html#tracks">tracks</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./sequence.html#geteuclideanrhythm">getEuclideanRhythm</a></li><li><a href="./sequence.html#usesequence">useSequence</a></li></ul><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="maxratio" tabindex="-1">maxRatio <a class="header-anchor" href="#maxratio" aria-label="Permalink to &quot;maxRatio&quot;">​</a></h3><p>• <code>Const</code> <strong>maxRatio</strong>: <code>ComputedRef</code>&lt;<code>number</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/sequence.ts#L65" target="_blank" rel="noreferrer">use/sequence.ts:65</a></p><hr><h3 id="tracks" tabindex="-1">tracks <a class="header-anchor" href="#tracks" aria-label="Permalink to &quot;tracks&quot;">​</a></h3><p>• <code>Const</code> <strong>tracks</strong>: <code>any</code>[]</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/sequence.ts#L62" target="_blank" rel="noreferrer">use/sequence.ts:62</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="geteuclideanrhythm" tabindex="-1">getEuclideanRhythm <a class="header-anchor" href="#geteuclideanrhythm" aria-label="Permalink to &quot;getEuclideanRhythm&quot;">​</a></h3><p>▸ <strong>getEuclideanRhythm</strong>(<code>x</code>, <code>total</code>): <code>number</code>[]</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>x</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>total</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code>[]</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/sequence.ts#L370" target="_blank" rel="noreferrer">use/sequence.ts:370</a></p><hr><h3 id="usesequence" tabindex="-1">useSequence <a class="header-anchor" href="#usesequence" aria-label="Permalink to &quot;useSequence&quot;">​</a></h3><p>▸ <strong>useSequence</strong>(<code>initial?</code>, <code>order?</code>, <code>mode?</code>, <code>maxSteps?</code>): <code>Object</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>initial</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>initial.over</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>4</code></td></tr><tr><td style="text-align:left;"><code>initial.sound</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&quot;A&quot;</code></td></tr><tr><td style="text-align:left;"><code>initial.under</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>4</code></td></tr><tr><td style="text-align:left;"><code>initial.volume</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>1</code></td></tr><tr><td style="text-align:left;"><code>order</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td></tr><tr><td style="text-align:left;"><code>mode</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&quot;bar&quot;</code></td></tr><tr><td style="text-align:left;"><code>maxSteps</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>64</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sampler</code></td><td style="text-align:left;"><a href="./../interfaces/sequence.ClickSampler.html"><code>ClickSampler</code></a></td></tr><tr><td style="text-align:left;"><code>seq</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/chromatone/chromatone.center/blob/f16c3a7e1/use/sequence.ts#L76" target="_blank" rel="noreferrer">use/sequence.ts:76</a></p>',38),r=[l];function n(c,i,s,h,u,f){return a(),t("div",null,r)}const q=e(o,[["render",n]]);export{b as __pageData,q as default};
