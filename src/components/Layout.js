import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";

export default ({ children, title, bannerMessage, dir }) => (
  <React.Fragment>
  <Helmet>
  <meta charSet="utf-8" />
  <title>{title}</title>
  <link rel="canonical" href="https://highstart.dev" />
  <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
  </Helmet>
  <Header/>
  <HeroBanner message={bannerMessage} dir={dir}/>
  {children}
    <Footer/>
  </React.Fragment>
)
