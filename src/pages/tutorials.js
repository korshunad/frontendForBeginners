import React from "react";
import {graphql } from "gatsby"

import Layout from '../components/Layout';
import SmallArticle from "../components/SmallArticle";

const Tutorials = ({data}) => {
  const tutorials = data.allMarkdownRemark.edges.filter(node => node.node.frontmatter.category === "how-to");
  if (tutorials.length > 0) {
    return (
      <section className={`listicles ${tutorials.length > 1 ? 'w-100-l' : 'w-40-l'} w-100 ${tutorials.length === 0 ? 'dn': 'db'}`}>
        <div className="flex flex-row-ns flex-column w-100 flex-wrap">
          {tutorials.map(({ node }) => (
            <SmallArticle
              key={node.id}
              title={node.frontmatter.title}
              shortDescription={node.frontmatter.summary || node.excerpt}
              link={node.fields.slug}
              imgSrc={node.frontmatter.imgSrc}
              imgAlt={node.frontmatter.imgAlt}
            />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <div className="flex flex-column lh-copy">
        We are writing articles for this page right now! 😊
 Stay tuned and follow us on social networks &darr;       </div>
    );
  }
}

export default ({data}) => (
  <Layout title="Frontend for Beginners" bannerMessage="how to">
  <main className="pa5-l pa4-m pa3 flex flex-row flex-wrap items-center justify-center" style={{minHeight: "10px"}}>
  <Tutorials data={data}/>
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

