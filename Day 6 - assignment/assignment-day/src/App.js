import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"
import Home from './Home'
import Navbar from './Navbar'
import Rooms from './Rooms'
import Activity from './Activity'
import Aboutus from './Aboutus'
import Footer from './Footer'
import Contactus from './Contactus'

function App() {
  return (
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='room' element={<Rooms/>}/>
        <Route path='xtvt' element={<Activity/>}/>
        <Route path='abt' element={<Aboutus/>}/>
        <Route path='cont' element={<Contactus/>}/>

      </Routes>

      <Footer/>
    </Router>
    
  </div>
    )
}

export default App
