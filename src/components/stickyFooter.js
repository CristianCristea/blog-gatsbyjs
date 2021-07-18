import React from 'react';
import * as footerStyles from './footerStyles.module.scss';

const StickyFooter = () => {
  return (
    <footer className={`${footerStyles.footer} mt-auto`}>
      <p className='text-small'>All rights reserved Cristian Cristea &copy;</p>
    </footer>
  );
};

export default StickyFooter;
