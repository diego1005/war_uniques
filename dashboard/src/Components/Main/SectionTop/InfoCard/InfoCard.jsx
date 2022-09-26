import React, { useEffect, useState } from 'react'
import "./InfoCard.css";

function InfoCard(props) {

  return (
    <div className='info-card'>
      <div className="top-card">
        <div className="icon-card">
          <img className='flag' src={`images/flags/${props.country}.png`} alt={`${props.flag}_flag`} />
        </div>
        <div className="data-card">
          <p className="data-title">Total de Productos</p>
        </div>
      </div>
      <div className="middle-card"></div>
      <div className="bottom-card">
        <p>
          {props.total}
        </p>
      </div>
    </div>
  )
}

export default InfoCard