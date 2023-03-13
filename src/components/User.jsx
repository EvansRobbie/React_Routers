import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export const User = () => {
    // useSearchPrams is used when appying filters o a listing
    // it's similar to useState hook
    const [searchParam, setSearchParam] = useSearchParams()
    const showSearchParam = searchParam.get('filter') === 'active'
  return (
    <div>
        <h2> 
            <Link to='/users/1'>
            User 1
            </Link>
            </h2>
        <h2>
            <Link to='/users/2'>
             User 2
            </Link>
             </h2>
        <h2>
            <Link to='/users/3'>
             User 3
            </Link>
             </h2>
             <button onClick={() => setSearchParam({filter: 'active'})} className='bg-slate-800 text-slate-200 rounded-xl py-1 px-2 mr-4'>Active users</button>
             <button onClick={() => setSearchParam({})} className='bg-slate-800 text-slate-200 rounded-xl py-1 px-2'>Reset users</button>
            {showSearchParam ? <h2>Showing active users</h2> : <h2>Showing all Users</h2>}
    </div>
  )
}
