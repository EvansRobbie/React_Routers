import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import Navbar from './components/Navbar'
import Order from './components/Order'
import Product from './components/Product'
import NoMatch from './components/NoMatch'
import Featured from './components/Featured'
import NewProducts from './components/NewProducts'
import { User } from './components/User'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import Profiles from './components/Profiles'
import AuthProvider from './context/Auth'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
const LazyAbout = React.lazy(() => import ('./components/About'))

function App() {
const location = useLocation()
const navigate = useNavigate()
// This will clear the history stack of the login page
 useEffect (() =>{
  if(location.state && location.state.pathname){
    navigate('/', {replace: true})
  }
 }, [location, navigate])
  return (
    <AuthProvider className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={
        <React.Suspense fallback='loading..'>
          <LazyAbout/>
          </React.Suspense>}/>
        <Route path='/order' element = {<Order/>} />
        <Route path='/products' element={<Product/>}>
          {/* Nested Routes */}
          {/* iindex route */}
          <Route index element={<Featured/> }/>
          <Route path='featured' element={<Featured/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path='/profiles' element={<ProtectedRoute><Profiles/></ProtectedRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/users' element={<User/>}/>
        {/* Dynamic route */}
        <Route path='/users/:userId' element={<UserDetails/>}/>
        <Route path='/users/admin' element={<Admin/>}/>
        {/* Page not found route */}
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </AuthProvider >
  )
}

export default App
