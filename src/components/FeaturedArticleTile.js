import React from "react";

export default ({title, shortDescription, link}) => (
  <article>
    <span class="tag">Featured</span>
    <h1>{title}</h1>
    <p>{shortDescription}</p>
    <a href={link}>Read more →</a>
  </article>
);
