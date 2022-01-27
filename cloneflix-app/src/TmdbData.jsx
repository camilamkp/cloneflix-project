import React from 'react';

const API_KEY = 'f4835dfb791fcca4b0f783364716d368';
const API_BASIS = 'https://api.themoviedb.org/3';

const basicFetch = async ( endpoint ) =>
{
    const req = await fetch(`${ API_BASIS }${ endpoint }`);
    const json = await req.json();
    return json;
}

export default { getHomeList: async () =>
{
        return [
            { 
                        slug: 'originals',
                        title: 'Nur auf Cloneflix',
                        items: await basicFetch(`/discover/tv?with_network=213&language=de&api_key=${ API_KEY }`)
            },
            {
                slug: 'trending',
                title: 'Trending',
                items: await basicFetch(`/trending/all/week?language=de&api_key=${ API_KEY }`)
            },
            {
                slug: 'drama',
                title: 'Drama',
                items: await basicFetch(`/discover/movie?with_genres=18&language=de&api_key=${ API_KEY }`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=de&api_key=${ API_KEY }`)
            },
            {
                slug: 'comedy',
                title: 'Komödie',
                items: await basicFetch(`/discover/movie?with_genres=35&language=de&api_key=${ API_KEY }`)
            },
            {
                slug: 'scifi',
                title: 'SCI-FI',
                items: await basicFetch(`/discover/movie?with_genres=878&language=de&api_key=${ API_KEY }`)
            },
            {
                slug: 'animation',
                title: 'Animation',
                items: await basicFetch(`/discover/movie?with_genres=16&language=de&api_key=${ API_KEY }`)
            },
            {
                slug: 'musical',
                title: 'Musikal',
                items: await basicFetch(`/discover/movie?with_genres=10402&language=de&api_key=${ API_KEY }`)
            },
            ];
            },

    getMovieInfo: async ( movieId, type ) =>
    {
        let info = {};

        if( movieId )
        {
            switch( type )
        {
            case 'movie':
            info = await basicFetch(`/movie/${ movieId }?language=de&api_key=${ API_KEY }`)
            break;
            case 'tv':
            info = await basicFetch(`/tv/${ movieId }?language=de&api_key=${ API_KEY }`)
            break;
            default:
            info = null;
            break;
        }
        }
            return info;
        }

    }; 

