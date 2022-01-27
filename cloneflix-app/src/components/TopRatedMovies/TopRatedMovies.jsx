import React from 'react';
import './TopRatedMovies.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons';

const TopRatedMovies = ({ item }) =>
{

    let firstDate = new Date( item.first_air_date );

    let genres = [];
    for( let i in item.genres )
    {
        genres.push( item.genres[i].name );
    }

    let description = item.overview;
    if( description.length > 150 )
    {
        description = description.substring(0, 150) + '...';
    }
  
    return (
    <section 
    className="top-rated" 
    style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url( https://image.tmdb.org/t/p/original${ item.backdrop_path } )`
        }}>
            <div className="top-rated-y">

                <div className="top-rated-x">

                    <div className="top-rated-name"> { item.title || item.name || item.original_name } </div>

                    <div className="top-rated-info">
                        <div className="top-rated-points">{ item.vote_average } points </div>
                        <div className="top-rated-year"> { firstDate.getFullYear() } </div>
                        <div className="top-rated-seasons">{ item.number_of_seasons } season{ item.number_of_seasons !== 1 ? 's' : '' } </div>
                    </div>
                        
                        <div className="top-rated-description">{ description }</div>
                        
                        <div className="top-rated-buttons">
                            
                            <a 
                            href={`/mehr-info/${ item.id }`} 
                            className='top-rated-mehr-button'>
                                <FontAwesomeIcon icon={ faEye } />
                                 Mehr Info </a>
                            <a 

                            href={'/show-list'} 
                            className='top-rated-liste-button'

                            > 
                             <FontAwesomeIcon icon={ faPlus } />
                                 Meine Liste </a>
                        </div>

                        <div className="top-rated-genres"> <b>Genres: </b> { genres.join(', ') }</div>
                </div>
            </div>

    </section>
  );
};

export default TopRatedMovies;
