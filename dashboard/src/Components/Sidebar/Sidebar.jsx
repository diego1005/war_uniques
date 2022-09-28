import React from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-title">
        <h2>DASHBOARD</h2>
        <hr />
      </div>

      {/* <!-- Nav Item - users--> */}
      <li className="nav-item">
        <i className="fa-solid fa-user-secret"></i>
        <Link className="link" to="/usuarios"><h3>Usuarios</h3></Link>
      </li>
      {/* <!-- Nav Item - products--> */}
      <li className="nav-item">
        <i className="fa-solid fa-gun"></i>
        <Link className="link" to="/productos"><h3>Productos</h3></Link>
      </li>

    </div>



  )
}

export default Sidebar