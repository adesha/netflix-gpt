import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)

  return (
    <div className='-mt-20 relative z-20'>
      <MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies}/>
      <MovieList title={'Popular'} movies={movies?.nowPopularMovies}/>
      <MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies}/>
      <MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies}/>
      <MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer
