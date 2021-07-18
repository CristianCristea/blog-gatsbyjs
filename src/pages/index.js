import React from 'react';
import LayoutIndex from '../components/layoutIndex';
import Head from '../components/head';
import Hero from '../components/hero';

import '../styles/index.scss';
import * as indexStyles from './indexStyles.module.scss';

// markup
const IndexPage = () => {
  return (
    <LayoutIndex>
      <Head title='Cristian Cristea' />
      <Hero />

      <div className={`container ${indexStyles.content}`}>
        <div className='row'>
          <div className='col'>
            <h4 className='subheading mt-3'>Ruby, Ruby on Rails, PostgreSQL</h4>
            <h4 className='subheading mt-3'>JavaScript, React.js, Gatsby.js</h4>
            <h4 className='subheading mt-3'>CSS3, Sass</h4>
          </div>
        </div>
      </div>
    </LayoutIndex>
  );
};

export default IndexPage;
