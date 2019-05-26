import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import {Author, authors} from '../components/Author';

const Tag = ({tag}) => (
  <Link to={`/tags/${tag}`} className="article-tag pv2 ph3 dim br2 ma2 w-auto">{tag}</Link>
);

export default ({ data, location }) => {
  const post = data.markdownRemark;
  const author = authors.filter(author => author.name === post.frontmatter.author)[0];
  return (
    <Layout
      title={post.frontmatter.title}
      dir={post.frontmatter.category}
      bannerMessage={post.frontmatter.title}
      imagePreview={post.frontmatter.imagePreview}
      metaDescr={post.frontmatter.metaDescr}
      location={location.href}
    >
      <main className="pa5-l pa4-m pa3 flex flex-row-l flex-column items-start justify-start relative">
        <div className="flex flex-column w-two-thirds-l w-100">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <br/>
          <br/>
          <div className="flex flex-column w-100">
            <Author
              small
              imgSrc={author.imgSrc}
              name={author.name}
              bio={author.bio}
            />

          </div>
        </div>
        <div className="sticky-l w-third-l w-100 pa4-l pa3 flex flex-column justify-start h-100 items-center">
          <div className="flex flex-column-l flex-row">
            {post.frontmatter.tags.map((tag, i) => (
              <Tag key={i} tag={tag}/>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      category
      tags
      author
      imagePreview
      metaDescr
    }
  }
}
`;
