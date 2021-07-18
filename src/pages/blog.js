import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import Sidebar from '../components/sidebar';

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
                    <Link to={`/blog/${edge.node.fields.slug}`}>
                      <h2>{edge.node.frontmatter.title}</h2>
                    </Link>
                    <p>{edge.node.frontmatter.date}</p>
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
