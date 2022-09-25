import React from 'react'
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
<a className="" href="/"> </a>
        <h3>Usuarios</h3>
    
</li>
    {/* <!-- Nav Item - products--> */}
    <li className="nav-item">
    <i className="fa-solid fa-gun"></i>

                   <h3>Productos</h3>
            </li>
          
            </div>
          
  

  )
}

export default Sidebar