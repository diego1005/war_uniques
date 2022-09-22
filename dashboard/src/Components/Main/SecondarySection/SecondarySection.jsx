import React from 'react'
import "./SecondarySection.css"
import Table from "./Table/Table";
import Aside from "./Aside/Aside";

function SecondarySection() {
  return (
    <div className='second-section'>
        Aca va la tabla
        <Table></Table>
        menu lateral
        <Aside></Aside>
    </div>
  )
}

export default SecondarySection