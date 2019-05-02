import React from "react";

export default ({title, shortDescription, link, imgSrc, imgAlt}) => (
  <article class="card">
    <div class="image-container">
      <img src={imgSrc} alt={imgAlt}/>
    </div>
    <div class="text-container">
      <h2>{title}</h2>
      <p>{shortDescription}</p>
      <a href={link}>Find out now →</a>
    </div>
  </article>
);
