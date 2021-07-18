import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './hero.scss';

const Hero = () => {
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
    <div className='hero'>
      <div className='container'>
        <h1>{data.site.siteMetadata.author}</h1>
        <span className='separator'></span>
        <h2>{data.site.siteMetadata.job}</h2>
      </div>
    </div>
  );
};

export default Hero;
