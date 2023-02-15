import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Ruta Home</h2>
      <Link to='/characters' >Go to Characters</Link>
    </div>
  );
};

export default Home;