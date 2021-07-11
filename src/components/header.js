import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as headerStyles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.author}</p>
      <nav>
        <ul>
          <li className={headerStyles.link}>
            <Link to='/' className={headerStyles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
