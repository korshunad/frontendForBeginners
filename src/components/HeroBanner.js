import React from "react";

export default ({message, dir}) => (
  <div className="hero-banner">
    <span className="code-left">{dir ? dir : 'frontend-beginner'}:~ </span>
    <span className="code-right">{message}</span>
  </div>
);
