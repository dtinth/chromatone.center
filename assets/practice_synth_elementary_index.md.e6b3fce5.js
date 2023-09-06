import{c as a,f as n,u as l,h as o,o as e,R as p,S as t}from"./chunks/framework.18a7d3ba.js";const r=o(`<h2 id="modular-synth" tabindex="-1">Modular synth <a class="header-anchor" href="#modular-synth" aria-label="Permalink to &quot;Modular synth&quot;">​</a></h2><p>Built with JS, but operated by WASM lib in a separate audio thread. Construction started around June 2023 and is ongoing till then. Supposed to be gradually substituting the sitewide Tone.js synth used by now.</p><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><ul><li><a href="https://www.elementary.audio/docs/guides/Understanding_Keys" target="_blank" rel="noreferrer">https://www.elementary.audio/docs/guides/Understanding_Keys</a></li><li><a href="https://www.elementary.audio/docs/reference/Math" target="_blank" rel="noreferrer">https://www.elementary.audio/docs/reference/Math</a></li><li><a href="https://github.com/elemaudio/web-examples" target="_blank" rel="noreferrer">https://github.com/elemaudio/web-examples</a></li><li><a href="https://github.com/bgins/coincident-spectra/blob/main/src/lib/audio/audio.ts" target="_blank" rel="noreferrer">https://github.com/bgins/coincident-spectra/blob/main/src/lib/audio/audio.ts</a></li><li><a href="https://github.com/teetow/elementary_grid" target="_blank" rel="noreferrer">https://github.com/teetow/elementary_grid</a></li><li><a href="https://www.nickwritesablog.com/drum-synthesis-in-javascript/" target="_blank" rel="noreferrer">https://www.nickwritesablog.com/drum-synthesis-in-javascript/</a></li><li><a href="https://github.com/elemaudio/web-examples/blob/master/planets/app.js" target="_blank" rel="noreferrer">https://github.com/elemaudio/web-examples/blob/master/planets/app.js</a></li><li><a href="https://github.com/teetow/elementary_grid/blob/master/src/lib/useSynth.tsx" target="_blank" rel="noreferrer">https://github.com/teetow/elementary_grid/blob/master/src/lib/useSynth.tsx</a></li></ul><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><ul><li><a href="https://signalsmith-audio.co.uk/writing/2021/lets-write-a-reverb/" target="_blank" rel="noreferrer">https://signalsmith-audio.co.uk/writing/2021/lets-write-a-reverb/</a></li><li><a href="https://ccrma.stanford.edu/~jos/" target="_blank" rel="noreferrer">https://ccrma.stanford.edu/~jos/</a></li><li><a href="https://jackschaedler.github.io/circles-sines-signals/" target="_blank" rel="noreferrer">https://jackschaedler.github.io/circles-sines-signals/</a></li><li><a href="https://www.soundonsound.com/synthesizers/synth-secrets" target="_blank" rel="noreferrer">https://www.soundonsound.com/synthesizers/synth-secrets</a></li><li><a href="https://www.theaudioprogrammer.com/" target="_blank" rel="noreferrer">https://www.theaudioprogrammer.com/</a></li><li><a href="https://www.dsprelated.com/" target="_blank" rel="noreferrer">https://www.dsprelated.com/</a></li><li><a href="https://www.earlevel.com/main/" target="_blank" rel="noreferrer">https://www.earlevel.com/main/</a></li><li><a href="http://www.willpirkle.com/" target="_blank" rel="noreferrer">http://www.willpirkle.com/</a></li><li><a href="https://www.hackaudio.com/" target="_blank" rel="noreferrer">https://www.hackaudio.com/</a></li><li><a href="https://maxgraf.space/code/2020/04/22/e2e-piano-epiano.html" target="_blank" rel="noreferrer">https://maxgraf.space/code/2020/04/22/e2e-piano-epiano.html</a></li><li><a href="https://maxgraf.space/code/2020/06/05/pitch-aware-granular-synth.html" target="_blank" rel="noreferrer">https://maxgraf.space/code/2020/06/05/pitch-aware-granular-synth.html</a></li><li><a href="https://maxgraf.space/code/2020/06/05/karplus-strong-synth.html" target="_blank" rel="noreferrer">https://maxgraf.space/code/2020/06/05/karplus-strong-synth.html</a></li><li><a href="https://ccrma.stanford.edu/~jos/pasp/Feedback_Comb_Filters.html" target="_blank" rel="noreferrer">https://ccrma.stanford.edu/~jos/pasp/Feedback_Comb_Filters.html</a></li></ul><h2 id="snippets" tabindex="-1">Snippets <a class="header-anchor" href="#snippets" aria-label="Permalink to &quot;Snippets&quot;">​</a></h2><h3 id="mic-input" tabindex="-1">Mic input <a class="header-anchor" href="#mic-input" aria-label="Permalink to &quot;Mic input&quot;">​</a></h3><p>When you use el.in() you have to be specific about which channel you want to tap, i.e. el.in({channel: 0}), but then you need to make sure that your WebAudioNode running elementary&#39;s engine actually has input signals. So you would need to call core.initialize to declare that input channels are expected, and then you would need to actually connect your web audio input nodes to the node returned by core.initialize. Does that make sense?</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> core.</span><span style="color:#B392F0;">initialize</span><span style="color:#E1E4E8;">(audioContext, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      numberOfInputs: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      numberOfOutputs: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      inputChannelCount: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// Notice, it&#39;s a mono input</span></span>
<span class="line"><span style="color:#E1E4E8;">      outputChannelCount: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (navigator.mediaDevices </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> navigator.mediaDevices.getUserMedia) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> micStream </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> navigator.mediaDevices.</span><span style="color:#B392F0;">getUserMedia</span><span style="color:#E1E4E8;">({audio: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> streamSource </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> audioContext.</span><span style="color:#B392F0;">createMediaStreamSource</span><span style="color:#E1E4E8;">(micStream);</span></span>
<span class="line"><span style="color:#E1E4E8;">      streamSource.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(node);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> node </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> core.</span><span style="color:#6F42C1;">initialize</span><span style="color:#24292E;">(audioContext, {</span></span>
<span class="line"><span style="color:#24292E;">      numberOfInputs: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      numberOfOutputs: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      inputChannelCount: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// Notice, it&#39;s a mono input</span></span>
<span class="line"><span style="color:#24292E;">      outputChannelCount: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (navigator.mediaDevices </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> navigator.mediaDevices.getUserMedia) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> micStream </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> navigator.mediaDevices.</span><span style="color:#6F42C1;">getUserMedia</span><span style="color:#24292E;">({audio: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> streamSource </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> audioContext.</span><span style="color:#6F42C1;">createMediaStreamSource</span><span style="color:#24292E;">(micStream);</span></span>
<span class="line"><span style="color:#24292E;">      streamSource.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(node);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre></div><h3 id="skew-by-upheaver" tabindex="-1">Skew by <a href="https://discord.com/channels/826071713426178078/834787928688689172/1123676571279048875" target="_blank" rel="noreferrer">upheaver</a> <a class="header-anchor" href="#skew-by-upheaver" aria-label="Permalink to &quot;Skew by [upheaver](https://discord.com/channels/826071713426178078/834787928688689172/1123676571279048875)&quot;">​</a></h3><p>Sharing a useful snippet. JUCE&#39;s logskew function in Typescript, if anyone wants to scale their parameter values (for example convert 0-1 range to 20-20000 hz in a non linear way) :</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clamp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ( </span><span style="color:#FFAB70;">min</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">max</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">num</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;"> ) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(num, min), max);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">skew</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ( </span><span style="color:#FFAB70;">min</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">max</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">centerPoint</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;"> ) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">((centerPoint </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (max </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">logskew</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ( </span><span style="color:#FFAB70;">a</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">time</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">centerPoint</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">proportion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clamp</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, time);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sk</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">skew</span><span style="color:#E1E4E8;">(a, b, centerPoint);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">v</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">exp</span><span style="color:#E1E4E8;"> (Math.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;"> (proportion) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> sk);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (b </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> v;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">logskew</span><span style="color:#E1E4E8;">( </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// will output 1000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clamp</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ( </span><span style="color:#E36209;">min</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">max</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">num</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;"> ) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">min</span><span style="color:#24292E;">(Math.</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(num, min), max);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">skew</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ( </span><span style="color:#E36209;">min</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">max</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">centerPoint</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;"> ) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">((centerPoint </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> min) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> (max </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> min));</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">logskew</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ( </span><span style="color:#E36209;">a</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">time</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">centerPoint</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">proportion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clamp</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, time);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sk</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">skew</span><span style="color:#24292E;">(a, b, centerPoint);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">v</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">exp</span><span style="color:#24292E;"> (Math.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;"> (proportion) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> sk);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> (b </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> a) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> v;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">logskew</span><span style="color:#24292E;">( </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// will output 1000</span></span></code></pre></div><h2 id="metronome" tabindex="-1">Metronome <a class="header-anchor" href="#metronome" aria-label="Permalink to &quot;Metronome&quot;">​</a></h2><p><a href="https://discord.com/channels/826071713426178078/834787928688689172/1127958693695205387" target="_blank" rel="noreferrer">Yea long story short</a> I think metro was maybe not a great idea and it&#39;s worth considering to deprecate it. More effective in my opinion is to take el.time() which monotonically increases, counting the number of elapsed samples, and derive a quarter-note phasor from el.time(). (From bpm you calculate seconds per beat, from which you calculate samples per beat, which you can use to convert el.time() into a phasor running at exactly quarter-note rate). Then of course if you want to change bpm you just change the numbers in your calculation but it will all be perfectly time-synced because it&#39;s derived from the actual time signal. And then you can turn your quarter-note phasor into a pulse train with el.le(phasor, 0.5)</p>`,15),u=JSON.parse('{"title":"Elementary synth","description":"MIDI enabled synthesizer built with Elementary audio library","frontmatter":{"title":"Elementary synth","description":"MIDI enabled synthesizer built with Elementary audio library","date":"2023-06-23T00:00:00.000Z","cover":"lockup.svg"},"headers":[],"relativePath":"practice/synth/elementary/index.md","filePath":"practice/synth/elementary/index.md","lastUpdated":1693930073000}'),c={name:"practice/synth/elementary/index.md"},m=Object.assign(c,{setup(y){const s=p(()=>t(()=>import("./chunks/ElemAudio.55dc5443.js"),["assets/chunks/ElemAudio.55dc5443.js","assets/chunks/rotary.b8374981.js","assets/chunks/midi.d68b2a41.js","assets/chunks/framework.18a7d3ba.js","assets/chunks/index.ff80e595.js","assets/chunks/commonjsHelpers.de833af9.js","assets/chunks/index.b30cd6d2.js","assets/chunks/tuner.0ba209fb.js","assets/chunks/colors.b83dc710.js","assets/chunks/index.654bd828.js","assets/chunks/calculations.65ee336d.js","assets/chunks/index.139b2562.js","assets/chunks/synth.f8bdd3f9.js","assets/chunks/audio.4983d088.js","assets/chunks/Scale.a106cb29.js","assets/chunks/Subtract.d22cbd0e.js","assets/chunks/PingPongDelay.0dd5299b.js","assets/chunks/AutoPanner.3abf4fbf.js","assets/chunks/MonoSynth.2582d87a.js","assets/chunks/Filter.3335ee5d.js","assets/chunks/theory.61e5aadb.js","assets/chunks/index.86652af6.js","assets/chunks/index.8c24e7d1.js","assets/chunks/loop.7b127e73.js","assets/chunks/tempo.de4f8772.js","assets/chunks/Loop.e0ddb3d9.js","assets/chunks/midiRender.50bd33c3.js","assets/chunks/Midi.1f918097.js","assets/chunks/Sequence.cd1d0d05.js","assets/chunks/mic.e6269e8a.js","assets/chunks/UserMedia.f33e4faf.js","assets/chunks/OnePoleFilter.477d959f.js","assets/chunks/noise.6733575a.js","assets/chunks/FFT.a27ef955.js","assets/chunks/BitCrusher.a8d04589.js","assets/chunks/sequence.594e5a2c.js"]));return(i,E)=>(e(),a("div",null,[n(l(s)),r]))}});export{u as __pageData,m as default};