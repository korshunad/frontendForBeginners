---
title: "Let’s Learn about Links!"
category: "articles"
tags: ["html", "beginner"]
imgSrc: ""
imgAlt: ""
author: "Annie Phan"
imagePreview: "/learn-about-links.png"
metaDescr: "What are HTML links? Links are those clickable items that connect to one’s work, picture, or information object to another in a multimedia environment."
summary: "A detailed explanation of HTML links with example codes."
date: "2019-06-07"
---

##What are links?

Links are those clickable items that connect to one’s work, picture, or information object to another in a multimedia environment. They use anchor elements to specifies a hyperlink reference to a file by using the syntax <code>\<a></a></code>. 

The “href” attribute is used to configure the hyperlink reference, which identifies the name and location of the file to access. It can also be used to indicate the file name or URL. 

For Example: 
<pre class="language-css"><code>&lt;a href="contact.html"&gt;Contact Us&lt;/a&gt;</code></pre>

##What kind of links? 

The absolute hyperlinks indicate the absolute location of a resource on the Web. Use them when you need to link to a different website. The href value for an absolute hyperlink to the homepage of the website includes the HTTP:// protocol and the domain name

For Example: 
<pre class="language-css"><code>&lt;a href="http://yahoo.com"&gt;Yahoo&lt;/a&gt;</code></pre>

The relative hyperlink is used when you want to link to web pages within your own site. The href value for a relative hyperlink does not begin with the HTTP:// and does not include a domain name, however, only the file name or file name and folder of the web page you want to display are used instead!

For Example: 
<pre class="language-css"><code>&lt;a href="index.html"&gt;Home&lt;/a&gt;</code></pre>

##Example of a site map for a website 

<img style="width:300px;" src="/learn-about-links2.png" alt="Example of a site map for a website"/>

To link to a page named services.html located in the same folder as index.html
<pre class="language-css"><code>&lt;a href=“Services.html”&gt;Services&lt;/a&gt;</code></pre>

##The Email link
An anchor tag <code>\<a></code> can also be used to create email hyperlinks which will automatically launch the default mail program configured for the browser. If no browser default is set, a message is displayed. It uses mailto: instead of HTTP://

For Example: 
<pre class="language-css"><code>&lt;a href=“mailto:me@gmail.com”&gt;me@gmail.com&lt;/a&gt;</code></pre>

##How to Style Links?

The :link selector is used to select unvisited links. The syntax for it is:
<pre class="language-css"><code>:link {
  css declarations;
}
</code></pre>

However, links are boring without styling! By using CSS property such as color, font-family, background, etc. you can change its appearance. Also, links have four states that you can also customize!
<ul style="line-height: 2;">
  <li>
    <span class="red mr3">●</span>a:link - a normal, unvisited link
  </li>
  <li>
    <span class="red mr3">●</span>a:visited - a link the user has visited
  </li>
  <li>
    <span class="red mr3">●</span>a:hover - a link when the user hovers the cursor over it
  </li>
  <li>
    <span class="red mr3">●</span>a:active - a link which it is clicked
  </li>
</ul>

The text-decoration property is mostly used to remove underlines from links:
Make them into buttons! By changing the background. 

For Example: 
<pre class="language-css"><code>a:link {
  background-color: blue;
}

a:visited {
  background-color: green;
}

a:hover {
  background-color: lightblue;
}

a:active {
  background-color: lightgreen;
} 
</code></pre>