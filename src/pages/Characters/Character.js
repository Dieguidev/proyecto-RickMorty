import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './character.css'

const Character = () => {
  const [characters, setcharacters] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => setcharacters(res.data.results));
  }, [])

  console.log(characters)
  return (
    <div>
      <h1>Characters</h1>
      <div>
        {characters?.map(character => (
          <Link className='link' to={`/characters/${character.id}`}>
            <p className='targetLink' key={character.id}>{character.name}</p>
            <img className='img-characters' src={character.image} alt="" />
          </Link>

        ))}
      </div>
    </div>
  );
};

export default Character;