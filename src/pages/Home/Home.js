import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
  return (
    <div>
      <h2>Welcome to my page</h2>
      <Link className='link' to='/characters' ><button className='linkToCharacters'>Go to Characters</button></Link>
    </div>
  );
};

export default Home;