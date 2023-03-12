import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navlinkstyles = ({isActive}) =>{
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none'
            
        }
    }
  return (
    <nav className='relative w-full h-20 bg-slate-900'>
        <ul className='flex items-center justify-center w-full h-full gap-4 '>
            <li className='text-slate-200 '>
                <NavLink to='/' style={navlinkstyles}>Home</NavLink>
            </li>
            <li className='text-slate-200 '>
                <NavLink to='/about' style={navlinkstyles}  >About</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar