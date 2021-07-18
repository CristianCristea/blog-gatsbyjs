import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import Sidebar from '../components/sidebar';
import * as blogStyles from './blogStyles.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              category
              tags
              title
              date
            }
            html
            excerpt
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const sidebarLinks = [
    ...new Set(
      data.allMarkdownRemark.edges.map((edge) =>
        edge.node.frontmatter.category.toLowerCase()
      )
    ),
  ];

  return (
    <Layout>
      <Head title='Blog' />
      <div className='container-fluid'>
        <div className='d-flex'>
          <Sidebar />
          <div className='content p-5'>
            <ul className='m-0 p-0'>
              {data.allMarkdownRemark.edges.map((edge) => {
                return (
                  <li key={edge.node.id}>
                    <Link
                      to={`/blog/${edge.node.fields.slug}`}
                      className='mb-3 d-inline-block'
                    >
                      {edge.node.frontmatter.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
