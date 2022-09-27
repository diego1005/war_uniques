import React from 'react'
import { useState, useEffect } from 'react';
import "./SectionTop.css"
import InfoCard from "./InfoCard/InfoCard";

function SectionTop() {

  const [total, setTotal] = useState([]);

  useEffect(() => {
    console.log('%cSe monto el componente', 'color: green');
      fetch("http://localhost:3001/api/products/flags")
        .then(response => response.json())
        .then(data => setTotal(data) )
        .catch(err => console.error(err));
  }, []);

  return (
    <div className='section-top'>
      {total.length === 0 && <p>Loading...</p> }
      {
        total.map((el, idx) => {
          return (
            <InfoCard key={"flag" + idx} country={idx + 1} cantidad={el.total}></InfoCard>
          )
        })
      }
    </div >
  )
}

export default SectionTop