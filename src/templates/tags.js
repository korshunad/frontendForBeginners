import React from "react"
import PropTypes from "prop-types"
import SmallArticle from "../components/SmallArticle";

// Components
import {graphql } from "gatsby"
import Layout from "../components/Layout"


const TagsPage = ({
  location,
  data: {
    allMarkdownRemark: { group, edges },
    site: {
      siteMetadata: { title },
    },
  }
}) => {
  const currentTag = group.filter(tag => location.pathname.indexOf(tag.fieldValue) !== -1);
  const taggedArticles = edges.filter(node => node.node.frontmatter.tags.indexOf(currentTag));
  return (
    <Layout title={currentTag[0].fieldValue} dir="tags" bannerMessage={currentTag[0].fieldValue}>
     <main className="pa5-l pa4-m pa3 flex flex-row-reverse-l flex-column items-start justify-start relative">
      <div className="flex flex-row-ns flex-column w-100 flex-wrap">
        {taggedArticles.map(({ node }) => (
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
    </main>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
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
