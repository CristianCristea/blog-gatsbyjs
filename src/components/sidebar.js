import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as sidebarStyles from './sidebarStyle.module.scss';

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              category
            }
          }
        }
      }
    }
  `);

  const sidebarLinks = [
    ...new Set(
      data.allMarkdownRemark.edges.map((edge) => edge.node.fields.category)
    ),
  ];

  return (
    <section className={`pt-5 ${sidebarStyles.sidebar}`}>
      <ul className='m-0 p-0'>
        {sidebarLinks.map((sidebarLink) => {
          return (
            <li key={sidebarLink} className='mt-2'>
              <Link
                to={`/category/${sidebarLink}`}
                className={sidebarStyles.link}
              >
                {sidebarLink}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
