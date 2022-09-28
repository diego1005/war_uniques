import React, { useState, useEffect } from 'react'
import "./Table.css"
import RowTable from "./RowTable/RowTable"

function Table() {
  
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then(response => response.json())
      .then(data => {setRowData(data)})
      .catch(error => console.error(error))

  }, [])

  return (
    <div className="table-container">
      <div className="table-top">
        <div className="table-top-left">
          <h2>Products</h2>
          <p>
            <i className="fa-solid fa-check"></i> X new products
          </p>
        </div>
        <div className="table-top-right">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div className="table-content">
        <table className='table'>
          <tbody>
            <div>
              {rowData.lenght === 0 && <p>Sin datos</p>}
              {
                rowData.map((producto, i) => {
                  return(
                    <div className='contenedor'>
                      <RowTable
                        nombre = {producto.name}
                        descripcion = {producto.description}
                        precio = {producto.price}
                        pais = {producto.id_country}
                      />
                    </div>
                  )
                })
              }
            </div>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table