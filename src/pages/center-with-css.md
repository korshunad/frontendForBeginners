---
title: "How to Center with CSS in 2019"
category: "tutorials"
tags: ["css", "overview", "guide"]
imgSrc: ""
imgAlt: ""
author: "Ana Makarochkina"
imagePreview: "/center-with-css.png"
metaDescr: "How to center elements with CSS in 2019: different CSS techniques you can use to center any HTML element."
summary: "Hello world! It’s 2019 and still one of the most daunting CSS-related questions is
the centering of the elements on a page. Recently a CSS centering code generator
topped 1036 upvotes on HackerNews. So we compiled our own guide for you to
get all the practices for CSS centering in one place."
date: "2019-05-25"
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
> Centering with CSS, vertically and horizontally is a popular problem. Today, in 2019, there are many solutions to this problem, tailored to different use cases and browser support. Let's explore them!

#Horizontal Centering

## Center Text and Inline Elements with <code class="css">text-align: center</code>

This technique is commonly used  to center text, one or multi-line. You can also center images with it.

Interestingly enough, you can also use this technique for centering divs as well, if they are set to <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: inline-block</code>

<span class="b">Caveat</span>: reset the centered block text-align if you don’t want the contents to be centered as well. Overall for non-inline elements it is better to use the  <code class='css bg-code code-gray'><span class='hljs-attribute'>margin</span>:0 auto</code>.

## Center Block Elements Horizontally with <code class="css">margin: 0 auto</code>

This is another centering technique, which is also almost as old as the web as we know it. It works great on blocks as well as any elements with set width less than 100%. That is, if you set width on an inline element, you can apply this technique to it. Browser will distribute the remaining place around the element automatically.
<span class="b">Caveat</span>: if the browser is resized and its width becomes smaller than the blocks set width, you may see horizontal scrollbar. To avoid that set <code class="css bg-code code-gray">max-width</code>. Take a note though that max-width is supported IE7+

#Vertical Centering

## Center single lines of text (and sometimes images) with <code class="css">line-height</code>
Center an inline element with <code class='css bg-code code-gray'><span class='hljs-attribute'>line-height</span></code>. If your parent block has set height value, make sure the <code class='css bg-code code-gray'><span class='hljs-attribute'>line-height</span></code> is equal to it, otherwise the element will be lower (if line-height is bigger) or higher (if line-height is smaller) than expected.
This technique works best on one-line texts, which will not wrap, for example in buttons. Line-height essentially sets a line of the text above and below the current texts, whose heights equal to half of the line-height. If the line-height is much greater than the font-size, you can try use only line-height to center. Set line-height to be greater than the font size. Also note that it centers based on lowercase letters, so the text line with capital letters may appear not centered for visual perfectionists, even though it seems to be used everywhere just like that. So you’ll have to add paddings to even it out.


<p class='f4 fw6 tl example'>Example of centering one line of text (or other inline-element) with line-height.</p>

<p>
<button class='resize-both bg-dark-pink white br2' style='line-height:50px;height:50px;padding:0 10px;'>I'm a button with centered text</button>
</p>

<div class='relative'>
  <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">button</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">'main-button white br2'</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">'line-height:50px;height:50px;padding:0 10px;'</span>&gt;</span>
  I'm a button with centered text
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></div>
</div>

## Add same top and bottom paddings
Just set <code class='css bg-code code-gray'><span class='hljs-attribute'>padding-top</span></code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>padding-bottom</span></code> to the same value and call it a day.

<p class='f4 fw6 tl example'>Example of using equal paddings.</p>

<div>
  <p class='pa4 bg-washed-yellow'>This texts have <span class='hljs-attribute'>padding-top</span> equal to <span class='hljs-attribute'>padding-bottom</span></p>
  <p class='pa4 bg-washed-yellow'> and so appear centered vertically</p>
</div>

## Use HTML and CSS tables
By 2011 HTML tables ruled the CSS centering world. We still use them in email templates, sometimes even with deprecated <code class="css">align</code> and <code class="css">valign</code> attributes (see <a href="https://stackoverflow.com/questions/4387378/how-to-vertical-align-image-and-text-cross-client-email-templates" title="coding email templates is not easy">Outlook issue</a> ).

However, if you hate non-semantic layout, CSS2.1 spec offered <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: table</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: table-cell</code> already in 2011. As the "table" name may suggest, these properties mimic table layout.
To center element vertically, you have to place it in a container with <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: table</code> and an inner element with <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: table-cell</code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>vertical-align</span>: middle</code>.. The latter is used on the HTML tables as well since HTML5.

It is an easy solution for better semantics of the layout, combined with the centering power of the tables. Using it, you don't have to set the child element height or control anything else except display and vertical-align properties.

<div class='fw6 f4 tl example'>Example of centering vertically with CSS tables attributes:</div>
<div class='relative'>
  <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">main</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display: table;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display: table-cell; vertical-align: middle; text-align: center;"</span>&gt;</span>
    This text is centered vertically and horizontally as well.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span></code></div>
</div>

## Center vertically with a ghost element: Michał Czernow hack
This is a technique, the author of which is known probably thanks to <a href="https://css-tricks.com/centering-in-the-unknown/" title="CSS tricks article about centering with CSS">this CSS tricks article</a>
To center an inline-block element (multi-line text, for example) vertically, you can  use a ghost element. It stretches along the parent container height and centers the element with <code class='css bg-code code-gray'><span class='hljs-attribute'>vertical-align</span>: middle</code>. You can use a span, or even a pseudo-element. <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span></code> property to <code class='css bg-code code-gray'>inline-block</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>vertical-align</span>:middle</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>height</span>: 100%</code>.

<p class='f4 fw6 tl example'>Example of centering with ghost pseudo-element.</p>
<p>

Let's center a ghost emoji description in a gray container. To center it vertically I added <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: inline-block</code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>vertical-align</span>: middle</code> to the description. Also I added a pseudo element with <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: inline-block</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>vertical-align</span>: middle</code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>height</span>: 100%</code> to span full height of its parent.

  <div class="resize-both container-background-color ghost-container h5 w7 tc">
    <p class='white fw6 lh-copy di v-mid' style='font-size: 16px; text-align: left; max-width: 300px;'>👻 Ghost. Boo!<br/> A ghost emoji, trying to scare someone. Might also be a halloween costume. <a href='https://emojipedia.org/ghost/' style='color: #daf5ff;'>Emojipedia</a></p>
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
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'ghost-container tc'</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'di v-mid'</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
  </div>

# Centering both Horizontally and Vertically at once

## Set Negative Margins

This technique will work for you if you are fine with calculating negative margins. To set negative margin, first, you set <code class='css bg-code code-gray'><span class='hljs-attribute'>top</span>: 50%</code> and then <code class='css bg-code code-gray'><span class='hljs-attribute'>margin-top</span></code> to half of the height of the child element. If you have top-padding or border, you may want to adjust for that too, subtracting it from the top-margin. If you don't want to bother with how the height of the element changes because of the padding, just use <code class='css bg-code code-gray'><span class='hljs-attribute'>box-sizing</span>: border-box</code>. Centering horizontally is similar: set some width, <code class='css bg-code code-gray'><span class='hljs-attribute'>left</span>: 50%</code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>margin-left</span>: -(width/2 + padding)</code>.

<span class="b">Caveat</span>: beware of possible content spillover if the child block gets taller than the parent one.

<p class='f4 fw6 tl example'>Example of centering with negative margins.</p>

<p>
Say you have an unformatted Twitter quote about how centering in CSS is hard. I had to choose the width and height that look good on mobile because otherwise, the text overflows its container. You can see the code below and can copy it if you like.
</p>

  <div class='resize-both h5 container-background-color relative'>
    <div class="bg-white" style='top: 50%; left: 50%; height: 160px; padding: 20px; width: 300px; margin-top: -80px; margin-left: -150px; font-size: 12px; box-sizing: border-box; position: absolute;'>
      <p style='font-weight: 400; font-size: 14px; margin-bottom: 10px;'>
“44 years ago we put a man on the moon, but we still can’t vertically center things in CSS.”
      </p>
      &mdash; Juozas Kaziukėnas (@juokaz) <a href="https://twitter.com/juokaz/status/359074373816156160?ref_src=twsrc%5Etfw">July 21, 2013</a>
    </div>
  </div>
  <div class='relative'>
  <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'relative h5'</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">'top: 50%; left: 50%; height: 160px; padding: 20px; width: 300px; margin-top: -80px; margin-left: -150px; box-sizing: border-box; position: absolute;'</span>&gt;</span>
  centered content
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
  </div>

## Center using CSS Transforms
This technique is similar to <span class='f5 fw6 ttu'>NEGATIVE MARGINS</span>, but here you don't need to set the centered block's height. Set <code class='css bg-code code-gray'><span class='hljs-attribute'>position</span>: absolute</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>top</span>: 50%</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>left</span>: 50%</code>. And instead of bringing the block back up with margins you use <code class='css bg-code code-gray'><span class='hljs-attribute'>transform</span>: translate(-50%, -50%)</code> for that.

<span class="b">Caveats</span>:

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
    <div style="top: 50%;left: 50%;transform: translate(-50%, -50%);transform-style: preserve-3d;position: absolute;background-image: url(/pickle-rick.jpg);background-size: cover;" class='pa5 white fw6'>
      Pickle Rick.
    </div>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'relative h5'</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">'top: 50%; left: 50%; transform: translate(-50%, -50%); transform-style: preserve-3d; position: absolute;'</span>&gt;</span>
    centered content
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
  </div>

## <a href='https://codepen.io/shshaw/full/gEiDt/' rel='noopener noreferrer' title='article first introduced the Absolute Centering term'>Absolute centering</a>

Similar to the previous technique, you are using the absolute position on the element you want to center vertically. A nice advantage of absolute centering technique is that you don't have to set the distance between child and parent elements: child element will be centered automatically.

First, position the element absolutely with <code class='css bg-code code-gray'><span class='hljs-attribute'>position</span>: absolute</code> and add <code class='css bg-code code-gray'><span class='hljs-attribute'>margin</span>: auto</code>, then <code class='css bg-code code-gray'><span class='hljs-attribute'>top</span>: 0</code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>bottom</span>: 0</code> to center element vertically and <code class='css bg-code code-gray'><span class='hljs-attribute'>left</span>: 0</code> with <code class='css bg-code code-gray'><span class='hljs-attribute'>right</span>: 0</code> to center it horizontally.

<p class='f4 fw6 tl'>Absolute centering example.</p>
<p>
Let's take another unformatted Twitter quote.
</p>
  <div class='resize-both h5 container-background-color relative'>
    <div class="bg-white" style='margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; height: 160px; padding: 20px; width: 300px; font-size: 12px;'>
      <p style='font-weight: 400; font-size: 14px; margin-bottom: 10px;'>“You can center anything with absolute positioning, but at a certain cost.”</p>
      &mdash; Count von Count, <a href='https://twitter.com/CountVonCount/status/1033143044198019072'>July 21, 2013</a>
    </div>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'relative h5'</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">'margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0;'</span>&gt;</span>
    centered content
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
  </div>

## Flexbox is almost a standard: center almost anything with it both vertically and horizontally

<div class="w-100 tc mv3">
  <img
    src='/can-i-use-flexbox.png'
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
    <div style="background-image: url(/flexible-box.jpg);background-size: cover;background-position:center;" class='w5 h5 white fw6 flex flex-column justify-center items-center'>
      <span style='background-color: rgba(0,0,0,0.6)' class="white pa1">
        Centered <br/> with <br/> flexbox
      </span>
    </div>
  </div>
<p></p>
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
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'flex flex-row justify-center items-center'</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'flex flex-column justify-center items-center'</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
  </div>

Centering with flexbox will work for the most cases when you need to center something.

<span class="b">Caveats</span>:

Watch for container overflow. A parent container using <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>:flex</code> may not be scrollable and show all content. This problem happens due to the way flexbox centers elements, called "true" centering. Even if the centered element overflows its container, it will remain centered and the parts that overflow are hidden because you cannot scroll to them.
<div class='h4 container-background-color flex items-center justify-center resize-both overflow-auto relative' onscroll='document.getElementById("resize-flex-items-justify-center").style.display="none";'>
  <div style="background-image: url(/cat_overflow.jpg);background-size: cover;" class='square22rem flex items-center justify-center white fw6'>
    <span style='background-color: rgba(0,0,0,0.6)' class="pa1 white">
      Top part <br/> is not <br/> visible
    </span>
  </div>
  <div id='resize-flex-items-justify-center' class='absolute f5' style='right: 5px; bottom: 0'>resize ↘</div>
</div>

If you need the scrollable container, you can use one of the following:

<span>1. </span><span class='fw6 f4'>Margin: auto</span>. Omit the default <code class='css bg-code code-gray'><span class='hljs-attribute'>justify-content</span>: center</code> and/or <code class='css bg-code code-gray'><span class='hljs-attribute'>align-items</span>: center</code> altogether and use <code class='css bg-code code-gray'><span class='hljs-attribute'>margin</span>: auto</code> instead together with <code class='css bg-code code-gray'><span class='hljs-attribute'>overflow</span></code> value of your choice. This way centers the element both vertically and horizontally just fine.

<div class='h4 container-background-color flex resize-both overflow-auto relative' onscroll='document.getElementById("resize-flex-margin-auto").style.display="none";'>
  <div style="background-image: url(/cat_overflow.jpg);background-size: cover;" class='square22rem flex items-center justify-center white fw6 margin-auto'>
    <span style='background-color: rgba(0,0,0,0.6)' class="pa1 white">
      Overflow <br/> centered <br/> and scrollable
    </span>
  </div>
  <div id='resize-flex-margin-auto' class='absolute f5' style='right: 5px; bottom: 0'>resize ↘</div>
</div>
<p></p>
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
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'flex'</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'margin-auto'</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
  </div>

<span>2. </span><span class='fw6 f4'>Safe keyword</span>. This keyword aligns the centered item to 'flex-start' in case if the centered item is larger than its container. It should work by just adding the <code class='css bg-code code-gray'>safe</code> keyword to the justify-content or align-items properties: <code class='css bg-code code-gray'><span class='hljs-attribute'>justify-content</span>: safe center</code> and <code class='css bg-code code-gray'><span class='hljs-attribute'>align-items</span>: safe center</code>. A short solution, but still on the way to browser support.

<div class='h4 container-background-color flex items-center-safe justify-center-safe resize-both overflow-auto relative' onscroll='document.getElementById("resize-flex-safe").style.display="none";'>
  <div style="background-image: url(/safe-dog-overflow.jpg);background-size: cover;" class='square22rem flex items-center justify-center white fw6'>
    <span style='background-color: rgba(0,0,0,0.6)' class="pa1 white">
      Probably <br/> not working <br/> in your browser <br/> yet
    </span>
  </div>
  <div id='resize-flex-safe' class='absolute f5' style='right: 5px; bottom: 0'>resize ↘</div>
</div>
<p></p>
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
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex items-center-safe justify-center-safe"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
  </div>

<span>3. </span><span class='fw6 f4'>Centered element wrapped into a scrollable container</span>. Another way is to just add another wrapper with <code class='css bg-code code-gray'><span class='hljs-attribute'>overflow</span>: auto</code> (or whatever you like) and set <code class='css bg-code code-gray'><span class='hljs-attribute'>height</span>: 8rem</code>, for example. Don't forget to keep the scrollable container scrollable. So if you set <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: flex</code> on it - don't center it with <code class='css bg-code code-gray'><span class='hljs-attribute'>justify-content</span>: center</code> or <code class='css bg-code code-gray'><span class='hljs-attribute'>items-center</span>: center</code>, as the centered div will cease to be scrollable again.

<div class='h4 container-background-color flex items-center justify-center resize-both relative overflow-hidden' onscroll='document.getElementById("resize-scrollable-one").style.display="none";'>
  <div class='overflow-auto h4' style='margin:0;'>
    <div style="background-image: url(/two-cat-containers.jpg);background-size: cover;" class='square22rem flex items-center justify-center white fw6'>
      <span style='background-color: rgba(0,0,0,0.6)' class="pa1 white">
        Overflow <br/> centered <br/> and scrollable <br/> again
      </span>
    </div>
  </div>
  <div class='absolute f5' style='right: 5px; bottom: 0' id='resize-scrollable-one'>resize ↘</div>
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
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex items-center justify-center"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"overflow-auto h4"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
  </div>

## Centering using CSS Grid

Take your container and set <code class='css bg-code code-gray'><span class='hljs-attribute'>display</span>: grid</code>, <code class='css bg-code code-gray'><span class='hljs-attribute'>place-items</span>: center</code>.
<p>
Now the content is centered in all directions. And <span class='fw6'>that's all</span>.
</p>


<p class='f4 fw6 tl example'>Example of centering with grid.</p>
  <p>
  </p>
  <div class='grid place-center h25rem w7 tc mb-1-5-rem' style='background: radial-gradient(farthest-side at bottom left, rgba(255, 0, 255, 0.5), transparent), radial-gradient(farthest-corner at bottom right, rgba(255, 50, 50, 0.5), transparent 400px); background-color:#153d33;'>
    <img src='/dog_roadtrip.jpg' class='w5 h-auto'/>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="css hljs tl"><span class="hljs-selector-class">.grid</span> {
  <span class="hljs-attribute">display</span>: -ms-grid;
  <span class="hljs-attribute">display</span>:     grid;
}
<span class="hljs-selector-class">.place-center</span> {
  <span class="hljs-attribute">place-items</span>: center;
}</code></div>
  </div>
  <div class='relative'>
    <div class='pre mb4 overflow-auto' style='line-height: 125%; border: none; background: none; padding: 0;'><code class="html hljs tl"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid place-center"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></div>
  </div>

## Summary

That was an overview of CSS centering techniques available today. Here's a short approximate summary-timeline of the most interesting ones:
<img src="/timeline.png" alt="CSS Centering techniques approzimate timeline"/>

## Know other CSS centering techniques? Leave us a comment :)

