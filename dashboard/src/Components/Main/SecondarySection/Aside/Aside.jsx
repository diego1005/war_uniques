import React from "react";
import "./Aside.css";

function Aside() {
  return (
    <div className="aside-container">
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
            <div className="iContent"><i class="fa-solid fa-user"></i></div>
              <h6>Ultimo usuario agregado</h6>
            </li>
          </p>
        </div>

        <div className="line">
          <p>
            <li className="nav-item">
            <div className="iContent"><i className="fa-solid fa-cart-shopping"></i></div>
              <h6>Ultimo producto agregado</h6>
            </li>
          </p>
        </div>

        <div className="line">
          <p>
            <li className="nav-item">
              <div className="iContent"><i class="fa-solid fa-newspaper"></i></div>
              <h6>Ultimas novedades</h6>
            </li>
          </p>
        </div>

        <div className="line">
          <p>
            <li className="nav-item">
              <div className="iContent"><i class="fa-solid fa-cash-register"></i></div>
              <h6>Ultimas ventas</h6>
            </li>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aside;
