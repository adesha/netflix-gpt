import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({id}) => {

    const getMovieVideoDetails=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos',API_OPTIONS)
        const json = await data.json()
        //console.log(json)

        const filterData=json.results.filter(video=>video.type==='Trailer')
        const trailer=filterData.length? filterData[0]:json.results[0]
        console.log(trailer)
    }

    useEffect(()=>{
        getMovieVideoDetails()
    },[])

  return (
    <div>
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/7u3zBVAxx_w?si=gwdqp5W27V0WNqYe" 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

      </iframe>
    </div>
  )
}

export default VideoBackground
