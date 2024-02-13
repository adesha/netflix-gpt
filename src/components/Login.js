import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from '../utils/firebase'
import { BACKGROUND_IMG } from '../utils/constants'

const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true)
  const [errorMessage,setErrorMessage]=useState(null)

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  
  const name=useRef(null)
  const email=useRef(null)
  const password = useRef(null)

  const handleButtonClick=()=>{
    //console.log(email)
    //console.log(password)
    const message=checkValidateData(email.current.value,password.current.value)
    setErrorMessage(message)

    if(message)return

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential)=>{
        const user=userCredential.user
        //console.log(user)
        updateProfile(user,{
          displayName: name.current.value
        }).then(()=>{
        }).catch((err)=>{
          setErrorMessage(err.message)
        })
      })
      .catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message
        setErrorMessage(errorCode+" - "+errorMessage)
      })
    }
    else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential)=>{
        const user=userCredential.user
      })
      .catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message
        setErrorMessage(errorCode+" - "+errorMessage)
      })
    }
    //console.log(message)
  }

  return (
    <div >
      <Header/>
      <div className='absolute'>
      <img src={BACKGROUND_IMG} alt='logo'/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 text-white absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?'Sign In':'Sign Up'}</h1>
        {!isSignInForm&&<input type='text' placeholder='Full Name' ref={name} className='p-4 my-2 w-full bg-gray-700'/>}
        <input type='text' placeholder='Email Address' ref={email} className='p-4 my-2 w-full bg-gray-700'/>
        <input type='password' placeholder='Password' ref={password} className='p-4 my-2 w-full bg-gray-700'/>
        <button className='p-4 my-2 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm?'Sign In':'Sign Up'}</button>
        <p className='py-2 font-bold text-3lg text-red-700'>{errorMessage}</p>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?'New to Netflix? Sign Up Now':'Already a User? Sign In Now'}</p>
      </form>
    </div>
  )
}

export default Login

