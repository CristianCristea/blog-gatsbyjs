import React from 'react';
import { graphql, navigate } from 'gatsby';
import Head from '../components/head';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

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
      <div className='container-fluid'>
        <div className='d-flex'>
          <Sidebar />
          <div className='content p-5'>
            <div
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html,
              }}
            />
            <button
              className='btn btn-primary text-white'
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
