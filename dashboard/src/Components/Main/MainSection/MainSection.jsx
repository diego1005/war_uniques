import React from 'react'
import "./MainSection.css"
import imagen from "../../../Assets/img/imagen_pueba.webp";

function MainSection() {
  return (
    <div className='main-section'>
      <div className='main-section-title'>
        <h2>LAST PRODUCT</h2>
      </div>
      <div className="contain">
        <div className="main-section-image">
          <img src={imagen} alt="imagen de prueba" className="main-image" />
        </div>
        <div className="main-section-description">
          <h1 className='main-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, voluptatibus?</h1>
          <p className='main-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint, consequuntur ex et est quaerat cupiditate reiciendis dolorum laboriosam, facere sunt labore officiis modi. Vel sunt dolor facere commodi impedit, expedita eveniet nostrum facilis neque ipsa laudantium atque id. Cupiditate aliquam labore eveniet, esse veniam atque est! Ipsa exercitationem veniam maiores atque provident impedit quasi eveniet quibusdam, nemo vero incidunt voluptates placeat tempora enim quo, quis, molestiae rem veritatis ad saepe labore. Obcaecati magni unde incidunt minus, blanditiis aperiam quo rerum illo porro delectus debitis excepturi nihil hic repellat temporibus explicabo aspernatur deserunt quidem nesciunt quod nobis sunt ut dolores! Voluptatibus molestias adipisci repellat tempore mollitia repudiandae eligendi, officiis expedita ipsam, nisi placeat quam laudantium illo consectetur. Illum, odio explicabo? Cupiditate exercitationem neque animi autem impedit sapiente ea adipisci.</p>
        </div>
      </div>
    </div>
  )
}

export default MainSection