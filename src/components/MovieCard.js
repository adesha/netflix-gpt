import React from 'react'
import { IMAGE_URL } from '../utils/constants'

const MovieCard = ({imagePath}) => {
  return (
    <div className='w-48 pr-4'>
      <img src={IMAGE_URL+imagePath} alt='Movie name'/>
    </div>
  )
}

export default MovieCard
