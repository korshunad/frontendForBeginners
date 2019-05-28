---
title: "What is CSS?"
category: "articles"
tags: ["organization", "css", "beginner"]
imgSrc: ""
imgAlt: ""
author: "Annie Phan"
imagePreview: "/html-css-intro.png"
metaDescr: "What is CSS and the novice's best practices. start organizing your CSS stylesheets with our quick intro to CSS"
date: "2019-05-17"
---

## What is CSS?

So you finished coding all the HTML tags for your website, but it is looking kind of dull. Let us introduce CSS to make everything beautiful, and you can fancy up your website!
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

## Start organizing your stylesheets.

There are many tutorials online on how to style your webpage, but we won’t be covering that for today. This week’s article is learning the basics on how to organize your stylesheet, so it doesn’t come out as a hot mess (Yikes!) Here are some CSS practices so your code is neatly clean and tidy!

### Make it Readable
You would want to be able to read your code (why wouldn’t you?). High readability makes fixing bugs and team collaboration easier (your teammates will thank you greatly!) Second, being able to scan allows you to speed up the process and work more effectively. To do this, for each property, allow it to have its line.

For example,

DO THIS
<pre class="bg-washed-green pa3">
<code class="language-css">p {
  color: black;
  padding: 10px;
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

###Organize with a Top-down Structure

Organize the stylesheet to allow you to find parts of the code quickly. The best way is to design in a format that is the layout in the HTML file.

For example,


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
