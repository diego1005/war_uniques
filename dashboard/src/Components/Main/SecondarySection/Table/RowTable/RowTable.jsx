import React from 'react'

function RowTable(props) {
  return (
    <div className='row-table'>
      <h3 className='tablehead'>Nombre</h3>
      <p>{props.nombre}</p>
      <h3 className='tablehead'>Descripcion</h3>
      <p>{props.descripcion}</p>
      <h3 className='tablehead'>Precio</h3>
      <p>{props.precio}</p>
      <h3 className='tablehead'>País</h3>
      <p>{props.pais}</p>
    </div>
  )
}

export default RowTable