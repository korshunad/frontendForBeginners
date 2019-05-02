import React from "react";

export default () => (
  <header>
    <img className="logo" src="logo.svg" alt="Frontend for Beginners logo"/>
    <nav>
      <ul id="menu-links">
        <li>
          <a href="howto.html">
            How to
          </a>
        </li>
        <li>
          <a href="listicles.html">
            Listicles
          </a>
        </li>
        <li>
          <a href="about.html">
            About
          </a>
        </li>
        <li>
          <a href="contact.html">
            Contact
          </a>
        </li>
        <span id="close-menu">×</span>
      </ul>
      <div id="burger-menu">
      menu
      </div>
    </nav>
  </header>
)
