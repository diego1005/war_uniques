import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <Link to="/"><i className="fa-solid fa-house"></i></Link>
        <i class="fa-solid fa-grip-lines-vertical"></i>
        <p className='left-title'>War Uniques Dashboard</p>
      </div>
        <Link to="/test"><i className="fa-solid fa-house"></i></Link>
      Soy el Navbar
    </div>
  )
}

export default Navbar