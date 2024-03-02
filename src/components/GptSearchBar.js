import React, { useRef } from 'react'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
  const searchText=useRef(null)
  const dispatch=useDispatch()

  const searchMovieTMDB=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
    const json = await data.json()
    //console.log(json.results)
    return json.results
  }

  const handleGptSearchClick= async ()=>{
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults=await openai.chat.completions.create({
      messages:[{role:"user",content:gptQuery}],
      model:'gpt-3.5-turbo'
    })
    console.log(gptResults.choices?.[0]?.message.content)
    const gptMovies=gptResults.choices?.[0]?.message.content.split(',')
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults)
    dispatch(addGptMovieResult({movieNames: gptMovies,movieResults: tmdbResults}))
  }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onClick={(e)=>e.preventDefault()}>
        <input type='text' ref={searchText} className='p-4 m-4 col-span-9'
        placeholder='What would you like to watch today?'/>
        <button className='col-span-3 m-4 py-3 px-4 bg-red-700 text-white rounded-lg'
        onClick={handleGptSearchClick}>
            Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
