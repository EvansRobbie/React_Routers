import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Order from './components/Order'
import Product from './components/Product'
import NoMatch from './components/NoMatch'
import Featured from './components/Featured'
import NewProducts from './components/NewProducts'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/order' element = {<Order/>} />
        <Route path='/products' element={<Product/>}>
          {/* Nested Routes */}
          {/* iindex route */}
          <Route index element={<Featured/> }/>
          <Route path='featured' element={<Featured/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        {/* Page not found route */}
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </div>
  )
}

export default App
