import React from 'react';
import './scss/NotFound.scss'

import { Header } from "../components";
import { useNavigate } from "react-router-dom";

const NotFound = () =>
{
  const navigate = useNavigate();

  return (
  <div className='not-found'>

    <Header />

    <h1>Ooops, something went wrong.</h1>

    <img className='icon-netflix' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/768px-Netflix-new-icon.png" alt="Netflix Icon" />
    
    <button className='zurueck-button'
    onClick={ () => navigate(-1) }>Zurück zur vorherigen Seite</button>

  </div>
);
};

export default NotFound;
