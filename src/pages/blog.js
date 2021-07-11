import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
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

  return (
    <Layout>
      <Head title='Blog' />
      <h1>Blog</h1>
      <ol>
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
      </ol>
    </Layout>
  );
};

export default BlogPage;
