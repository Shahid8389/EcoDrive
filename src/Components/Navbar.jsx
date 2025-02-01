import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
        <div className="logo">
            <h2>EcoDrive</h2>
        </div>

        <div className='list-container'>
            <ul>
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='active'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar