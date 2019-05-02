import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import FeaturedArticleTile from "../components/FeaturedArticleTile";
import SmallArticle from "../components/SmallArticle";

export default () => (
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
      <section class="listicles">
        <div>
          <span class="tag">Listicles</span>
          <a href="#">See all lists →</a>
        </div>
        <SmallArticle
          title="Top Javascript Frameworks 2019"
          shortDescription="JavaScript community is known to be one of the most dynamic ones. Another day - another new framework. Has Vue.js surpassed React.js already? What to expect from the new version of Angular.js? Or have the new frameworks already emerged to take them all down?"
          link="#"
          imgSrc="frameworks.png"
          imgAlt="javascript frameworks and libraries"
        />
        <SmallArticle
          title="Top Javascript Frameworks 2019"
          shortDescription="JavaScript community is known to be one of the most dynamic ones. Another day - another new framework. Has Vue.js surpassed React.js already? What to expect from the new version of Angular.js? Or have the new frameworks already emerged to take them all down?"
          link="#"
          imgSrc="frameworks.png"
          imgAlt="javascript frameworks and libraries"
        />
      </section>
      <section className="subscribe">
      </section>
      <section class="tutorials">
        <div>
          <span class="tag">How To</span>
          <a href="#">See all tutorials →</a>
        </div>
        <SmallArticle
          title="Top Javascript Frameworks 2019"
          shortDescription="JavaScript community is known to be one of the most dynamic ones. Another day - another new framework. Has Vue.js surpassed React.js already? What to expect from the new version of Angular.js? Or have the new frameworks already emerged to take them all down?"
          link="#"
          imgSrc="frameworks.png"
          imgAlt="javascript frameworks and libraries"
        />
        <SmallArticle
          title="Top Javascript Frameworks 2019"
          shortDescription="JavaScript community is known to be one of the most dynamic ones. Another day - another new framework. Has Vue.js surpassed React.js already? What to expect from the new version of Angular.js? Or have the new frameworks already emerged to take them all down?"
          link="#"
          imgSrc="frameworks.png"
          imgAlt="javascript frameworks and libraries"
        />
        <SmallArticle
          title="Top Javascript Frameworks 2019"
          shortDescription="JavaScript community is known to be one of the most dynamic ones. Another day - another new framework. Has Vue.js surpassed React.js already? What to expect from the new version of Angular.js? Or have the new frameworks already emerged to take them all down?"
          link="#"
          imgSrc="frameworks.png"
          imgAlt="javascript frameworks and libraries"
        />
      </section>
    </main>
    <Footer/>
  </React.Fragment>

);
