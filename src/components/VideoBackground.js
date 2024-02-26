import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({id}) => {
  const trailerVideo=useSelector(state=>state.movies?.trailerVideo)

  useMovieTrailer(id)
  return (
    <div>
      <iframe width="560" height="315" 
      src={"https://www.youtube.com/embed/"+trailerVideo?.key}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

      </iframe>
    </div>
  )
}

export default VideoBackground
