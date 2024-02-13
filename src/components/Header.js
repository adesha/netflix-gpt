import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from '../utils/userSlice'
import { LOGO, USER_ICON } from '../utils/constants'
const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid,email,displayName}=user
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate('/browse')
      }
      else{
        dispatch(removeUser())
        navigate('/')
      }
    })

    return ()=>unsubscribe()
  },[])

  const handleSignOut=()=>{
    signOut(auth).then(()=>{
    }).catch((err=>{
      navigate('/error')
    }))
  }

  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO} alt='logo'/>
    {auth.currentUser && <div className='flex p-2 m-2'>
      <div className='font-bold text-xl m-2'>{auth.currentUser.displayName}</div>
       <img
       className='w-12 h-12'
       src={USER_ICON} alt='userIcon'
       />
       <button onClick={handleSignOut} className='m-2 font-bold text-white'>Sign Out</button>
    </div>}
    </div>
  )
}

export default Header
