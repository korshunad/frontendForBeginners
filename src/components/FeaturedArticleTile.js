import React from "react";
import { Link } from "gatsby";

export default ({title, shortDescription, link}) => (
  <article>
    <span className="tag">Featured</span>
    <h1>{title}</h1>
    <p>{shortDescription}</p>
    <Link title={title} to={link}>Read more →</Link>
  </article>
);
