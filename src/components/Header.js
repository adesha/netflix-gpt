import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()

  const handleSignOut=()=>{
    signOut(auth).then(()=>{
      navigate('/')
    }).catch((err=>{
      navigate('/error')
    }))
  }

  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
' alt='logo'/>
    {auth.currentUser && <div className='flex p-2 m-2'>
       <img
       className='w-12 h-12'
       src='https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229
' alt='userIcon'
       />
       <button onClick={handleSignOut} className='m-2 font-bold text-white'>Sign Out</button>
    </div>}
    </div>
  )
}

export default Header
