import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './jumbotron.scss';

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          job
        }
      }
    }
  `);

  return (
    <div className='jumbotron'>
      <div className='container'>
        <h1>{data.site.siteMetadata.author}</h1>
        <span className='separator'></span>
        <h2>{data.site.siteMetadata.job}</h2>
      </div>
    </div>
  );
};

export default Jumbotron;
