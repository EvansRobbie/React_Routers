import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const product = () => {
  return (
    <>
    <div>
        <input type='text' placeholder='Search' className='px-2 py-1 mx-3 my-5 bg-slate-400 rounded-xl placeholder:text-slate-200'/>
    </div>
    <nav className='flex gap-4 mx-4'>
        {/* make sure no to include the fprward slash in the nested routes */}
        <Link to='featured'>Featured</Link>
        <Link to= 'new'>New</Link>
    </nav>
    {/* For the component to be renderd you have call the Outlet component */}
    <Outlet/>
    </>
  
  )
}

export default product