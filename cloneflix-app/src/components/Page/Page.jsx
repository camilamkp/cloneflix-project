import React, { useEffect, useState } from 'react';
import './Page.scss';
import TmdbData from '../../TmdbData';
import { Footer, Header, MovieList, TopRatedMovies } from '../../components';

const Page = () =>
{

  const [ movieList, setMovieList ] = useState([]);
  const [ topRatedData, setTopRatedData ] = useState(null);

  const [ blackHeader, setBlackHeader ] = useState(false);

  useEffect(() =>
  {
    const loadAll = async () =>
    {
        let list = await TmdbData.getHomeList();
        setMovieList( list );

        let originals = list.filter( i => i.slug === 'originals' );
        let randomMovies = Math.floor( Math.random() * ( originals[0].items.results.length -1 ));
        let randomMovie = originals[0].items.results[ randomMovies ];
        let randomMovieInfo = await TmdbData.getMovieInfo( randomMovie.id, 'tv' );

        setTopRatedData( randomMovieInfo );
    }
    loadAll();

  }, []);

  useEffect(() =>
  {
      const scrollListener = () =>
      {
        if( window.scrollY > 10 ){ setBlackHeader(true) }
        else { setBlackHeader(false) }
      }

      window.addEventListener('scroll', scrollListener);
      return () =>
      {
        window.removeEventListener('scroll', scrollListener)
      }
  }, []);
  
  
  return (
    <div className="container">

        <Header black={ blackHeader }/>

          { topRatedData &&
            <TopRatedMovies 
            item={ topRatedData }
            />
          }

        <section className="lists">
          {
            movieList.map((item, key) =>
            (
              <MovieList 
              key={ key } 
              title={ item.title }
              items={ item.items } />
            ))
          }
        </section>
        <Footer />

         
        { movieList.length  <= 0 &&
          <div className="loading">
            <img src="https://64.media.tumblr.com/5bf8ba688ff3553b900a40dad2bbc1e0/tumblr_inline_pl93uu9rT41t9ij1a_540.gif" alt="loading" />
          </div>
        }
    </div>
  );

};

export default Page;
