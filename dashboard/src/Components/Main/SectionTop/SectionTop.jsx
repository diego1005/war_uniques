import React from 'react'
import "./SectionTop.css"
import InfoCard from "./InfoCard/InfoCard";

function SectionTop() {
  return (
    <div className='section-top'>
      <InfoCard icon={
        <div className="icon-card f-icon">
          <i className='fa-brands fa-product-hunt icon'></i>
        </div>
      }></InfoCard>
      <InfoCard icon={
        <div className="icon-card s-icon">
          <i className="fa-solid fa-chart-simple icon"></i>
        </div>
      }></InfoCard>
      <InfoCard icon={
        <div className="icon-card t-icon">
          <i className="fa-solid fa-chart-pie icon"></i>
        </div>
      }></InfoCard>
      <InfoCard icon={
        <div className="icon-card fh-icon">
          <i className="fa-solid fa-users icon fh-icon"></i>
        </div>
      }></InfoCard>
    </div>
  )
}

export default SectionTop