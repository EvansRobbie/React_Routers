import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const navigate = useNavigate()
  return (
    // a page like order confirmation is not triggererd by click of button or navigate
    // it happens when an event is successfull
    // to do this we use useNavigate()
    // if you want to replacee the history, pass the optional replace argument: see Home component
    <>
    <div>Order Confirmed</div>
    <button onClick={() => navigate(-1)} className='bg-slate-900 rounded-2xl mx-4 text-slate-200 py-1 px-2 my-4'>Go back</button>
    </>
  )
}

export default Order