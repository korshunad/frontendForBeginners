import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";

export default ({ children, title, bannerMessage, dir, imagePreview, metaDescr, location }) => (
  <React.Fragment>
  <Helmet>
  <meta charSet="utf-8" />
  <title>{title}</title>
  <link rel="canonical" href={location ? location : "https://highstart.dev"} />
  <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
  <meta http-equiv="X-UA-Compatible" content="IE=9"/>
  <meta property="og:site_name" content="Frontend for Beginners"/>
  <meta property="og:type" content="website"/>
  <meta name="twitter:site" content="@FrontendBegins"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta itemprop="image" content={imagePreview ? 'https://highstart.dev' + imagePreview :  'https://highstart.dev/general_preview.png'}/>
  <meta property="og:image" content={imagePreview ? 'https://highstart.dev' + imagePreview :  'https://highstart.dev/general_preview.png'}/>
  <meta property="og:title" content={`${title} • Frontend for Beginners`}/>
  <meta itemprop="name" content={`${title} • Frontend for Beginners`}/>
  <meta name="twitter:title" content={`${title} • Frontend for Beginners`}/>
  <meta property="og:description" content={metaDescr ? metaDescr : 'Frontend for Beginner is a blog for aspiring frontend developers with Javascript, HTML and CSS tutorials and work processes overviews'}/>
  <meta name="twitter:description" content={metaDescr ? metaDescr : 'Frontend for Beginner is a blog for aspiring frontend developers with Javascript, HTML and CSS tutorials and work processes overviews'}/>
  <meta name="description" content={metaDescr ? metaDescr : 'Frontend for Beginner is a blog for aspiring frontend developers with Javascript, HTML and CSS tutorials and work processes overviews'}/>
  <meta itemprop="description" content={metaDescr ? metaDescr : 'Frontend for Beginner is a blog for aspiring frontend developers with Javascript, HTML and CSS tutorials and work processes overviews'}/>

  </Helmet>
  <Header/>
  <HeroBanner message={bannerMessage} dir={dir}/>
  {children}
    <Footer/>
  </React.Fragment>
)
