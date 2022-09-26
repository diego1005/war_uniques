import React, { useState, useEffect } from 'react'
import "./SectionTop.css"
import InfoCard from "./InfoCard/InfoCard";

function SectionTop() {

  const [countries, setCountries] = useState(["usa", "england", "russia", "germany", "japan"]);
  // const [cantidad, setCantidad] = useState([])

  useEffect(() => {
    const url = "http://localhost:3001/api/products/flags/"

    const getTotal = (idx) => {
      fetch(url + (idx + 1))
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }

    // useEffect(()=>{
    //   fetch("http://localhost:3001/api/products/flags/")
    //     .then(response => response.json())
    //     .then(data => data)
    //     .catch(error => console.log(error))
    // }, [])

  return (
    <div className='section-top'>
      {
        countries.map((el, idx) => (
          <InfoCard key={"flag" + idx} country={idx + 1} cantidad={flag} flag={el}></InfoCard>
        ))
      }
    </div >
  )
}

export default SectionTop