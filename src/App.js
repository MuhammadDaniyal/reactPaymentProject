import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Error from './Pages/Error'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App