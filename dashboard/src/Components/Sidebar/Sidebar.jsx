import React from 'react'
import "./Sidebar.css"
import Logo from '../../Assets/img/WAR_UNIQUES-minimal.jpg'

function Sidebar() {
  return (
    <div className='sidebar'>Hola soy el sidebar
    <img className='logo' src={Logo} alt="Logo"/>
    </div>

  )
}

export default Sidebar