import React from "react";
import Layout from '../components/Layout';
import {authors, Author} from '../components/Author';

export default ({data}) => (
  <Layout title="about us" bannerMessage="about">
  <main className="pa5-l pa4-m pa3 flex flex-row flex-wrap items-start justify-start mw9 center">
  <section className="w-100">
    <div className="flex flex-row-l flex-column items-start justify-center">
    <p className="mw7 tj pr3-l">
Modern frontend development is a very dynamic and turbulent sphere. Lots of new frameworks, tools, approaches appear every day. And information about them is often chaotic, unstructured and sometimes incomplete. Here you will find reviews of tools and workflows, tutorials and guides. We focus onto helping you to start and improve your day-to-day frontend development routines and to write clear, maintainable JS code, CSS and HTML.
    </p>
    <p className="mw7 tj pl3-l">
    How to do things while working as a frontend
    developer? How to structure your stylesheets and code so that they remain
    maintainable? How to properly and on-time use all the tools? What are
    essential elements of daily created web components, like form validations,
    accessibility, cross-browser testing, etc? We structure this information into overviews and tutorials, categorized by level and main topic like CSS or Javascript.
    </p>
    </div>
    <h1>Who are we</h1>
    <div className="flex flex-row justify-between flex-wrap">
    {authors.map((author, i) => (
      <Author
        key={i}
        imgSrc={author.imgSrc}
        name={author.name}
        bio={author.bio}
      />
    ))}
    </div>
  </section>
    </main>
  </Layout>

);
