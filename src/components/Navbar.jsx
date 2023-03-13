import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const Navbar = () => {
    const {user} = useAuth()
    const navlinkstyles = ({isActive}) =>{
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none'
            
        }
    }
  return (
    <nav className='relative w-full h-20 bg-slate-900'>
        <ul className='flex items-center justify-center w-full h-full gap-4 '>
            {/* you can use Link or NavLinh to navigate but navLink is used whem you want to set whether the link is active or not */}
            <li className='text-slate-200 '>
                <NavLink to='/' style={navlinkstyles}>Home</NavLink>
            </li>
            <li className='text-slate-200 '>
                <NavLink to='/about' style={navlinkstyles}  >About</NavLink>
            </li>
            <li className='text-slate-200 '>
                <NavLink to='/products' style={navlinkstyles}  >Products</NavLink>
            </li>
            <li className='text-slate-200 '>
                <NavLink to='/profiles' style={navlinkstyles}  >Profiles</NavLink>
            </li>
            {!user && <li className='text-slate-200 '>
                <NavLink to='/login' style={navlinkstyles}  >Login</NavLink>
            </li> }
        </ul>
    </nav>
  )
}

export default Navbar