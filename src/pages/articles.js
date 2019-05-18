import React from "react";
import {graphql } from "gatsby"

import Layout from '../components/Layout';
import SmallArticle from "../components/SmallArticle";

const Articles = ({data}) => {
  const articles = data.allMarkdownRemark.edges.filter(node => node.node.frontmatter.category === "articles");
  return (
    <section className={`listicles ${articles.length > 1 ? 'w-100-l' : 'w-40-l'} w-100 ${articles.length === 0 ? 'dn': 'db'}`}>
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

export default ({data}) => (
  <Layout title="Frontend for Beginners" bannerMessage="articles">
  <main className="pa5-l pa4-m pa3 flex flex-row flex-wrap items-start justify-start">
  <Articles data={data}/>
    </main>
  </Layout>

);


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

