import React from "react";

export default ({title, shortDescription, link, imgSrc, imgAlt}) => (
  <article className="card">
    <div className="image-container">
      <img src={imgSrc} alt={imgAlt}/>
    </div>
    <div className="text-container">
      <h2>{title}</h2>
      <p>{shortDescription}</p>
      <a href={link}>Find out now →</a>
    </div>
  </article>
);
