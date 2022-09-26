import React from 'react'
import "./SectionTop.css"
import InfoCard from "./InfoCard/InfoCard";
import USAflag from "../../../Assets/img/usa.png";
import UKflag from "../../../Assets/img/england.png";
import RUSflag from "../../../Assets/img/russia.png";
import GERflag from "../../../Assets/img/germany.png";
import JAPflag from "../../../Assets/img/japan.png";

function SectionTop() {

/*
  El siguiente fetch tiene que iterar direcamente sobre el infocard, para utlizar el complemento dinamicamente
  enviando por un lado el numero del id country (para luego agregarlo en el src de la img) y por el otro, el
  mismo id para realizar el conteo de la cantidad de productos por bandera.

  let products = {};
  fetch("http://localhost:3001/api/products/flags")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

    // console.log(products);

    */

  return (
    <div className='section-top'>
      <InfoCard icon={
        <div className="icon-card">
            <img className='flag' src={USAflag} alt="USAflag" /> {/* dinamizar el generado de imagnes de banderas*/}
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