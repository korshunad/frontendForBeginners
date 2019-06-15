import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";

export default ({
  children,
  title,
  bannerMessage,
  dir,
  imagePreview,
  metaDescr,
  location,
  nolinks
}) => {
  const { site } = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterAccount
          imagePreview
          url
        }
      }
    }
  `
  );
  const siteData = site.siteMetadata;
  const imagePreviewLink = imagePreview ? siteData.url + imagePreview :  siteData.imagePreview;
  const metaTitle = `${title} • ${siteData.title}`;
  const metaDescription = metaDescr ? metaDescr : siteData.description;

  return (
    <React.Fragment>
      <Helmet>
      >
        <meta charSet="utf-8" />
        <title>{title != siteData.title ? metaTitle : siteData.title}</title>
        <meta http-equiv="X-UA-Compatible" content="IE=9"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:type" content="website"/>
        <link rel="canonical" href={location ? location : siteData.url} />
        <meta property="og:site_name" content={siteData.title}/>
        <meta name="twitter:site" content={siteData.twitterAccount}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta itemprop="image" content={imagePreviewLink}/>
        <meta property="og:image" content={imagePreviewLink}/>
        <meta name="twitter:image" content={imagePreviewLink}/>
        <meta property="og:title" content={metaTitle}/>
        <meta itemprop="name" content={metaTitle}/>
        <meta name="twitter:title" content={metaTitle}/>
        <meta property="og:description" content={metaDescription}/>
        <meta name="twitter:description" content={metaDescription}/>
        <meta name="description" content={metaDescription}/>
        <meta itemprop="description" content={metaDescription}/>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>

      </Helmet>
      <Header/>
      <HeroBanner
        message={bannerMessage}
        dir={dir}
      />
      {children}
      <Footer nolinks={nolinks}/>
    </React.Fragment>
  );
};
