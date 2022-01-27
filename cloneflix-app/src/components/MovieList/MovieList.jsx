import React, { useState } from 'react';
import './MovieList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


const MovieList = ({ title, items }) =>
{
  const navigate = useNavigate();

  const [ scrollX, setScrollX ] = useState(-400);

  const handleClick = () =>
  {
    navigate(`/mehr-info`)
  }

  const handleLeftArrow = () =>
  {
    let x = scrollX + Math.round( window.innerWidth / 2 );
    if( x > 0)
    {
      x = 0;
    }
    setScrollX( x );
  }

  const handleRightArrow = () =>
  {
    let x = scrollX - Math.round( window.innerWidth / 2 );
    let listW = items.results.length * 150; 
    if(( window.innerWidth - listW ) > x )
    {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX( x );
  }

  return (
        <div className='movieList-container'>
            <h2>{ title }</h2>

              <div 
              className="movieList-left"
              onClick={ handleLeftArrow }>
              <FontAwesomeIcon 
              icon={ faChevronLeft }
              style={{ fontSize: 30}} />
              </div>
              <div 
              className="movieList-right"
              onClick={ handleRightArrow }>
              <FontAwesomeIcon 
              icon={ faChevronRight }
              style={{ fontSize: 30}}  />
              </div>

            <div 
              className="movieList-section">
            
              <div 
                className="movieList-row"
                style={{ marginLeft: scrollX, 
                       width: items.results.length * 150 }}>
                  { items.results.length > 0 
                  && 
                  items.results.map( (item, key) =>
                  (
                      <div 
                        key={ key } 
                        className='movieList-item'>
                          <img
                          onClick={ handleClick } 
                          src={`https://image.tmdb.org/t/p/w300${ item.poster_path }`} 
                          alt={ item.original_title } 
                          />
                      </div>
                  )) }
              </div>

                
            </div>
        </div>
  );
};

export default MovieList;
