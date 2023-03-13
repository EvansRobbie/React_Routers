import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>
        HomePage
    </div>
    <button onClick={() => navigate('order', {replace: true})} className='bg-slate-900 rounded-2xl mx-4 text-slate-200 py-1 px-2 my-4'>Click Button</button>
    </>
  )
}

export default Home