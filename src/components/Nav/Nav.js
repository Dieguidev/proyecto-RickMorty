import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
  return (
    <div className='navbar'>
      
        <p><Link className='link link-text' to='/'>Home</Link></p>
        <p><Link className='link link-text' to='/characters'>Characters</Link></p>
        <p><Link className='link link-text' to='/about'>About</Link></p>
        <p><Link className='link link-text' to='/contact'>Contact</Link></p>
      
    </div>
  );
};

export default Nav;