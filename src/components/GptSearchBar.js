import React, { useRef } from 'react'
import openai from '../utils/openai'

const GptSearchBar = () => {
  const searchText=useRef(null)

  const handleGptSearchClick= async ()=>{
    const gptResults=await openai.chat.completions.create({
      messages:[{role:"user",content:{searchText}}],
      model:'gpt-3.5-turbo'
    })
    console.log(gptResults.choices)
  }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onClick={(e)=>e.preventDefault}>
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
