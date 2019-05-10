import React from "react";
import {Link} from "gatsby";

export default ({title, shortDescription, link, imgSrc, imgAlt}) => (
  <article className="card w-100 mr3-ns mt3-ns">
    {imgSrc &&
    <div className="image-container">
      <img src={imgSrc} alt={imgAlt}/>
    </div>
    }
    <div className="text-container">
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html:shortDescription }}/>
      <Link to={link} title={title}>Find out now →</Link>
    </div>
  </article>
);
