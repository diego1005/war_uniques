import React from 'react'
import "./Footer.css"
import InstagramImg from "../../Assets/img/instagram.png"
import WhatsappImg from "../../Assets/img/whatsapp.png"
import EmailImg from "../../Assets/img/email.png"

function Footer() {
  return (
    <div className='footer'>
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
            <div class="contactos">
                <div><img src={InstagramImg} alt="iglogo" /></div>
                <div><img src={WhatsappImg} alt="wsplogo" /></div>
                <div><img src={EmailImg} alt="emaillogo" /></div>
            </div>
        </div>
    </div>
  )
}

export default Footer