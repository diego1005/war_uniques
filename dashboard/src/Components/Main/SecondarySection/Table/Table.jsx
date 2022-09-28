import React, { useState, useEffect } from 'react'
import "./Table.css"
import RowTable from "./RowTable/RowTable"

function Table() {

  const [rowData, setRowData] = useState([]);

  useEffect(() => {

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
          <thead>
            <tr>
              <th className='tablehead'></th>
              <th className='tablehead'>Nombre</th>
              <th className='tablehead'>Descripcion</th>
              <th className='tablehead'>Precio</th>
              <th className='tablehead'>País</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {rowData.lenght === true && <p>Sin datos</p>}
              {
                rowData.map(element => {
                  return (
                    <RowTable></RowTable>
                  )
                })
              }
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table