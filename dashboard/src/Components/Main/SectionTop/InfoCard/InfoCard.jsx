import React from 'react'
import "./InfoCard.css";

function InfoCard(props) {

  return (
    <div className='info-card'>
      <div className="top-card">
        <div className="icon-card">
          <img className='flag' src={`images/flags/${props.country}.png`} alt="flag" />
        </div>
        <div className="data-card">
          <p className="data-title">Total</p>
          <p className='data-info'>
            {props.cantidad}
          </p>
        </div>
      </div>
      <div className="middle-card"><hr /></div>
      <div className="bottom-card">
      </div>
    </div>
  )
}

export default InfoCard