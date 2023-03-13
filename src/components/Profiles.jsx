import React from 'react'
import { useAuth } from '../context/Auth'
import { useNavigate } from 'react-router-dom'

const Profiles = () => {
    const {user, logout} = useAuth()
    const navigate = useNavigate()
    const handleClick = () =>{
        logout(user )
        navigate('/')
    }
  return (
    <div> <h1>User name is {user}</h1>
        <button className='bg-slate-900 rounded-2xl mx-4 text-slate-200 py-1 px-2 my-4' onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Profiles