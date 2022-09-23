import React from 'react'
import "./InfoCard.css";

function InfoCard(props) {
  return (
    <div className='info-card'>
      <div className="top-card">
        {props.icon}
        <div className="data-card">
          <p className="data-title">Data title</p>
          <p className="data-info">Data info</p>
        </div>
      </div>
      <div className="middle-card"></div>
      <div className="bottom-card">

      </div>
    </div>
  )
}

export default InfoCard