import React from 'react'
import './App.css'
import Navbar from './components/Navbar_Zul'
import Home from './components/pages/Home_Amir'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Aboutus from './components/pages/Aboutus_Anudiip';
import Contacts from './components/pages/Contacts_Shashi';
import Menu from './components/pages/Menu_Ariff';
import Footer from './components/Footer_Zul';


function App() {
  return (
    <div className="App">
      {/* Routing Navigation */}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
