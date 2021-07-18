import React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import Head from '../components/head';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

export const query = graphql`
  query ($category: String!) {
    allMarkdownRemark(filter: { fields: { category: { eq: $category } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            tags
            date
            category
          }
          fields {
            slug
            category
          }
        }
      }
    }
  }
`;

const Category = (props) => {
  const categoryTitle =
    props.data.allMarkdownRemark.edges[0].node.frontmatter.category;

  return (
    <Layout>
      <Head />
      <div className='container-fluid'>
        <div className='d-flex'>
          <Sidebar />
          <div className='content p-5'>
            <h2>{categoryTitle}</h2>
            <ul className='m-0 p-0'>
              {props.data.allMarkdownRemark.edges.map((edge) => {
                return (
                  <li key={edge.node.id}>
                    <Link to={`/blog/${edge.node.fields.slug}`}>
                      {edge.node.frontmatter.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
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

export default Category;
