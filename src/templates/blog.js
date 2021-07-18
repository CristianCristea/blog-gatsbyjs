import React from 'react';
import { graphql, navigate } from 'gatsby';
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
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>Sidebar</div>
          <div className='col-9'>
            <div
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html,
              }}
            />
          </div>
        </div>
        <button
          className='btn btn-primary text-white'
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </Layout>
  );
};

export default Blog;
