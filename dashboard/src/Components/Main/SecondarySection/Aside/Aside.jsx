import React from 'react'
import "./Aside.css"

function Aside() {
  return (
    <div className='aside-container'>
      <div className="aside-top">
        <h2>Overview</h2>
        <p>
          <i className="fa-solid fa-arrow-up"></i> 24% this month
        </p>
      </div>
      <div className="aside-content">
        {/* Line component */}
      <div className="line">
      <p>
      <li className="nav-item">
        <i className="fa-solid fa-user-secret"></i></li>
      <h6>Ultimo usuario agregado</h6>
        </p>
        </div>

        <div className="line">
      <p>
      <li className="nav-item">
        <i className="fa-solid fa-cart-shopping"></i> </li>
      <h6>Ultimo producto agregado</h6>
        </p>
      </div>
      
      <div className="line">
      <p>
      <li className="nav-item">
        <i className="fa-solid fa-inbox"></i></li>
      <h6>Ultimas novedades</h6>
        </p>
      </div>
      </div>
    </div>
  )
}

export default Aside