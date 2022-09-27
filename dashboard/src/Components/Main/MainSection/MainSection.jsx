import React from 'react'
import "./MainSection.css"
import imagen from "../../../Assets/img/1658326582058_descarga-removebg-preview.webp"

function MainSection() {
  return (
    <div className='main-section'>
      <div className='main-section-title'>
        <h2>ULTIMO PRODUCTO</h2>
      </div>
      <div className="contain">
        <div className="main-section-image">
          <img src={imagen} alt="imagen de prueba" className="main-image" />
        </div>
        <div className="main-section-description">
          <h1 className='main-title'>Stahlhelm</h1>
          <p className='main-desc'>El Stahlhelm fue un casco de combate de acero introducido por el Ejército Imperial Alemán en 1916 durante la Primera Guerra Mundial para reemplazar al tradicional Pickelhaube de cuero endurecido, que no ofrecía una protección adecuada en la guerra de trincheras.</p>
        </div>
      </div>
    </div>
  )
}

export default MainSection