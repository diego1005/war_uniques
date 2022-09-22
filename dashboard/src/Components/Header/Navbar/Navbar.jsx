import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar/SearchBar";
import NavIcon from "./NavIcon/NavIcon";

function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <Link to="/"><i className="fa-solid fa-house"></i></Link>
        <i className="fa-solid fa-grip-lines-vertical"></i>
        <p className='left-title'>War Uniques Dashboard</p>
      </div>
      {/* <Link to="/test"><i className="fa-solid fa-house"></i></Link> */}
      <div className="nav-right">
        <SearchBar></SearchBar>
        <NavIcon></NavIcon>
      </div>
    </div>
  )
}

export default Navbar