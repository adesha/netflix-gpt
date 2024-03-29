import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    //console.log(movies)
    if (!movies) {
        return <div>Loading...</div>;
      }
  return (
    <div className='p-6 bg-black'>
        <h1 className='text-white text-3xl py-2 font-bold'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex'>
            {
                movies.map(movie=>(<MovieCard key={movie.id} imagePath={movie.poster_path}/>))
            }
        </div>
        </div>
    </div>
  )
}

export default MovieList
