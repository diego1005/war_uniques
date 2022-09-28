import React, { useState, useEffect } from 'react'
import "./MainSection.css"

function MainSection() {

  const [lastProduct, setLastProduct] = useState({});

  useEffect(() => {
    console.log('%cSe monto el componente', 'color: green');
    fetch("http://localhost:3001/api/products/last")
      .then(response => response.json())
      .then(data => setLastProduct(data.data[0]))
      .catch(err => console.error(err));
  }, []);

  const urlImg = "http://localhost:3001/images/products-image/"

  return (
    <div className='main-section'>
      <div className='main-section-title'>
        <h2>ULTIMO PRODUCTO</h2>
      </div>
      <div className="contain">
        <div className="main-section-image">
          <img src={urlImg + lastProduct.imageURL} alt="imagen de prueba" className="main-image" />
        </div>
        <div className="main-section-description">
          <h1 className='main-title'>{lastProduct.name}</h1>
          <p className='main-desc'>{lastProduct.esc}</p>
        </div>
      </div>
    </div>
  )
}

export default MainSection