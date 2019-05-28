import React from "react";
import Layout from '../components/Layout';
import {authors, Author} from '../components/Author';

export default ({data}) => (
  <Layout title="contact us" bannerMessage="contact" nolinks>
    <main className="pa5-l pa4-m pa3 flex flex-row flex-wrap items-start justify-between mw9 center post-social">
      <h1 className="w-100">Contact us</h1>
      <section className="w-50-l w-100 contact flex flex-column items-start mw6 mr3-l">
        <h2>Follow us on Facebook</h2>
        <a href="https://fb.me/FrontendForBeginners" title="Frontend for beginners Facebook account"  rel="noreferrer noopener" target="_blank" className="flex flex-row items-center pointer link ph3 pv1 w-100 justify-center">
          <img src="/facebook-noframe.svg" alt="Frontend for beginners Facebook account" className="w2 h-auto"/>
          <span className="pl2">
  Frontend for Beginners on Facebook
          </span>
        </a>
      </section>
      <section className="w-50-l w-100 contact flex flex-column items-start mw6">
        <h2>Follow us on Twitter</h2>
        <a href="https://twitter.com/FrontendBegins" title="Frontend for beginners Twitter account nolink"  rel="noreferrer noopener" target="_blank" className="flex flex-row items-center pointer link ph3 pv1 w-100 justify-center">
          <img src="/twitter-noframe.svg" alt="Frontend for beginners Twitter account" className="w2 h-auto"/>
          <span className="pl2">
  Frontend Begins on Twitter
          </span>
        </a>
      </section>
      <section className="w-50-l w-100 contact flex flex-column items-start mw6 mr3-l">
        <h2>Follow us on Instagram</h2>
        <a href="https://www.instagram.com/frontendforbeginners/" title="Frontend for beginners Instagram account"  rel="noreferrer noopener" target="_blank" className="flex flex-row items-center pointer link ph3 pv1 w-100 justify-center">
          <img src="/instagram-noframe.svg" alt="Frontend for beginners Instagram account" className="w2 h-auto"/>
          <span className="pl2">
  frontendforbeginners on Instagram
          </span>
        </a>
      </section>
      <section className="w-50-l w-100 contact flex flex-column items-start mw6">
        <h2>Join Telegram and follow our channel</h2>
        <a href="https://t.me/FrontendBegins" title="Frontend for beginners Telegram channel"  rel="noreferrer noopener" target="_blank" className="flex flex-row items-center pointer link w-100 ph3 pv1 justify-center">
          <img src="/telegram-noframe.svg" alt="Frontend for beginners Telegram channel" className="w2 h-auto"/>
          <span className="pl2">
  FrontendBegins on Telegram
          </span>
        </a>
      </section>
    </main>
  </Layout>
);
