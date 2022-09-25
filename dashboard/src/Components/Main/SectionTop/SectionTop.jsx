import React from 'react'
import "./SectionTop.css"
import InfoCard from "./InfoCard/InfoCard";
import USAflag from "../../../Assets/img/usa.png";
import UKflag from "../../../Assets/img/england.png";
import RUSflag from "../../../Assets/img/russia.png";
import GERflag from "../../../Assets/img/germany.png";
import JAPflag from "../../../Assets/img/japan.png";

function SectionTop() {
  return (
    <div className='section-top'>
      <InfoCard icon={
        <div className="icon-card">
            <img className='flag' src={USAflag} alt="USAflag" />
        </div>
      }></InfoCard>
      <InfoCard icon={
        <div className="icon-card">
          <img className='flag' src={UKflag} alt="UKflag" />
        </div>
      }></InfoCard>
      <InfoCard icon={
        <div className="icon-card">
          <img className='flag' src={RUSflag} alt="RUSflag" />
        </div>
      }></InfoCard>
      <InfoCard icon={
        <div className="icon-card">
          <img className='flag' src={GERflag} alt="GERflag" />
        </div>
      }></InfoCard>
      <InfoCard icon={
        <div className="icon-card">
          <img className='flag' src={JAPflag} alt="JAPflag" />
        </div>
      }></InfoCard>
    </div>
  )
}

export default SectionTop