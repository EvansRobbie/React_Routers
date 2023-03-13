import React from 'react'
import { useParams } from 'react-router-dom'
const UserDetails = () => {
    // use params can be used maybe when you want to make an api call to the specimfic user
    const {userId} = useParams()
    
  return (
    <div>Details about user {userId }</div>
  )
}

export default UserDetails