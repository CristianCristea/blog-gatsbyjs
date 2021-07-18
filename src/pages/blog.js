import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useFlexSearch } from 'react-use-flexsearch';

import Layout from '../components/layout';
import Head from '../components/head';
import Sidebar from '../components/sidebar';
import Search from '../components/search';
import * as blogStyles from './blogStyles.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              category
              tags
              title
              date
            }
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

  // const {
  //   localSearchPages: { index, store },
  //   allMarkdownRemark: { nodes },
  // } = data;

  const nodes = data.allMarkdownRemark.edges;
  // console.log(data);
  const unFlattenResults = (results) =>
    results.map((post) => {
      const { date, slug, tags, title, id } = post;
      return { slug, frontmatter: { title, date, tags } };
    });

  const index = data.localSearchPages.index;
  const store = data.localSearchPages.store;
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const results = useFlexSearch(searchQuery, index, store);
  const posts = searchQuery ? results : nodes;
  console.log(results);
  return (
    <Layout>
      <Head title='Blog' />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className='container-fluid'>
        <div className='d-flex'>
          <Sidebar />
          <div className='content p-5'>
            <ul className='m-0 p-0'>
              {/* {data.allMarkdownRemark.edges.map((edge) => {
                return (
                  <li key={edge.node.id}>
                    <Link
                      to={`/blog/${edge.node.fields.slug}`}
                      className={`${blogStyles.link} mb-3 d-inline-block`}
                    >
                      {edge.node.frontmatter.title}
                    </Link>
                  </li>
                );
              })} */}
              {/* TODO: Refactor to post components, display all posts if search is empty?, add category and tags to search  */}
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className={`${blogStyles.link} mb-3 d-inline-block`}
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
