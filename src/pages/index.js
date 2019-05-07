import React from "react";
import { graphql } from "gatsby"

import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import FeaturedArticleTile from "../components/FeaturedArticleTile";
import SmallArticle from "../components/SmallArticle";

export default ({data}) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Frontend for Beginners</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Header/>
    <HeroBanner message="Hello World!"/>
    <main>
      <section>
        <FeaturedArticleTile
          title={"Ultimate guide to centering with CSS in 2018"}
          shortDescription={<span>Hello world!  It’s 2018 and still one of the most daunting CSS-related questions is the centering of the elements on a page. Recently a <a href='http://howtocenterincss.com/' rel='noopener noreferrer'>CSS centering code generator</a> topped  1036 upvotes on HackerNews. Yet, our editorial staff doesn’t think it’s a solution for everything (<a href='#'>see the review</a>). So we compiled our own guide for you to get all the practices for CSS centering in one place.</span>}
          link={"#"}
        />
      </section>
      <section className="listicles">
        <div>
          <span className="tag">Listicles</span>
          <a href="#">See all lists →</a>
        </div>
        <SmallArticle
          title="Common CSS organization approaches"
          shortDescription="Maintaining CSS can be hard, especially when the website grows. Several approaches and naming conventions make it easier."
          link="#"
          imgSrc="CSSorganization.png"
          imgAlt="javascript frameworks and libraries"
        />
      </section>
      <section className="subscribe">
      </section>
      <section className="tutorials">
        <div>
          <span className="tag">How To</span>
          <a href="#">See all tutorials →</a>
        </div>
        <SmallArticle
          title="How to create a jQuery toggle button"
          shortDescription="A simple toggle button with CSS and jQuery"
          link="#"
          imgSrc="jQuery-toggle-button.png"
          imgAlt="jQuery toggle button"
        />
        <SmallArticle
          title="Tap animation with SVG, @keyframes and jQuery"
          shortDescription="Let's build an engaging tap animation (clckable as well) with SVG, @keyframes and jQuery"
          link="#"
          imgSrc="tap-me.png"
          imgAlt="tap animation"
        />
      </section>
    </main>
    <Footer/>
  </React.Fragment>

);
export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`
