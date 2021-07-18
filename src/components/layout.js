import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  return (
    <main>
      <Header />
      <section className='search'>
        <input type='text' value='SEarch' className='w-100' />
      </section>
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;
