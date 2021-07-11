import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import * as headerStyles from './header.module.scss';
import Navbar from './navbar';

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //         author
  //         job
  //       }
  //     }
  //   }
  // `);

  return (
    <header>
      <Navbar />
    </header>
  );
};

export default Header;
