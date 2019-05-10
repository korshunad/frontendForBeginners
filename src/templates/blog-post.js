import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"

const Tag = ({tag}) => (
  <Link to={`/tags/${tag}`} className="article-tag pv2 ph3 dim br2 ma2 w-auto">{tag}</Link>
)

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post);
  return (
    <Layout title={post.frontmatter.title} dir={post.frontmatter.category} bannerMessage={post.frontmatter.title}>
      <main className="pa5-l pa4-m pa3 flex flex-row-l flex-column items-start justify-start relative">
        <div className="flex flex-column w-two-thirds-l w-100" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="sticky-l w-third-l w-100 pa4-l pa3 flex flex-column justify-start h-100 items-center">
          <div className="flex flex-column-l flex-row">
            {post.frontmatter.tags.map((tag, i) => (
              <Tag key={i} tag={tag}/>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      category
      tags
    }
  }
}
`
