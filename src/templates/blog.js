import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/head';
import Layout from '../components/layout';

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;
const Blog = (props) => {
  const title = props.data.markdownRemark.frontmatter.title;

  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  );
};

export default Blog;
