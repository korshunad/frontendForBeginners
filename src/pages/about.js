import React from "react";
import Layout from '../components/Layout';

const authors = [
  {
    name: 'Ana',
    bio: 'After a long journey in cultural studies and management science, Ana realized that code speaks louder than words. Since that time her major areas of focus are Vim, React, and Tachyons. She likes to write overviews of approaches to frontend development and cats.',
    imgSrc:'/ana.png'
  }
];

const Author = ({imgSrc, name, bio}) => (
  <div className="pb6-l pb4 mw50-l">
    <div className="flex flex-column items-center fl mr4 mb2">
      <h2>{name}</h2>
      <div className="br-pill " style={{backgroundImage: `url(${imgSrc})`, backgroundSize: '100% 100%', backgroundPosition: 'center', height: '7rem', width: '7rem'}}></div>
    </div>
    <p>
      {bio}
    </p>
  </div>
);

export default ({data}) => (
  <Layout title="about us" bannerMessage="about">
  <main className="pa5-l pa4-m pa3 flex flex-row flex-wrap items-start justify-start mw9 center">
  <section className="w-100">
    <div>
    <p className="mw7 fl">
Modern frontend development is a very dynamic and turbulent sphere. Lots of new frameworks, tools, approaches appear every day. And information about them is often chaotic, unstructured and sometimes incomplete. Here you will find reviews of tools and workflows, tutorials and guides. We focus onto helping you to start and improve your day-to-day frontend development routines and to write clear, maintainable JS code, CSS and HTML.
    </p>
    <p className="mw7 fr">
    How to do things while working as a frontend
    developer? How to structure your stylesheets and code so that they remain
    maintainable? How to properly and on-time use all the tools? What are
    essential elements of daily created web components, like form validations,
    accessibility, cross-browser testing, etc? We structure this information into overviews and tutorials, categorized by level and main topic like CSS or Javascript.
    </p>
    </div>
    <div className="cf">
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
