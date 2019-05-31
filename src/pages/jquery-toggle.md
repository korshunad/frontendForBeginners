---
title: "jQuery Toggle Button"
category: "tutorials"
tags: ["css", "jquery", "beginner"]
imgSrc: ""
imgAlt: ""
author: "Takako Nakajima"
imagePreview: "/jquery-toggle.png"
metaDescr: "jQuery and CSS tutorial for making a simple toggle button."
date: "2019-05-27"
---

<img src="/jquery-toggle-img.png" alt="jQuery toggle button image"/>

Have you ever seen buttons like this?

I bet you do. Rather, you have seen it everywhere on the internet.
There're several ways to create "Toggle Button",
Today I'm going to introduce you how to create a simple toggle button with CSS and jQuery.

*What is jQuery? > <a target="_blank" rel="noopener noreferrer" href="https://learn.jquery.com/about-jquery/" title="link to the jQuery about page">See here.</a>

The Codepen below contains all of the codes for this tutorial.
So you may check it before going through this tutorial, to grasp its overview.

<iframe height="265" style="width: 100%; margin-bottom: 50px;" scrolling="no" title="Toggle button - tutorial" src="//codepen.io/Takako/embed/rgKXmJ/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Takako/pen/rgKXmJ/' target="_blank" rel="noopener noreferrer">Toggle button - tutorial</a> by Takako
  (<a href='https://codepen.io/Takako' target="_blank" rel="noopener noreferrer">@Takako</a>) on <a href='https://codepen.io' target="_blank" rel="noopener noreferrer">CodePen</a>.
</iframe>


## Step 1: Set-ups

Download jQuery file from the <a target="_blank" rel="noopener noreferrer" href="https://jquery.com/download/#jquery" title="link to the jQuery official download page">jQuery official web page</a>. Choose the top link, "Download the compressed, production jQuery 3.4.1". (The number after "jQuery" can be changed in future. it means jQuery is updated.)

Or, you may also copy the CDN link from <a target="_blank" rel="noopener noreferrer" href="https://code.jquery.com/" title="link to the jQuery CDN link page">their official CDN link page</a>(Choose "jQuery Core 3.4.1", "miniified" version for this tutorial) and paste the CDN link into &lt;head&gt; tag of your HTML.
Once you finished embedding jQuery link into your &lt;head&gt;, next step is to create the body of the toggle button.


## Step 2: Create the body of the toggle button

Create two &lt;div&gt; tags, for button body and button itself.
And then it’s fun part, add CSS onto those &lt;div&gt;s.
The code below is just my example code but, you may change to the properties like width, height, color as you like.

HTML:
<pre class="language-html"><code>&lt;div class="wrapper"&gt;
&lt;div class="toggleButton"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
CSS:
<pre class="language-css"><code>.wrapper {
  padding:20px;
  border-radius:100px;
  background-color: #ccc;
  width: 200px;
  height: 100px;
  margin-bottom: 30px;
}
.toggleButton {
  width: 100px;
  height: 100px;
  background-color: #6589aa;
  border-radius:50%;
}</code></pre>


## Step 3: Create CSS class for jQuery “toggleClass()” method

There are several alternatives to put toggle movement onto buttons.
In this tutorial, we will use jQuery “toggleClass()” method.
The code below is to move object 100px to its right.
<pre class="language-css"><code>.moveToRight100px{
  margin-left:100px;
}</code></pre>

We will add this class to <code>\<div class="toggleButton"\></code> using jQuery toggleClass(), when the button is clicked.

## Step 4: Add jQuery toggleClass()
jQuery only require 3 lines to add a toggle function onto the button, while plain JavaScript code needs more lines.
<pre class="language-js"><code>$('.toggleButton').click(function(){
  $('.toggleButton').toggleClass('moveToRight100px');
})</code></pre>
Looking at the code above, You might be able to guess what the code means even without knowledge of jQuery syntax.
This code means,
"When '.toggleButton' is clicked, function occurs.
The function add or delete class '.moveToRight100px' to/from '.toggleButton'. "

After adding this jQuery code, your button will come into play.

## Step 5: Adjustment
Now we have our button toggled.
However, it looks a bit too robotic.
We want a more smooth, comfortable movement when it's toggled.

To create smooth movement, we will add "transition" property to .toggleButton CSS.
<pre class="language-css"><code>.toggleButton {
  transition:1s ease;
}</code></pre>
CSS Transition property allows you to add an effect on an arbitrary object.
<a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/css/css3_transitions.asp" title="link to the jQuery CDN link page">*W3S CSS Transition</a>

The code above sets ease transition within 1 second on .toggleButton.
Please try out clicking the button and look at how it changed its way to move.
