---
title: "How to validate forms"
category: "tutorials"
tags: ["frontend", "html", "html5", "css", "javascript"]
imgSrc: ""
imgAlt: ""
author: "Ana Makarochkina"
imagePreview: "/validate_forms.png"
metaDescr: "How to validate forms client-side using HTML5 and JavaScript."
summary: "How to validate forms client-side using HTML5 and JavaScript."
date: "2019-06-14"
---
#How to validate forms?

Forms can be tedious to handcode. However, the job is not done until the form is not collecting the data users enter. As a form creator, it is your responsibility to ensure that the content of the form is formatted correctly. That&rsquo;s why we prepared some tips on how to tackle the form validation.

##Always validate forms on the server

Remember that the HTML attributes and Javascript can be edited in browser and form behavior altered, so always check on the server as well.
But for better user experience you should still validate the input information client-side as well (using Javascript and HTML5) so that users get immediate and specific feedback what went wrong with their form filling out process.

##What can you do on HTML5
<ul style="line-height: 2;">
<li class="mb3"><span class="red mr3">●</span>
Required attribute on inputs - will prevent a form from submission if the specified form fields are empty and display the neat message next to form inputs which have this attribute
</li>
<li class="mb3"><span class="red mr3">●</span>
Use Input types. They are good both for visual UI and validation.

<iframe height="586" style="width: 100%;" scrolling="no" title="HTML5 inputs" src="//codepen.io/korshunad/embed/gNPxmw/?height=586&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
See the Pen <a href='https://codepen.io/korshunad/pen/gNPxmw/'>HTML5 inputs</a> by Anastasiia Korshunova
(<a href='https://codepen.io/korshunad'>@korshunad</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

</li>
<li class="mb3"><span class="red mr3">●</span>
Style valid/invalid inputs using CSS

<pre class="language-css pa3">
<code class="language-css">p {
input:required:invalid, input:focus:invalid {
/* insert your own styles for invalid form input */
-moz-box-shadow: none;
}
input:required:valid {
/* insert your own styles for valid form input */
}
</code>
</pre>


</li>
<li class="mb3"><span class="red mr3">●</span>
Use input patterns for different data types, use the title attribute to customize the error message

<iframe height="473" style="width: 100%;" scrolling="no" title="Input patterns for different data types" src="//codepen.io/korshunad/embed/OeMjmW/?height=473&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
See the Pen <a href='https://codepen.io/korshunad/pen/OeMjmW/'>Input patterns for different data types</a> by Anastasiia Korshunova
(<a href='https://codepen.io/korshunad'>@korshunad</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</li>
</ul>

##Sample JS function for form validation

This is a sample JS function for form validation. It doesn&rsquo;t use the HTML5 required attribute. This case may be useful if you want to add custom validation and/or send form data via AJAX.

The <code>validateOneInput()</code> function checks if any input is empty and if the email field contains specifically&lsquo;@&rsquo; character. It checks each input on change and the whole form on submit. &nbsp;One of the benefits of it is that the error messages are displayed under each input and that each field is checked after it was edited. Because <code>validateOneInput()</code> checks each input individually, you don&rsquo;t get &ldquo;empty field&rdquo; errors in the fields you haven&rsquo;t started filling out yet. When the user submits the form, the <code>validate()</code> function loops through all form elements and validates each of them using <code>validateOneInput()</code>.

<iframe height="914" style="width: 100%;" scrolling="no" title="Sample validation with JavaScript" src="//codepen.io/korshunad/embed/NZxvmM/?height=914&theme-id=0&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
See the Pen <a href='https://codepen.io/korshunad/pen/NZxvmM/'>Sample validation with JavaScript</a> by Anastasiia Korshunova
(<a href='https://codepen.io/korshunad'>@korshunad</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You can add your validation rules for each input type to the <code>validateOneInput()</code> function, as well as styling for invalid inputs. Happy tweaking!
