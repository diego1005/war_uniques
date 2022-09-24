import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className="footleft">
        © 2022, made with <i className="fa-solid fa-heart"></i> by <a className="anchor-foot" href="#"><b>Grupo 9</b></a> for a better web.
      </div>
      <div className='footright'>
        <ul className='footlist'>
          <li>
            <a href="#">Grupo 9</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">License</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

/*

import InstagramImg from "../../Assets/img/instagram.png"
import WhatsappImg from "../../Assets/img/whatsapp.png"
import EmailImg from "../../Assets/img/email.png"

      <div className='fotleft'>
            <p>Politica y privacidad</p>
            <p>Terminos y condiciones</p>
            <p>FAQ</p>
            <p>Informacion de sitio</p>
        </div>
        <div className='fotmidle'>
            <p>Copyright © 2022 WarUniques </p>
            <p>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
        </div>
        <div className="fotright">
            <div className="contactos">
                <div><img src={InstagramImg} alt="iglogo" /></div>
                <div><img src={WhatsappImg} alt="wsplogo" /></div>
                <div><img src={EmailImg} alt="emaillogo" /></div>
            </div>
        </div>
*/