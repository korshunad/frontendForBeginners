import React from "react";
import {Link} from "gatsby";

export default ({title, shortDescription, link, imgSrc, imgAlt, limitWidth}) => (
  <article className={`${limitWidth ? 'w-45-l w-100' : 'w-100'} card mr3-ns mt3-ns`}>
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
