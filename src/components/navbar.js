import React from 'react';
import { Link } from 'gatsby';
import { FaGithub, FaRegEnvelope } from 'react-icons/fa';
import './navbarStyles.scss';

const Navbar = () => {
  const toggleNav = (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle('open');
    e.currentTarget.nextElementSibling.classList.toggle('show-block');
  };

  return (
    <nav className='main-nav'>
      <div className='container'>
        <div id='nav-icon' onClick={(e) => toggleNav(e)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id='dropdown' className='dropdown'>
          <ul className='menu'>
            <li>
              <Link to='/'>about</Link>
            </li>
            <li>
              <Link to='/blog'>docs</Link>
            </li>
          </ul>

          <ul className='social-icons'>
            <li>
              <a href='mailto:cristiancristea.1987@gmail.com'>
                <FaRegEnvelope />
              </a>
            </li>
            <li>
              <a href='https://github.com/CristianCristea'>
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
