import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const Login = () => {
    const [username, setUsername] = useState('')
    const {login} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.path || '/'
    const handleClick = () =>{
            login(username)
            // When we login and the back browser button is clicked we are taken back to the login page whereelse we are already loged in
            // to avoid this we can pass the replace argument to counter this. NB: it takes us twomsteps behind
            // but to remove it completely fro the history stack we can set the state
            navigate(redirectPath, { replace: true, state:{ loggedIn: true} })
    }
  return (
    <div>
        <label htmlFor="name">Username</label>
        <input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)} />
        <button className='bg-slate-900 rounded-2xl mx-4 text-slate-200 py-1 px-2 my-4' onClick={handleClick} type='submit'>Login</button>
    </div>
  )
}

export default Login