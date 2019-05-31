import React from "react";

export default ({nolinks}) => (
  <footer>
    <div className={nolinks ? 'dn' : "flex items-center"}>
      <a href="https://fb.me/FrontendForBeginners" title="Frontend for beginners Facebook account"  rel="noreferrer noopener" target="_blank">
        <img src="/facebook.svg" alt="Frontend for beginners Facebook account"/>
      </a>
      <a href="https://t.me/FrontendBegins" title="Frontend for beginners Telegram channel"  rel="noreferrer noopener" target="_blank">
        <img src="/telegram.svg" alt="Frontend for beginners Telegram channel"/>
      </a>
      <a href="https://twitter.com/FrontendBegins" title="Frontend for beginners Twitter account"  rel="noreferrer noopener" target="_blank">
        <img src="/twitter.svg" alt="Frontend for beginners Twitter account"/>
      </a>
      <a href="https://www.instagram.com/frontendforbeginners/" title="Frontend for beginners Instagram account"  rel="noreferrer noopener" target="_blank">
        <img src="/instagram.svg" alt="Frontend for beginners Instagram account"/>
      </a>
    </div>
    <p>© 2019 Frontend for Beginners</p>
  </footer>
);
