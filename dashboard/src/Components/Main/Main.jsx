import React from 'react'
import "./Main.css"
import SectionTop from "./SectionTop/SectionTop";
import MainSection from "./MainSection/MainSection";
import SecondarySection from "./SecondarySection/SecondarySection";

function Main() {

  return (
    <div className='main'>
      <SectionTop></SectionTop>
      <MainSection></MainSection>
      <SecondarySection></SecondarySection>
    </div>
  )
}

export default Main