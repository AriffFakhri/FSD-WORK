import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container'>
      <ol>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'room'}>Rooms</Link></li>
          <li><Link to={'xtvt'}>Activity</Link></li>
          <li><Link to={'abt'}>About Us</Link></li>
          <li><Link to={'cont'}>Contact Us</Link></li>

      </ol>
        
    </div>
  )
}

export default Navbar