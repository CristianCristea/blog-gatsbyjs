import React from 'react';
import * as footerStyles from './footerStyles.module.scss';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p className='text-small'>All rights reserved Cristian Cristea &copy;</p>
    </footer>
  );
};

export default Footer;
