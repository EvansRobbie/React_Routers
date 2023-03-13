import React from 'react'
import { useAuth } from '../context/Auth'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const location = useLocation()
    const {user} = useAuth()
    // The set state ensures that when loged in it redirects to the profiles page rather than the homepage  
    if(!user){
      return  <Navigate to='/login' state={{path: location.pathname}}/>
    }
  return children
}

export default ProtectedRoute