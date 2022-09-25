import React from 'react'
import "./MainSection.css"
import imagen from "../../../Assets/img/1658326582058_descarga-removebg-preview.webp"

function MainSection() {
  return (
    <div className='main-section'>
      <div className='main-section-title'>
        <h2>Ultimo Producto</h2>
      </div>
      <div className="contain">
        <div className="main-section-image">
          <img src={imagen} alt="imagen de prueba" className="main-image" />
        </div>
        <div className="main-section-description">
          <h1 className='main-title'>Casco de la segunda guerra mundial</h1>
          <p className='main-desc'>El casco M1 es un casco de combate que fue usado por las Fuerzas Armadas de los Estados Unidos desde la Segunda Guerra Mundial hasta 
          que fue reemplazado por el casco PASGT a principios de 1985. Durante más de cuarenta años, el M1 fue el equipo estándar de las Fuerzas Armadas de Estados Unidos, y su diseño inspiró a otras fuerzas armadas alrededor del mundo.
El casco M1 es extremadamente popular entre los coleccionistas de militaria y cascos de la Segunda Guerra Mundial, y son más valiosos que los modelos posteriores.</p>
        </div>
      </div>
    </div>
  )
}

export default MainSection