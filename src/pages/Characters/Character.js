import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Character = () => {
  const [ characters, setcharacters] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res =>setcharacters(res.data.results));
  },[])

  console.log(characters)
  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters?.map(character => (
          <p key={character.id}><Link className='link' to={`/characters/${character.id}`}>{character.name}</Link></p>
          
        ))}
      </ul>
    </div>
  );
};

export default Character;