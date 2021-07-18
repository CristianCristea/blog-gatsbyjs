import React from 'react';
import Header from './header';
import StickyFooter from './stickyFooter';

const LayoutIndex = (props) => {
  return (
    <main className='d-flex flex-column' style={{ height: '100vh' }}>
      <div className='flex-shrink-0'>
        <Header />
        {props.children}
      </div>
      <StickyFooter />
    </main>
  );
};

export default LayoutIndex;
