---
title: "JQuery Toggle Button"
category: "tutorials"
tags: ["organization", "css", "jquery", "beginner"]
imgSrc: ""
imgAlt: ""
author: "Takako Nakajima"
imagePreview: "/jquery-toggle.png"
metaDescr: "JQuery and CSS tutorial for making a simple toggle button."
date: "2019-05-27"
---
Have you ever seen buttons like this?

I bet you do. Rather, you have seen it everywhere on the internet.
There're several ways to create "Toggle Button",
Today I'm going to introduce you how to create a simple toggle button with CSS and jQuery.

*What is jQuery? > See here.

The Codepen link below contains all of the codes for this tutorial.
So you may check it before going through this tutorial, to grasp its overview.

Step 1: Set-ups

Download jQuery file from the jQuery official web page.
Or, you may also copy the CDN link from their official CDN link page and paste into <head> tag of your web page.
Once you finished embedding jQuery link into your <head>, next step is to create the body of the toggle button.

Step 2: Create the body of the toggle button
Create two <div> tags, for button body and button itself.
And then it’s fun part, add CSS onto those <div>s.
The code below is just my example code but, you may change to the properties like width, height, color as you like.

Step 3: Create CSS class for jQuery “toggleClass()” method

There are several alternatives to put toggle movement onto buttons.
In this tutorial, we use jQuery “toggleClass()” method.
The code left is to move object 100px to its right.
We will add this class to <div class="toggleButton"> using jQuery toggleClass(), when the button is clicked.

Step 4: Add jQuery toggleClass()
jQuery only require 3 lines to add a toggle function onto the button, while plain JavaScript code needs more lines.
Looking at the code above, You might be able to guess what the code means even without background knowledge of jQuery syntax.
This code means,
"When '.toggleButton' is clicked, function occurs. The function add or delete class '.moveToRight100px' to/from '.toggleButton'. "

After adding this jQuery code, your button will come into play.

Step 5: Adjustment
Now we have our button is toggled.
However, it looks a bit too robotic.
We want a more smooth, comfortable movement when it's toggled.

To create smooth movement, we will add "transition" property to .toggleButton CSS.
CSS Transition property allows you to add an effect on an arbitrary object.
*W3S CSS Transition

The code above sets ease transition within 1 second on .toggleButton. 
Please try out clicking the button and look at how it changed its way to move.



CSS works like this:
<pre class="language-css"><code class="language-css">selector {
  property: value;
}
</code></pre>
If you want to style a particular HTML element, you can select it in multiple ways:

 <span class="red mr3">●</span> using its <code>id</code> (ex. <code>#wrapper</code>), <code>class</code> name (ex. <code>.red</code>) or tag name (<code>p</code> for a paragraph tag, etc.)

 <span class="red mr3">●</span> using the value of the attribute on the HTML element, for example,  <code>input[type=”text”]</code> will select all input elements that have type text.

 <span class="red mr3">●</span> combining selectors, for example combining two classes to select only the elements that have both, or combing container (parent) element selector with the child one: for example, target a heading inside of the main tag:
 <pre class="language-css"><code>main h1 {
 property: value;
}</code></pre>

## Why use CSS?

CSS stands for Cascading Style Sheets, and it describes how HTML elements are to be displayed on the screen.  It is designed to separate presentation from its content. CSS is in charge of presentation and includes the layout, colors, fonts, borders, etc.! Of course, the benefit of using CSS is that it saves time and work as it can control the layout of multiple web pages with a single edit. Meaning you can change the appearance of an entire website with one style sheet!

DO THIS
<pre class="bg-washed-green pa3">
<code class="language-css">p {
  color: black;
  paddong: 10px;
}
</code></pre>

DON’T DO THIS

<pre class="bg-washed-red pa3">
<code class="language-css">p {color: black;padding: 10px;}
</code></pre>

### Keep it Consistent
You should develop your own ‘sublanguage’ for classes and id-s for consistency.  For example, if you name a class <code>image-float-right</code>, don’t start using <code>floating-right-image.</code>

###Use a Reset
Reset stylesheet is a compressed set of CSS rules that reset the styling of elements to keep text heights, margins, and paddings consistent among different browsers. The reason for this is to prevent your website from appearing different from one browser to another. You would like to reference your reset stylesheet before your stylesheets in the head section. Eric Meyer has developed <a target="_blank" rel="noopener noreferrer" href="https://meyerweb.com/eric/tools/css/reset/reset.css" title="link to the Eric Meyer reset.css file">the reset.css file</a> commonly used today, which you can modify if necessary.



DO THIS
<pre class="bg-washed-green pa3"><code class="language-css">nav {
  /* properties */
}

main {
  /* properties */
}

footer{
  /* properties */
}</code></pre>

DON’T DO THIS

<pre class="bg-washed-red pa3"><code class="language-css">footer {
  /* properties */
}

main {
  /* properties */
}

nav {
  /* properties */
}</code></pre>


### Use the Shorthand
Save time with coding by using the shorthand version for certain elements like padding.
<pre class="language-css"><code class="language-css">span {
  padding: 10px 9px 8px 7px; /* clockwise starting from the top: top, right, bottom, left paddings */
}</code></pre>

### Comment your CSS
For your fellow human companions (and yourself)! It is best to comment on each selection.

For example,

<pre class="language-css"><code class="language-css">/* Navigation styles */
nav {

}

nav ul li {

}

/* Custom classes */
.red {

}
.submit-button {

}
/* and so on, organising your CSS stylesheet into sections */
</code></pre>

###Alphabetize your Properties
We all learnt about the alphabet in kindergarten. Here is where we can apply that skill in your code. It is highly useful as it allows for quick scanning if each element has a long list of properties. This should save you time from searching for a specific value.
<pre class="language-css"><code class="language-css">.hero-image {
  background-image: url(images/image.png);
  border-radius: 5px;
  color: navy;
  height: auto;
  opacity: 9;
  padding: 10px;
  width: 100%;

}</code></pre>

### Check which CSS properties you can use in which browser.
Say, you’d like to try out this fancy grid layout. However, it turns out that the majority of your visitors won’t appreciate it because they are not using the newest browsers. To prevent that it is a good practice to check with a resource such as <a href="https://caniuse.com/" title="Can I use some CSS property" target="_blank" rel="noopener noreferrer">https://caniuse.com/</a> to see whether you should provide a fallback or choose using smth else, like flexbox or something.

Have a great time prettifying your web pages and apps, and stay tuned for more CSS guides from us!
