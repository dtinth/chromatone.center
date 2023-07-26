import{_ as s,c as e,o as a,b as t}from"./chunks/framework.fee3f2bd.js";const n="/assets/1.1ad6e53f.gif",o="/assets/2.7002da8b.gif",l="/assets/3.b6531ec7.gif",r="/assets/4.7e76f051.png",p="/assets/5.13ea5e97.gif",i="/assets/6.92535aaf.png",c="/assets/7.ec979011.png",h="/assets/8.ca81c2af.png",y="/assets/9.f3861789.png",k=JSON.parse('{"title":"Euclidean rhythms","description":"Mathematical algorithm to create well-formed rhythm patterns","frontmatter":{"title":"Euclidean rhythms","description":"Mathematical algorithm to create well-formed rhythm patterns","date":"2022-05-11T00:00:00.000Z","cover":"8.png"},"headers":[],"relativePath":"theory/rhythm/system/euclidean/index.md","filePath":"theory/rhythm/system/euclidean/index.md"}'),m={name:"theory/rhythm/system/euclidean/index.md"},u=t('<p>‘Euclidean’ rhythms are one of the few ideas for algorithmically generating musical material that has gained relative popularity over the last few years. We say ‘relative’ because we really don’t know how many composers/electronic producers really have heard of them in the grand scheme of things, but if you do a google search on this you’ll get far more hits than searching for, for example, music from L-systems. Many DAWs, iOS apps, MAX/MSP patches etc, allow music makers to generate Euclidean rhythms.</p><h2 id="what-are-euclidean-rhythms" tabindex="-1">What are Euclidean rhythms? <a class="header-anchor" href="#what-are-euclidean-rhythms" aria-label="Permalink to &quot;What are Euclidean rhythms?&quot;">​</a></h2><p>So what does it mean, and why has it become popular? What does Euclid have to do with this? Euclidean rhythms are essentially a way of spacing out <strong>n</strong> events (let&#39;s call them ‘onsets’) across <strong>m</strong> positions (essentially, pulses or beats) as evenly possible. If you space out, for example, 4 onsets across 16 positions, the result is just 4 evenly spaced onsets. But if the number of onsets is relatively prime with respect to the number of pulses, the resulting pattern is more interesting. The term ‘Euclidean rhythm’ comes from a paper by McGill University computer scientist Godfried T. Toussaint, and fortunately his paper is <a href="/media/pdf/banff.pdf">available online</a>.</p><p>In the paper, Toussaint starts by explaining an algorithm by E. Bjorklund used in certain components of spallation neutron source (SNS) accelerators that require spacing out pulses across a certain number of time events as equidistantly as possible. After giving an example of how Bjorklund’s algorithm works, he shows that it has a parallel structure to Euclid’s algorithm from the Elements which uses repeated subtraction to establish the <strong>greatest common divisor</strong> (GCD) for two numbers.</p><h3 id="here-is-a-simple-example-of-bjorklund-s-algorithm-spacing-5-onsets-across-12-intervals-pulses" tabindex="-1">Here is a simple example of Bjorklund’s algorithm spacing 5 onsets across 12 intervals (pulses). <a class="header-anchor" href="#here-is-a-simple-example-of-bjorklund-s-algorithm-spacing-5-onsets-across-12-intervals-pulses" aria-label="Permalink to &quot;Here is a simple example of Bjorklund’s algorithm spacing 5 onsets across 12 intervals (pulses).&quot;">​</a></h3><p>We start with <strong>five onsets</strong> on the left (the ‘front’ group) and the <strong>seven non-onsets</strong> on the right (the ‘back’ group). We pair up one element from the front with one from the back until either the front or back group is exhausted. When we’re finished the newly combined elements will form the front group at the next iteration, and whatever is left over will form the new back group (in this case the two non-onsets):</p><img src="'+n+'"><p>We then repeat the process. Note that the combined elements from stage 1, are treated as single units here. At this stage, we start with five elements in the front and only two in the back. We combine them as before, but this time we will exhaust the back group first, with three elements left at the front — these will form the new back group, and the combined elements again are the new front group:</p><img src="'+o+'"><p>We just recursively repeat these steps until the back group has one (or zero) elements. At the start of third iteration, we have two elements in the front and three at the back and after combining them, the back group has a single element and so we are finished.</p><img src="'+l+'"><p>In conventional notation, the rhythm would look like this:</p><img src="'+r+'"><p>Euclidean rhythms are often understood as ‘rhythm necklaces’, that is, you could rotate this pattern so that each of the five onsets could be in the first position, and those five patterns would share the maximally equidistant property that this procedure generates. We could say that this algorithm generates five patterns (in this case) that belong to the same necklace.</p><p>By the way, if you want to get a better sense of what these patterns sound like, I’ve included a CodePen below that will sound out these patterns for you (and generate all of their rotations).</p><p>Here is an animation of 7 onsets in 16 pulses:</p><img src="'+p+'"><p>And again the resultant rhythm in standard notation:</p><img src="'+i+`"><p>Toussaint could have called them Bjorklund rhythms, but Euclidean rhythm has a more timeless feel. As I will discuss later, there are other ways of deriving the same set of patterns.</p><h2 id="euclidean-rhythm-in-code" tabindex="-1">Euclidean rhythm in code <a class="header-anchor" href="#euclidean-rhythm-in-code" aria-label="Permalink to &quot;Euclidean rhythm in code&quot;">​</a></h2><p>This is fairly basic to code. As an input, we’ll use the number of onsets, and a total number of pulses. To keep things simple we’ll have our end result be an array of 1s (onset) and 0s (no onset). Conceptually, we need keep track of two groups: a front group and a back group. To start, the front group will be an array consisting of the onsets (each in their own array) and the back array will consist of one array for each non-onset pulse. Then recursively we create a new front array by concatenating pairs from the old front and back until we run out of elements in either the front or the back, and the new back array will be whatever elements are left over. We keep going until the back array has one (or zero) elements, then we flatten the resulting 2nd array. Our Swift code looks something like this:</p><div class="language-swift"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateEuclidean</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;font-style:italic;">onsets</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">Int</span><span style="color:#A6ACCD;">, </span><span style="color:#82AAFF;font-style:italic;">pulses</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">Int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Int</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">let</span><span style="color:#A6ACCD;"> front:</span><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">Int</span><span style="color:#89DDFF;">]]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">repeating</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">], </span><span style="color:#82AAFF;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> onsets</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">let</span><span style="color:#A6ACCD;"> back:</span><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">Int</span><span style="color:#89DDFF;">]]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">repeating</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">], </span><span style="color:#82AAFF;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pulses </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> onsets</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">euclidRecursive</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">front</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> front, </span><span style="color:#82AAFF;">back</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> back</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">flatMap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">$0</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">euclidRecursive</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;font-style:italic;">front</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">Int</span><span style="color:#89DDFF;">]]</span><span style="color:#A6ACCD;">, </span><span style="color:#82AAFF;font-style:italic;">back</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">Int</span><span style="color:#89DDFF;">]])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">Int</span><span style="color:#89DDFF;">]]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> back </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> back</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> front </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> front</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">guard</span><span style="color:#A6ACCD;"> back.count </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> front </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> back </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> newFront </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [[</span><span style="color:#FFCB6B;">Int</span><span style="color:#A6ACCD;">]]</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> front.count </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> back.count </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        newFront.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">front.</span><span style="color:#82AAFF;">popLast</span><span style="color:#89DDFF;">()!</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> back.</span><span style="color:#82AAFF;">popLast</span><span style="color:#89DDFF;">()!)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">euclidRecursive</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">front</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> newFront, </span><span style="color:#82AAFF;">back</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> front </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> back</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="an-alternate-approach-bresenham-s-line-algorithm" tabindex="-1">An alternate approach: Bresenham’s line algorithm <a class="header-anchor" href="#an-alternate-approach-bresenham-s-line-algorithm" aria-label="Permalink to &quot;An alternate approach: Bresenham’s line algorithm&quot;">​</a></h2><p>As we mentioned earlier, there are other ways to get at this set of patterns. In rather quirky little book called <a href="https://www.amazon.co.jp/Creating-Rhythms-English-Stefan-Hollos-ebook/dp/B00IQWM8EA/ref=sr_1_1?ie=UTF8&amp;qid=1505108854&amp;sr=8-1&amp;keywords=creating+rhythm" target="_blank" rel="noreferrer">Creating Rhythms by Stephan Hollis and J. Richard Hollis</a>, it is pointed out that Toussaint’s rhythms can also be derived using <a href="https://en.wikipedia.org/wiki/Christoffel_symbols" target="_blank" rel="noreferrer">Christoffel words</a>. A related, but more direct approach, is to use <a href="https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm" target="_blank" rel="noreferrer">Bresenham’s line algorithm</a> which I will explain here.</p><p>Basically Bresenham’s algorithm is used for drawing a line in a raster graphics environment. In raster graphics we have essentially a bitmap, i.e., a two-dimensional grid of discrete points or pixels. If we want to draw a straight diagonal line with a slope of 1 in a bitmap, we colour a pixel, then colour the pixel that is up and to its right, then the next pixel that is up and to the right of that one, and so on.</p><img src="`+c+'"><p>While this is straight forward when the rise evenly divides into the run, when they are relatively prime the situation is more interesting. Some of the pixels will need to be directly adjacent to each other, while some will need to move up and to the right. For example, if our line has a slope of 7/16, it will need to go up 7 times per 16 squares. What principle can we use to determine when we need to go up? To make the line appear straight, we will need to space out those rises as evenly as possible. It becomes essentially the same problem that Bjorklund solved. And we don’t even need a fancy algorithm for it, we can get it directly from the slope of the line. We could just take the floor (or the ceiling) of the y-value at each integer x-point and use that as our y-coordinate.</p><img src="'+h+'"><p>And to get our rhythm, we can just say that if floor of the y-value at each x is the same as the previous value, then it is a continuation of the previous onset, and if it has a new y-value, it is the beginning of a new onset.</p><img src="'+y+`"><p>Here is the algorithm in Swift. Not that the Bjorklund approach was difficult, but the Bresenham approach is incredibly simple to code.</p><div class="language-swift"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bresenhamEuclidean</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;font-style:italic;">onsets</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">Int</span><span style="color:#A6ACCD;">, </span><span style="color:#82AAFF;font-style:italic;">pulses</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">Int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Int</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">let</span><span style="color:#A6ACCD;"> slope </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Double</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">onsets</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Double</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pulses</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">Int</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> previous: </span><span style="color:#FFCB6B;">Int</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">..&lt;</span><span style="color:#A6ACCD;">pulses </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">let</span><span style="color:#A6ACCD;"> current </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Int</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">floor</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Double</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> slope</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">        result.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">current </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> previous </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        previous </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> current</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> result</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="and-what-does-it-sound-like" tabindex="-1">And what does it sound like? <a class="header-anchor" href="#and-what-does-it-sound-like" aria-label="Permalink to &quot;And what does it sound like?&quot;">​</a></h2><p>You can listen to any Euclidean pattern in the <a href="./../../../../practice/rhythm/circle/">Circular metronome app</a>, the algorhithm is used to set a default position for mutes along the beat cycle. Just mute some notes in a cycle and press the reset button. It will create the rhythm for you. There&#39;re also ‘rotate buttons’ that will rotate the pattern by taking the final onset and moving it to the start of the pattern (recall that although the algorithms discussed here generate a single pattern, they stand for a ‘rhythm necklace’ that includes all the rotations of that pattern that start with an onset).</p><h2 id="a-musical-analysis" tabindex="-1">A musical analysis <a class="header-anchor" href="#a-musical-analysis" aria-label="Permalink to &quot;A musical analysis&quot;">​</a></h2><p>What are some of the properties of these rhythms? Well, most importantly, the locations of the onsets are spaced out as evenly as possible. If the number of time events is an integer multiple of the number of pulses, then they will be completely even (e.g., four groups of four), and the result is entirely trivial. But when number of onsets and pulses are relatively prime, the results will have some interesting characteristics. There are two properties that we can observe from this maximal spacing.</p><p>First, if we look at the distance (in pulses) between adjacent onsets, we can see that each rhythm generated by these algorithms will have at most two possible distances between adjacent onsets, and that these distances differ by at most one pulse. In the first example (5 of 12), some of the onsets are three pulses apart and other are two pulses apart. In the 9 of 16 example, the distances are two and one.</p><p>Whenever we have these two distances (i.e, when the two numbers are relatively prime) we will usually have a syncopated rhythm, because the two duration lengths in use will be interleaved as much as possible. That is, if we have some groups of two and some groups of three, they will alternate whenever they can, creating large chunks often with one having an odd number of pulses. So when the repetition of some rhythm pattern occurs (for example, the two instances of [x o o x o] in the 5 in 12 example), the first instance will start on the beat, and the second will start off the beat. This gives this set of rhythms a characteristic sound.</p><p>So what is the big deal about these rhythms? Are they special? I would say that from a composer’s point of view, they aren’t anything to write home about. A composer/songwriter/improvising musician can easily come up with many rhythms that will resonate with a listener, many of which will not be Euclidean.</p><p>It is true that these rhythms do occur frequently in world music (from Toussaint’s point of view, notably Afro-Cuban, and sub-Saharan music). The maximally distributed property of these rhythms might somehow have some appeal to the human perceptual system. And rhythms where there is some repeating odd length fragment are interesting, but there is nothing magical about them. They aren’t necessary, and I don’t think the average composers, discovering these rhythms would think them worth adding to their bag of tricks.</p><p>But from the point of view of someone generating a rhythm algorithmically, they are more significant. There are many many ways to arbitrarily generate a rhythm of some length — and most of them sound, well, arbitrary.</p><p>The point here is that patterns that form the set of Euclidean rhythms are highly reliable. Many Euclidean rhythms are not at all interesting (e.g., all of them where the onset number is a factor of the total pulse number), but they will almost never sound bad. For someone trying to quickly make something out of nothing on a music creation app, they clearly have some value.</p><h2 id="relationship-to-mos-well-formed-rhythms" tabindex="-1">Relationship to MOS (Well-Formed) Rhythms <a class="header-anchor" href="#relationship-to-mos-well-formed-rhythms" aria-label="Permalink to &quot;Relationship to MOS (Well-Formed) Rhythms&quot;">​</a></h2><p>Euclidean rhythms are a special case of MOS/well-formed rhythms, in which the generator is an integer division of the period, and the relationship between the large and small step sizes is a <a href="https://en.xen.wiki/w/Superparticular" target="_blank" rel="noreferrer">superparticular number</a>.</p><p>Thus, Euclidean rhythms are the direct analogy of <a href="https://en.xen.wiki/w/Maximal_evenness" target="_blank" rel="noreferrer">maximally even MOS scales</a> in equal temperaments.</p><h2 id="relationship-to-aksak" tabindex="-1">Relationship to aksak <a class="header-anchor" href="#relationship-to-aksak" aria-label="Permalink to &quot;Relationship to aksak&quot;">​</a></h2><p>Aksak, a Turkic/Balkan rhythmic concept in which a meter (usually uneven) is divided into cells of two and three steps, is represented in any metric length, given a certain density. So not only are the majority of traditional aksak rhythms represented, Euclidean rhythms offer a way to extend the concept even further.</p><p>Euclidean rhythms consisting of only groups of two and three will be labeled aksak-compatible.</p><ul><li><a href="https://medium.com/code-music-noise/euclidean-rhythms-391d879494df" target="_blank" rel="noreferrer">Original article by Jeff Holtzkener</a></li><li><a href="/media/pdf/banff.pdf">Euclidean rhythm by Godfried T. Toussaint</a> + <a href="https://habr.com/ru/post/278265/" target="_blank" rel="noreferrer">русский перевод</a></li><li><a href="https://en.wikipedia.org/wiki/The_Geometry_of_Musical_Rhythm" target="_blank" rel="noreferrer">Geometry of Musical Rhythm</a></li><li><a href="https://plus.maths.org/content/os/issue40/features/wardhaugh/index" target="_blank" rel="noreferrer">Music and Euclid&#39;s algorithm</a></li><li><a href="https://www.lawtonhall.com/blog/euclidean-rhythms-pt1" target="_blank" rel="noreferrer">Maximum Evenness, Maximum Groove</a></li></ul>`,50),d=[u];function D(F,A,C,f,g,w){return a(),e("div",null,d)}const v=s(m,[["render",D]]);export{k as __pageData,v as default};