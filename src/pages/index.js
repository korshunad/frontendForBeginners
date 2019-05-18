import React from "react";
import { Link, graphql } from "gatsby"

import Layout from '../components/Layout';
import FeaturedArticleTile from "../components/FeaturedArticleTile";
import SmallArticle from "../components/SmallArticle";

const Featured = ({data}) => {
  const featured = data.allMarkdownRemark.edges.filter(node => node.node.frontmatter.category === "featured");
  if (featured.length !== 0) {
    return featured.map(({ node }) => (
      <FeaturedArticleTile
        key={node.id}
        title={node.frontmatter.title}
        shortDescription={node.frontmatter.summary || node.excerpt}
        link={node.fields.slug}
      />
    ));
  } else {
    return (
      <FeaturedArticleTile
        title="Welcome to the blog about frontend development!"
        shortDescription="Modern frontend development is a very dynamic and turbulent sphere. Lots of new frameworks, tools, approaches appear every day. And information about them is often chaotic, unstructured and sometimes incomplete. Here you will find reviews of tools and workflows, tutorials and guides. We focus onto helping you to start and improve your day-to-day frontend development routines and to write clear, maintainable JS code, CSS and HTML."
        link="/about/"
      />
    );
  }
}

const Articles = ({articles}) => {
  return (
    <section className={`listicles ${articles.length > 1 ? 'w-100-l pt4' : 'w-40-l'} w-100 ${articles.length === 0 ? 'dn': 'db'}`}>
      <div>
      <span className="tag">Articles</span>
      <Link to="/articles/">See all →</Link>
      </div>
      <div className="flex flex-row-ns flex-column w-100 flex-wrap">
        {articles.map(({ node }) => (
          <SmallArticle
            key={node.id}
            title={node.frontmatter.title}
            shortDescription={node.frontmatter.summary || node.excerpt}
            link={node.fields.slug}
            imgSrc={node.frontmatter.imgSrc}
            imgAlt={node.frontmatter.imgAlt}
            limitWidth={articles.length > 1}
          />
        ))}
      </div>
    </section>
  );
}

const Tutorials = ({tutorials}) => {
  return (
    <section className={`tutorials ${tutorials.length > 1 ? 'w-100-l' : 'w-50-l'} w-100 ${tutorials.length === 0 ? 'dn' : 'db'}`}>
      <div>
      <span className="tag">Tutorials</span>
      <Link to="/tutorials/">See all tutorials →</Link>
      </div>
      <div className="flex flex-row-ns flex-column w-100 flex-wrap">
        {tutorials.map(({ node }) => (
          <SmallArticle
            key={node.id}
            title={node.frontmatter.title}
            shortDescription={node.frontmatter.summary || node.excerpt}
            link={node.fields.slug}
            imgSrc={""}
            imgAlt={""}
          />
        ))}
      </div>
    </section>
  );
}

export default ({data}) => {
  const articles = data.allMarkdownRemark.edges.filter(node => node.node.frontmatter.category === "articles");
  const tutorials = data.allMarkdownRemark.edges.filter(node => node.node.frontmatter.category === "tutorials");
  return (
    <Layout title="Frontend for Beginners" bannerMessage="Hello World!">
    <main className="pa5-l pa4-m pa3 flex flex-row flex-wrap items-start justify-start">
    <section className={`${ articles.length > 1 ? 'w-70-ns' : 'w-60-ns' } featured w-100 pr5`}>
      <Featured data={data}/>
    </section>
    <Articles articles={articles}/>
    <Tutorials tutorials={tutorials}/>
    <section className="subscribe">
    </section>
      </main>
    </Layout>

  );
}

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          summary
          category
          tags
          imgSrc
          imgAlt
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`
