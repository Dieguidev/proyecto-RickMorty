import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Ruta Home</h1>
      <Link to='/characters' >Go to Characters</Link>
    </div>
  );
};

export default Home;