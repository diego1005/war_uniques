import React, { useState, useEffect } from 'react'
import "./Table.css"
import RowTable from "./RowTable/RowTable"

function Table() {

  const [rowData, setRowData] = useState([]);
  const [cantProd, setCantProd] = useState([]);

  useEffect(() => {
    console.log('%cSe monto el componente', 'color: green');
    fetch("http://localhost:3001/api/products")
      .then(response => response.json())
      .then(data => {
        setRowData(data.data);
        setCantProd(data.count)
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className="table-container">
      <div className="table-top">
        <div className="table-top-left">
          <h2>Products</h2>
          <p>
            <i className="fa-solid fa-check"></i>
            <span className='cant-prod'> {cantProd} products</span>
          </p>
        </div>
        <div className="table-top-right">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div className="table-content">
        <table className='table'>
          <thead>
            <tr className='table-titles'>
              <th className='tablehead'></th>
              <th className='tablehead'>Nombre</th>
              <th className='tablehead'>Descripcion</th>
              <th className='tablehead'>Precio</th>
              <th className='tablehead'>País</th>
              <button onClick="agregar()">
                Agregar
                </button>
                <button onClick="quitar()">
                Quitar
                </button>


            </tr>
          </thead>
          <tbody className='row-table'>
            {rowData.lenght === true && <p>Sin datos</p>}
            {
              rowData.map((el, idx) => {
                return (
                  <RowTable key={"row" + idx} rowContent={el}></RowTable>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table