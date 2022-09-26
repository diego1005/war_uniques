import React, { useState, useEffect } from 'react'
import "./SectionTop.css"
import InfoCard from "./InfoCard/InfoCard";

function SectionTop() {

  const [countries, setCountries] = useState(["usa", "england", "russia", "germany", "japan"]);

  useEffect(() => {
    const url = "http://localhost:3001/api/products/flags/"

    const getTotal = (idx) => {
      fetch(url + (idx + 1))
        .then(response => response.json())
        .then(data => )
        .catch(err => console.error(err));
    }

    getTotal();
  }, [])

  return (
    <div className='section-top'>
      {
        countries.map((el, idx) => (
          <InfoCard key={"flag" + idx} country={idx + 1} total={flag} flag={el}></InfoCard>
        ))
      }
    </div >
  )
}

export default SectionTop