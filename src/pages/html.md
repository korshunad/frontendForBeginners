---
title: "What is HTML?"
category: "overview"
tags: ["css", "html", "beginner"]
imgSrc: ""
imgAlt: ""
author: "Annie Phan"
imagePreview: "/what_is_html.png"
metaDescr: "What is HTML and the joys of HTML5"
summary: "What is HTML? How to use it? Why HTML5 is cool? Find out with our quick intro into what is HTML"
date: "2019-05-16"
---
## What is HTML?

HTML is a set of markup symbols or codes placed in a file intended for display on a Web browser page. The <a href="https://w3c.org" rel="noopener noreferrer" target="_blank">World Wide Web Consortium</a> sets the standards for HTML and its related languages. Each markup code represents an HTML element, and every element has a purpose.

The newest draft version of HTML/XHTML is supported by modern browsers such as Safari, Google Chrome, Firefox, Internet Explorer 9 which are intended to be backward compatible.

A Document Type Definition (DTD) is a doctype statement which identifies the version of HTML contained in your document.  Place it at the top of a web page document.
```html
<!DOCTYPE html>
```
Sample HTML document structure looks like this:
<iframe height="410" style="width: 100%;" scrolling="no" title="Sample HTML document structure" src="//codepen.io/korshunad/embed/VObRqG/?height=366&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
See the Pen <a href='https://codepen.io/korshunad/pen/VObRqG/'>Sample HTML document structure</a> by Anastasiia Korshunova
(<a href='https://codepen.io/korshunad'>@korshunad</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br/>
<br/>

## What are HTML tags?

HTML tags are keywords in a specific format that tell the browser how to format the web page and organize its content. Tags are enclosed in angle brackets, "<" and ">" symbols. They label pieces of content such as “heading”, “paragraph”, “table”, etc. and are now shown by the browser but only used to render the content of the page.

HTML elements can be:

<span class="red mr3">●</span><span class="b">Paired</span>, having an opening and a closing tag, like division element <code><div\><\/div\></code> or paragraph element ```<p></p>```. These elements are able to contain some content inside;

<span class="red mr3">●</span>and <span class="b">Single</span>, empty or self-closing, like image tag ```<img/>``` or line break tag ```<br/>```

They also differ in default width on the page. <span class="b">Block-level</span> elements take whole page width by default, while <span class="b">inline</span> elements take only as much width as their content requires.


Common block level elements would be

<div>
  <div class="pa3 tc bg-washed-red">Division element (<code>div</code> tag)</div>
  <div class="pa3 tc bg-washed-yellow">Headings (<code>h1</code> through <code>h6</code> tags)</div>
  <div class="pa3 tc bg-washed-green">Paragraph  (<code>p</code>tag)</div>
  <div class="pa3 tc bg-washed-blue">Form (<code>form</code>)</div>
</div>

Common inline elements are

<p>
  <span class="pa3 tc bg-washed-red">Span element</span>
  <span class="pa3 tc bg-washed-yellow">Link, anchor element (<code>a</code> tag)</span>
  <span class="pa3 tc bg-washed-green">Button</span>
  <span class="pa3 tc bg-washed-blue">Image (<code>img</code> tag)</span>
</p>


<br/>
<br/>

## What are attributes of HTML elements?

HTML elements also have attributes. They allow to add new information or controll the behavior of the element. The most common attributes are:

<span class="red mr3">●</span>Identification attributes, such as <code>id</code>, <code>class</code> or custom attributes like <code>data-*</code> where you can specify the name of the attribute. These are useful for finding elements to add styles or interactivity;

<span class="red mr3">●</span>Other global attributes, applicable to all of the elements, like <code>style</code> or <code>hidden</code>, also event handler attributes, such as <code>onclick</code>, <code>onmouseenter</code>, <code>onfocus</code>;

<span class="red mr3">●</span>Attributes, specific to certain HTML elements. For example, image element has <code>src</code> attribute for its source link and <code>alt</code> for its alternative description when image cannot be shown or seen.


## What is new with HTML5?

HTML5 is the new standard of HTML and it introduces some exciting functionalities:

<span class="red mr3">●</span>New <code>input</code> types and custom ui elements for them, such as <code>type="date"</code> or <code>type="range"</code>. You don't have to build those yourselves with JavaScript.

<iframe height="265" style="width: 100%;" scrolling="no" title="HTML5 input elements" src="//codepen.io/korshunad/embed/EzXZgy/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
See the Pen <a href='https://codepen.io/korshunad/pen/EzXZgy/'>HTML5 input elements</a> by Anastasiia Korshunova
(<a href='https://codepen.io/korshunad'>@korshunad</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<span class="red mr3">●</span>Multimedia support with <code>\<video\></code> and <code>\<audio\></code> tags
<iframe height="540" style="width: 100%;" scrolling="no" title="HTML5 Multimedia support" src="//codepen.io/korshunad/embed/YbQNvv/?height=540&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/korshunad/pen/YbQNvv/'>HTML5 Multimedia support</a> by Anastasiia Korshunova
    (<a href='https://codepen.io/korshunad'>@korshunad</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>

<span class="red mr3">●</span>Editable content with <code>contenteditable="true"</code> attribute.
<span class="silver bg-washed-yellow pa2" contenteditable="true">Try to edit this line of text</span>

<span class="red mr3">●</span>2D graphics with <code>canvas</code> and 3D graphics with WebGL

Canvas example from <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations" title="">MDN docs</a>
<iframe height="413" style="width: 100%;" scrolling="no" title="An animated solar system (MDN docs canvas example)" src="//codepen.io/korshunad/embed/WBOjYg/?height=413&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/korshunad/pen/WBOjYg/'>An animated solar system (MDN docs canvas example)</a> by Anastasiia Korshunova
    (<a href='https://codepen.io/korshunad'>@korshunad</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>


WebGL example from <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL" title="MDN docs">MDN docs</a>
<iframe height="468" style="width: 100%;" scrolling="no" title="WebGl Cube example (by MDN)" src="//codepen.io/korshunad/embed/BeZJVK/?height=468&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/korshunad/pen/BeZJVK/'>WenGl Cube example (by MDN)</a> by Anastasiia Korshunova
    (<a href='https://codepen.io/korshunad'>@korshunad</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>

<span class="red mr3">●</span>... and many more exciting things which we'll introduce in next articles! Stay tuned 😎
