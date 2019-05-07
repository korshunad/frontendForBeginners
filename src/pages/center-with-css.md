---
layout: post
title:  "How to center elements with CSS in 2019"
date: "2019-05-06"
description: "Ultimate guide to centering CSS elements in 2019 with ready-to-copy-and-go html and css snippets"
authorFullname: Ana Korshun
author: ana
categories: [ css, guide ]
shortPath: ''
---
<style>
  .hljs{display:block;overflow-x:auto;padding:0.5em;background:#fdf6e3;color:#657b83}.hljs-comment,.hljs-quote{color:#93a1a1}.hljs-keyword,.hljs-selector-tag,.hljs-addition{color:#859900}.hljs-number,.hljs-string,.hljs-meta .hljs-meta-string,.hljs-literal,.hljs-doctag,.hljs-regexp{color:#2aa198}.hljs-title,.hljs-section,.hljs-name,.hljs-selector-id,.hljs-selector-class{color:#268bd2}.hljs-attribute,.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-class .hljs-title,.hljs-type{color:#b58900}.hljs-symbol,.hljs-bullet,.hljs-subst,.hljs-meta,.hljs-meta .hljs-keyword,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-link{color:#cb4b16}.hljs-built_in,.hljs-deletion{color:#dc322f}.hljs-formula{background:#eee8d5}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}
  .hljs{display:block;overflow-x:auto;padding:0.5em;background:#fdf6e3;color:#657b83}.hljs-comment,.hljs-quote{color:#93a1a1}.hljs-keyword,.hljs-selector-tag,.hljs-addition{color:#859900}.hljs-number,.hljs-string,.hljs-meta .hljs-meta-string,.hljs-literal,.hljs-doctag,.hljs-regexp{color:#2aa198}.hljs-title,.hljs-section,.hljs-name,.hljs-selector-id,.hljs-selector-class{color:#268bd2}.hljs-attribute,.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-class .hljs-title,.hljs-type{color:#b58900}.hljs-symbol,.hljs-bullet,.hljs-subst,.hljs-meta,.hljs-meta .hljs-keyword,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-link{color:#cb4b16}.hljs-built_in,.hljs-deletion{color:#dc322f}.hljs-formula{background:#eee8d5}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}
  .bg-code{background-color:#fdf6e3;}.code-gray{color: #657b83;}.pre{white-space: pre-wrap;word-wrap: break-word;text-align: justify;}
  .bottom10px{bottom:10px;}.right10px{right:10px;}
.ghost-container::before {
  content: " ";
  display: inline-block;
  height: 100%;
  width: 1%;
  vertical-align: middle;
}
.di {
  display: inline-block;
}
.v-mid {
  vertical-align: middle;
}
.h25rem {
  height: 25rem;
}
.grid {
  display: -ms-grid;
  display:     grid;
}
.place-center {
  place-items: center;
}
.margin-auto {
  margin: auto;
}
.resize-both {
  resize: both;
}
.square22rem {
  width: 22rem;
  height: 22rem;
}
.justify-center-safe {
  justify-content: safe center;
}
.items-center-safe {
  align-items: safe center;
}
ol {
  margin-left: 0;
  padding-left: 0;
}
h2, h3 {
  font-weight: 400;
}
p.example {
  margin: 1.5rem 0;
}
.container-background-color {
background-color: rgb(92, 123, 138);
background-image:
-webkit-linear-gradient(right, rgb(119, 132, 140), rgb(92, 123, 138));
background-image:
-moz-linear-gradient(right, rgb(119, 132, 140), rgb(92, 123, 138));
background-image:
-o-linear-gradient(right, rgb(119, 132, 140), rgb(92, 123, 138));
background-image:
linear-gradient(to right, rgb(119, 132, 140), rgb(92, 123, 138));
}
</style>
> It’s already 2019, and now we have plenty of methods to solve a dreaded problem - how to center a CSS element vertically. As most of the CSS problems, it has many solutions tailored to different use cases and browser support.

### (Stop) centering like it’s 2011

In 2011 tables ruled the CSS centering world. Sentiment rose against such non-semantic layout, and CSS2.1 spec offered <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: table</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: table-cell</code> and many more.  As the "table" name may suggest, these properties mimic table layout. To center element vertically, you have to place it in a container with  <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: table</code> and an inner element with <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: table-cell</code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>vertical-align</span>: middle</code>.

<div class='fw6'>Use HTML with tachyons-like CSS classes</div>
<div id='display-table-tachyons-html' class='dn'>
  <main class='dt h5 w-100'>
    <div class='dtc v-mid tc'>
    </div>
  </main>
</div>

<div class='relative'>
<div class='copy pre mb4 overflow-auto' data-text-id='display-table-tachyons-html' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html tl hljs"><span class="hljs-tag">&lt;<span class="hljs-name">main</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dt h5 w-100"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dtc v-mid tc"</span>&gt;</span>
    This text is centered vertically and horizontally.
    It also could be inside a div (&lt;div&gt;some text&lt;/div&gt;)
    and still remain centered.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span></code></div>
  <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='display-table-tachyons-html'>Copy HTML</button>
</div>
<div class='fw6'>CSS classes</div>
<div id='display-table-tachyons-css' class='dn'>
.dt {
  display: table;
}
.dtc {
  display: table-cell;
}
.v-mid {
  vertical-align: middle;
}
</div>

<div class='relative'>
<div class='copy pre mb4 overflow-auto' data-text-id='display-table-tachyons-css' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="css hljs"><span class="hljs-selector-class">.dt</span> {
  <span class="hljs-attribute">display</span>: table;
}
<span class="hljs-selector-class">.dtc</span> {
  <span class="hljs-attribute">display</span>: table-cell;
}
<span class="hljs-selector-class">.v-mid</span> {
  <span class="hljs-attribute">vertical-align</span>: middle;
}
<span class="hljs-selector-class">.tc</span> {
  <span class="hljs-attribute">text-align</span>: center;
}</code></div>
  <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='display-table-tachyons-css'>Copy CSS</button>
</div>

<div class='fw6'>Or grab html with inline styles:</div>
<div id='display-table-inline-styles' class='dn'>
<main style="display: table;">
  <div style="display: table-cell; vertical-align: middle; text-align: center;">
  </div>
</main>
</div>
<div class='relative'>
  <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">main</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display: table;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display: table-cell; vertical-align: middle; text-align: center;"</span>&gt;</span>
    This text is centered vertically and horizontally as well.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span></code></div>
  <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='display-table-inline-styles'>Copy HTML</button>
</div>

#### Why is this technique still interesting?

It is an easy solution for better semantics of the layout, combined with the centering power of the tables. Using it, you don't have to set the child element height or control anything else except display and vertical-align properties.

If, however, you can control heights or other properties of the child CSS element, you have more techniques at your disposal.

### Control everything

What do you have to control?
<ol>
1. <span class='fw6 f4'>Padding of an inline element</span>. Just set <code class='css bg-code code-gray'><span class='hljs-attribute'>padding-top</span></code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>padding-bottom</span></code> to the same value and call it a day.

<p class='f4 fw6 tl example'>Example of using equal paddings.</p>

<div>
  <p class='pa4 bg-washed-yellow'>This texts have <span class='hljs-attribute'>padding-top</span> equal to <span class='hljs-attribute'>padding-bottom</span></p>
  <p class='pa4 bg-washed-yellow'> and so appear centered vertically</p>
</div>

2. <span class='fw6 f4'>Line-height and height of an inline element</span>. Center an inline element with <code class='css bg-code code-gray'><span class='hljs-attribute'>line-height</span></code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>height</span></code> of the parent element set to the same value. This technique works best on one-line texts, which will not wrap, for example in buttons.

<p class='f4 fw6 tl example'>Example of centering one line of text (or other inline-element) with line-height.</p>

<p>
<button class='resize-both main-button white br2' style='line-height:50px;height:50px;padding:0 10px;'>I'm a button with centered text</button>
</p>

<div id='line-height-centering' class='dn'>
  <button class='main-button white br2' style='line-height:50px;height:50px;padding:0 10px;'>I'm a button with centered text</button>
</div>
<div class='relative'>
  <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">button</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">'main-button white br2'</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">'line-height:50px;height:50px;padding:0 10px;'</span>&gt;</span>
  I'm a button with centered text
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></div>
  <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='line-height-centering'>Copy button code</button>
</div>

3. <span class='fw6 f4'>Height and absolute position</span>. Control these two, and you get a variety of ways to center an element:

- <span class='fw6 f5 ttu'>NEGATIVE MARGINS</span>. This technique will work for you if you are fine with calculating negative margins. To set negative margin, first, you set <code class='css bg-code code-gray'><span class='hljs-attribute'>top</span>: 50%</code> and then <code class='css bg-code code-gray'><span class='hljs-attribute'>margin-top</span></code> to half of the height of the child element. If you have top-padding or border, you may want to adjust for that too, subtracting it from the top-margin. If you don't want to bother with how the height of the element changes because of the padding, just use <code class='css bg-code code-gray'><span class='hljs-attribute'>box-sizing</span>: : border-box</code>. Centering horizontally is similar: set some width, <code class='css bg-code code-gray'><span class='hljs-attribute'>left</span>: 50%</code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>margin-left</span>: -(width/2 + padding)</code>.

Caveat: beware of possible content spillover if the child block gets taller than the parent one.

<p class='f4 fw6 tl example'>Example of centering with negative margins.</p>

<p>
Say you have an unformatted Twitter quote about how centering in CSS is hard. I had to choose the width and height that look good on mobile because otherwise, the text overflows its container. You can see the code below and can copy it if you like.
</p>
  <div class='resize-both h5 container-background-color relative'>
    <div class="bg-white" style='top: 50%; left: 50%; height: 140px; padding: 20px; width: 200px; margin-top: -70px; margin-left: -100px; font-size: 12px; box-sizing: border-box; position: absolute;'>
      <p style='font-weight: 400; font-size: 14px; margin-bottom: 10px;'>
“44 years ago we put a man on the moon, but we still can’t vertically center things in CSS.”
      </p>
      &mdash; Juozas Kaziukėnas (@juokaz) <a href="https://twitter.com/juokaz/status/359074373816156160?ref_src=twsrc%5Etfw">July 21, 2013</a>
    </div>
  </div>
  <div id='negative-margin-centering' class='dn'>
    <div class='relative'>
      <div style='top: 50%; left: 50%; height: 140px; padding: 20px; width: 200px; margin-top: -70px; margin-left: -100px; box-sizing: border-box; position: absolute;'>
      </div>
    </div>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'relative h5'</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">'top: 50%; left: 50%; height: 140px; padding: 20px; width: 200px; margin-top: -70px; margin-left: -100px; box-sizing: border-box; position: absolute;'</span>&gt;</span>
    centered content
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='negative-margin'>Copy code</button>
  </div>

- <span class='f5 fw6 ttu'>TRANSFORMS</span>. This one is similar to <span class='f5 fw6 ttu'>NEGATIVE MARGINS</span>, but here you don't need to set the centered block's height. Set <code class='css bg-code code-gray'><span class='hljs-attribute'>position</span>: absolute</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>top</span>: 50%</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>left</span>: 50%</code>. And instead of bringing the block back up with margins you use <code class='css bg-code code-gray'><span class='hljs-attribute'>transform</span>: translate(-50%, -50%)</code> for that.
Caveats:

1) absolute positioning can cause a content overflow;

2) transform centering will interfere with other transform effects added later;

3) transform property requires the vendor prefixes;

4) if the parent container height is an uneven number, the centered block may be rendered blurry. This can be fixed with <code class='css bg-code code-gray'><span class='hljs-attribute'>transform-style</span>: preserve-3d</code>.

<p class='f4 fw6 tl example'>
Example. Transform and center.
</p>
<p>
Center a div with the image background.
</p>
  <div class='resize-both h5 container-background-color' style='position: relative'>
    <div style="top: 50%;left: 50%;transform: translate(-50%, -50%);transform-style: preserve-3d;position: absolute;background-image: url(/assets/images/2/pickle-rick.jpg);background-size: cover;" class='pa5 white fw6'>
      Pickle Rick.
    </div>
  </div>
  <div id='transforms-centering' class='dn'>
    <div style='position: relative;'>
      <div style="top: 50%;left: 50%;transform: translate(-50%, -50%);transform-style: preserve-3d;position: absolute;">
        centered content
      </div>
    </div>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'relative h5'</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">'top: 50%; left: 50%; transform: translate(-50%, -50%); transform-style: preserve-3d; position: absolute;'</span>&gt;</span>
    centered content
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='transforms-centering'>Copy code</button>
  </div>

- <span class='f5 fw6 ttu'><a href='https://codepen.io/shshaw/full/gEiDt/' rel='noopener noreferrer' title='article first introduced the Absolute Centering term'>Absolute centering</a></span>. First, position the element absolutely with <code class='css bg-code code-gray'><span class='hljs-attribute'>position</span>: absolute</code> and add <code class='css bg-code code-gray'><span class='hljs-attribute'>margin</span>: auto</code>, then <code class='css bg-code code-gray'><span class='hljs-attribute'>top</span>: 0</code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>bottom</span>: 0</code> to center element vertically and <code class='css bg-code code-gray'><span class='hljs-attribute'>left</span>: 0</code> with <code class='css bg-code code-gray'><span class='hljs-attribute'>right</span>: 0</code> to center it horizontally.

<p class='f4 fw6 tl'>Absolute centering example.</p>
<p>
Let's take another unformatted Twitter quote.
</p>
  <div class='resize-both h5 container-background-color relative'>
    <div class="bg-white" style='margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; height: 140px; padding: 20px; width: 200px; font-size: 12px;'>
      <p style='font-weight: 400; font-size: 14px; margin-bottom: 10px;'>“You can center anything with absolute positioning, but at a certain cost.”</p>
      &mdash; Count von Count, <a href='https://twitter.com/CountVonCount/status/1033143044198019072'>July 21, 2013</a>
    </div>
  </div>
  <div id='absolute-centering' class='dn'>
    <div class='relative'>
      <div style='margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0;'>
      </div>
    </div>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'relative h5'</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">'margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0;'</span>&gt;</span>
    centered content
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='absolute-centering'>Copy code</button>
  </div>

4. <span class='fw6 f4'>Ghost element</span>. To center an inline-block element (multi-line text, for example) vertically, you can also use a ghost element. It stretches along the parent container height and centers the element with <code class='css bg-code code-gray'><span class='hljs-attribute'>vertical-align</span>: middle</code>. You can use a span, or even a pseudo-element. To make it work set its <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span></code> property to <code class='css bg-code code-gray'>inline-block</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>vertical-align</span>:middle</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>height</span>: 100%</code>.

<p class='f4 fw6 tl example'>Example of centering with ghost pseudo-element.</p>
<p>
Let's center a ghost emoji description in a gray container. To center it vertically I added a pseudo element with <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: inline</code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>vertical-align</span>: middle</code>. It spans full height of its parent. And to center the text horizontally I added <code class='css bg-code code-gray'><span class='hljs-attribute'>text-align:</span> center</code> to it. By default, it centers the block of text and the text itself, inside its block. To center the block and leave the text aligned to the left I used <code class='css bg-code code-gray'><span class='hljs-attribute'>text-align</span>: left</code>.
</p>
  <div class="resize-both container-background-color ghost-container h5 w7 tc">
    <p class='white fw6 lh-copy di v-mid' style='font-size: 16px; text-align: left; max-width: 300px;'>👻 Ghost. Boo!<br/> A ghost emoji, trying to scare someone. Might also be a halloween costume. <a href='https://emojipedia.org/ghost/' style='color: #daf5ff;'>Emojipedia</a></p>
  </div>
  <div id='ghost-centering-html' class='dn'>
<div class='ghost-container tc'>
  <p class='di v-mid'></p>
</div>
  </div>
  <div id='ghost-centering-css' class='dn'>
.ghost-container::before {
  content: " ";
  display: inline-block;
  height: 100%;
  width: 1%;
  vertical-align: middle;
}
.di {
  display: inline-block;
}
.v-mid {
  vertical-align: middle;
}
.tc {
  text-align: center;
}
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-selector-class">.ghost-container</span><span class="hljs-selector-pseudo">::before</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">" "</span>;
  <span class="hljs-attribute">display</span>: inline-block;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">1%</span>;
  <span class="hljs-attribute">vertical-align</span>: middle;
}
<span class="hljs-selector-class">.di</span> {
  <span class="hljs-attribute">display</span>: inline-block;
}
<span class="hljs-selector-class">.v-mid</span> {
  <span class="hljs-attribute">vertical-align</span>: middle;
}
<span class="hljs-selector-class">.tc</span> {
  <span class="hljs-attribute">text-align</span>: center;
}</code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='ghost-centering-css'>Copy CSS</button>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'ghost-container tc'</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'di v-mid'</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='ghost-centering-html'>Copy HTML</button>
  </div>
</ol>

#### Flexbox is almost a standard and centers everything.

<div class="w-100 tc mv3">
  <img
    src='/assets/images/2/can-i-use-flexbox.png'
    style="border: 1px solid #C7C8C9"
    alt='In 2018 Flexbox can be used almost in every browser.'
  />
  <div class="tr f5 gray" style="opacity: 0.4;">
    <a href='https://caniuse.com/#feat=flexbox'>https://caniuse.com/#feat=flexbox</a>
  </div>
</div>

The simplest way to vertically center elements is to use flexbox. It is already supported in many browsers. However, there are old (2009), semi-old (2012) and new specifications which may differ in detail. Still, that doesn’t affect your centering ability too much, you just add necessary prefixes. If you have to support browsers such as IE9 and older, you will still have to look for polyfill-like solutions (Modernizr, for example).
Otherwise you just add the <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: flex</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>align-items</span>: center</code> or <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: flex</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>flex-direction</span>: column</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>justify-content</span>: center</code>.


  <div class='h25rem container-background-color flex flex-row justify-center items-center'>
    <div style="background-image: url(/assets/images/2/flexible-box.jpg);background-size: cover;background-position:center;" class='w5 h5 white fw6 flex flex-column justify-center items-center'>
      <span style='background-color: rgba(0,0,0,0.6)'>
        Centered <br/> with <br/> flexbox
      </span>
    </div>
  </div>
<p></p>
  <div id='flex-centering-html' class='dn'>
<div class='flex flex-row justify-center items-center'>
  <div class='flex flex-column justify-center items-center'></div>
</div>
  </div>
  <div id='flex-centering-css' class='dn'>
.flex {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.flex-row {
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row;
}
.flex-column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}
.justify-center {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.items-center {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-selector-class">.flex</span> {
  <span class="hljs-attribute">display</span>: -webkit-box;
  <span class="hljs-attribute">display</span>: -moz-box;
  <span class="hljs-attribute">display</span>: -ms-flexbox;
  <span class="hljs-attribute">display</span>: -webkit-flex;
  <span class="hljs-attribute">display</span>: flex;
}
<span class="hljs-selector-class">.flex-row</span> {
  <span class="hljs-attribute">-webkit-box-orient</span>:horizontal;
  <span class="hljs-attribute">-webkit-box-direction</span>:normal;
  <span class="hljs-attribute">-ms-flex-direction</span>:row;
  <span class="hljs-attribute">flex-direction</span>:row;
}
<span class="hljs-selector-class">.flex-column</span> {
  <span class="hljs-attribute">-webkit-box-orient</span>: vertical;
  <span class="hljs-attribute">-webkit-box-direction</span>: normal;
  <span class="hljs-attribute">-ms-flex-direction</span>: column;
  <span class="hljs-attribute">flex-direction</span>: column;
}
<span class="hljs-selector-class">.justify-center</span> {
  <span class="hljs-attribute">-webkit-box-pack</span>: center;
  <span class="hljs-attribute">-ms-flex-pack</span>: center;
  <span class="hljs-attribute">justify-content</span>: center;
}
<span class="hljs-selector-class">.items-center</span> {
  <span class="hljs-attribute">-webkit-box-align</span>: center;
  <span class="hljs-attribute">-ms-flex-align</span>: center;
  <span class="hljs-attribute">align-items</span>: center;
}</code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='flex-centering-css'>Copy CSS</button>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'flex flex-row justify-center items-center'</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'flex flex-column justify-center items-center'</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='flex-centering-html'>Copy HTML</button>
  </div>

Centering with flexbox will work for the most cases when you need to center something.

Caveats:

Watch for container overflow. A parent container using <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>:flex</code> may not be scrollable and show all content. This problem happens due to the way flexbox centers elements, called "true" centering. Even if the centered element overflows its container, it will remain centered and the parts that overflow are hidden because you cannot scroll to them.
<div class='h4 container-background-color flex items-center justify-center resize-both overflow-auto relative' onscroll='document.getElementById("resize-flex-items-justify-center").style.display="none";'>
  <div style="background-image: url(/assets/images/2/cat_overflow.jpg);background-size: cover;" class='square22rem flex items-center justify-center white fw6'>
    <span style='background-color: rgba(0,0,0,0.6)'>
      Top part <br/> is not <br/> visible
    </span>
  </div>
  <div id='resize-flex-items-justify-center' class='absolute f5' style='right: 5px; bottom: 0'>resize ↘</div>
</div>

If you need the scrollable container, you can do one of the following:
<ol>
1. <span class='fw6 f4'>Margin: auto</span>. Omit the default <code class='css bg-code code-gray'><span class='hljs-attribute'>justify-content</span>: center</code> and/or <code class='css bg-code code-gray'><span class='hljs-attribute'>align-items</span>: center</code> altogether and use <code class='css bg-code code-gray'><span class='hljs-attribute'>margin</span>: auto</code> instead together with <code class='css bg-code code-gray'><span class='hljs-attribute'>overflow</span></code> value of your choice. This way centers the element both vertically and horizontally just fine.

<div class='h4 container-background-color flex resize-both overflow-auto relative' onscroll='document.getElementById("resize-flex-margin-auto").style.display="none";'>
  <div style="background-image: url(/assets/images/2/cat_overflow.jpg);background-size: cover;" class='square22rem flex items-center justify-center white fw6 margin-auto'>
    <span style='background-color: rgba(0,0,0,0.6)'>
      Overflow <br/> centered <br/> and scrollable
    </span>
  </div>
  <div id='resize-flex-margin-auto' class='absolute f5' style='right: 5px; bottom: 0'>resize ↘</div>
</div>
<p></p>
  <div id='flex-centering-html-margin' class='dn'>
<div class='flex'>
  <div class='margin-auto'></div>
</div>
  </div>
  <div id='flex-centering-css-margin' class='dn'>
.flex {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.margin-auto {
  margin: auto
}
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-selector-class">.flex</span> {
  <span class="hljs-attribute">display</span>: -webkit-box;
  <span class="hljs-attribute">display</span>: -moz-box;
  <span class="hljs-attribute">display</span>: -ms-flexbox;
  <span class="hljs-attribute">display</span>: -webkit-flex;
  <span class="hljs-attribute">display</span>: flex;
}
<span class="hljs-selector-class">.margin-auto</span> {
  <span class="hljs-attribute">margin</span>: auto;
}</code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='flex-centering-css-margin'>Copy CSS</button>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'flex'</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'margin-auto'</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='flex-centering-html-margin'>Copy HTML</button>
  </div>

2. <span class='fw6 f4'>Safe keyword</span>. This keyword aligns the centered item to 'flex-start' in case if the centered item is larger than its container. It should work by just adding the <code class='css bg-code code-gray'>safe</code> keyword to the justify-content or align-items properties: <code class='css bg-code code-gray'><span class='hljs-attribute'>justify-content</span>: safe center</code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>align-items</span>: safe center</code>. A short solution, but still on the way to browser support.

<div class='h4 container-background-color flex items-center-safe justify-center-safe resize-both overflow-auto relative' onscroll='document.getElementById("resize-flex-safe").style.display="none";'>
  <div style="background-image: url(/assets/images/2/safe-dog-overflow.jpg);background-size: cover;" class='square22rem flex items-center justify-center white fw6'>
    <span style='background-color: rgba(0,0,0,0.6)'>
      Probably <br/> not working <br/> in your browser <br/> yet
    </span>
  </div>
  <div id='resize-flex-safe' class='absolute f5' style='right: 5px; bottom: 0'>resize ↘</div>
</div>
<p></p>
  <div id='flex-centering-html-safe' class='dn'>
<div class='flex items-center-safe justify-center-safe'>
  <div></div>
</div>
  </div>
  <div id='flex-centering-css-safe' class='dn'>
.flex {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.justify-center-safe {
  justify-content: safe center;
}
.items-center-safe {
  align-items: safe center;
}
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl">
<span class="hljs-selector-class">.flex</span> {
  <span class="hljs-attribute">display</span>: -webkit-box;
  <span class="hljs-attribute">display</span>: -moz-box;
  <span class="hljs-attribute">display</span>: -ms-flexbox;
  <span class="hljs-attribute">display</span>: -webkit-flex;
  <span class="hljs-attribute">display</span>: flex;
}
<span class="hljs-selector-class">.justify-center-safe</span> {
  <span class="hljs-attribute">justify-content</span>: safe center;
}
<span class="hljs-selector-class">.items-center-safe</span> {
  <span class="hljs-attribute">align-items</span>: safe center;
}
  </code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='flex-centering-css-safe'>Copy CSS</button>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex items-center-safe justify-center-safe"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='flex-centering-html-safe'>Copy HTML</button>
  </div>

3. <span class='fw6 f4'>Centered element wrapped into a scrollable container</span>. Another way is to just add another wrapper with <code class='css bg-code code-gray'><span class='hljs-attribute'>overflow</span>: auto</code> (or whatever you like) and set <code class='css bg-code code-gray'><span class='hljs-attribute'>height</span>: 8rem</code>, for example. Don't forget to keep the scrollable container scrollable. So if you set <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: flex</code> on it - don't center it with <code class='css bg-code code-gray'><span class='hljs-attribute'>justify-content</span>: center</code> or <code class='css bg-code code-gray'><span class='hljs-attribute'>items-center</span>: center</code>, as the centered div will cease to be scrollable again.

<div class='h4 container-background-color flex items-center justify-center resize-both relative overflow-hidden' onscroll='document.getElementById("resize-scrollable-one").style.display="none";'>
  <div class='overflow-auto h4' style='margin:0;'>
    <div style="background-image: url(/assets/images/2/two-cat-containers.jpg);background-size: cover;" class='square22rem flex items-center justify-center white fw6'>
      <span style='background-color: rgba(0,0,0,0.6)'>
        Overflow <br/> centered <br/> and scrollable <br/> again
      </span>
    </div>
  </div>
  <div class='absolute f5' style='right: 5px; bottom: 0' id='resize-scrollable-one'>resize ↘</div>
</div>
  <div id='flex-centering-html-scrollable-container' class='dn'>
<div class='flex items-center justify-center'>
  <div class='overflow-auto h4'>
    <div></div>
  </div>
</div>
  </div>
  <div id='flex-centering-css-scrollable-container' class='dn'>
.flex {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.justify-center {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.items-center {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.overflow-auto {
  overflow: auto;
}
.h4 {
  height: 8rem; /* example height  */
}

  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-selector-class">.flex</span> {
  <span class="hljs-attribute">display</span>: -webkit-box;
  <span class="hljs-attribute">display</span>: -moz-box;
  <span class="hljs-attribute">display</span>: -ms-flexbox;
  <span class="hljs-attribute">display</span>: -webkit-flex;
  <span class="hljs-attribute">display</span>: flex;
}
<span class="hljs-selector-class">.justify-center</span> {
    <span class="hljs-attribute">-webkit-box-pack</span>: center;
        <span class="hljs-attribute">-ms-flex-pack</span>: center;
            <span class="hljs-attribute">justify-content</span>: center;
}
<span class="hljs-selector-class">.items-center</span> {
    <span class="hljs-attribute">-webkit-box-align</span>: center;
        <span class="hljs-attribute">-ms-flex-align</span>: center;
            <span class="hljs-attribute">align-items</span>: center;
}
<span class="hljs-selector-class">.overflow-auto</span> {
  <span class="hljs-attribute">overflow</span>: auto;
}
<span class="hljs-selector-class">.h4</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-number">8rem</span>; <span class="hljs-comment">/* example height  */</span>
}</code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='flex-centering-css-scrollable-container'>Copy CSS</button>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex items-center justify-center"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"overflow-auto h4"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='flex-centering-html-scrollable-container'>Copy HTML</button>
  </div>
</ol>
#### Centering using CSS Grid

Take your container and set <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: grid</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>place-items</span>: center</code>.
<p>
Now the content is centered in all directions. And <span class='fw6'>that's all</span>.
</p>


<p class='f4 fw6 tl example'>Example of centering with grid.</p>
  <p>
  </p>
  <div class='grid place-center h25rem w7 tc mb-1-5-rem' style='background: radial-gradient(farthest-side at bottom left, rgba(255, 0, 255, 0.5), transparent), radial-gradient(farthest-corner at bottom right, rgba(255, 50, 50, 0.5), transparent 400px); background-color:#153d33;'>
    <img src='/assets/images/2/dog_roadtrip.jpg' class='w5 h-auto'/>
  </div>
  <div id='grid-centering-html' class='dn'>
<div class='grid place-center'>
  <div></div>
</div>
  </div>
  <div id='grid-centering-css' class='dn'>
.grid {
  display: -ms-grid;
  display:     grid;
}
.place-center {
  place-items: center;
}
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="css hljs tl"><span class="hljs-selector-class">.grid</span> {
  <span class="hljs-attribute">display</span>: -ms-grid;
  <span class="hljs-attribute">display</span>:     grid;
}
<span class="hljs-selector-class">.place-center</span> {
  <span class="hljs-attribute">place-items</span>: center;
}</code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='grid-centering-css'>Copy CSS</button>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid place-center"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
    <button class='bl-link-small dib absolute bottom10px right10px copy' data-text-id='grid-centering-html'>Copy HTML</button>
  </div>

#### Know other CSS centering techniques? Leave a comment :)
