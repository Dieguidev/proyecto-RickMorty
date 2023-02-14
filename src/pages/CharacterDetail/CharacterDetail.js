import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {

  const { id } = useParams();

  const [ characters, setCharacters ] = useState([])
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res =>setCharacters(res.data));
  },[id])

  console.log(characters)
  return (
    <div>
      <h1>Character</h1>
      <p>Mostrando personaje con id: <b>{id}</b></p>
      <h2>{characters.name}</h2>
      <p><b>Specie: </b>{characters.species}</p>
      <p><b>Status: </b>{characters.status}</p>
      <img src={characters.image} alt="" />
    </div>
  );
};

export default CharacterDetail;