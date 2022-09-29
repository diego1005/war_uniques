import React, { useState, useEffect } from 'react'
import "./UsersTable.css"
import RowUsersTable from "./RowUsersTable/RowUsersTable"

function UsersTable() {

  const [rowData, setRowData] = useState([]);
  const [cantUsers, setCantProd] = useState([]);

  useEffect(() => {
    console.log('%cSe monto el componente', 'color: green');
    fetch("http://localhost:3001/api/users")
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
          <h2>USERS</h2>
          <p>
            <i className="fa-solid fa-check"></i>
            <span className='cant-prod'> {cantUsers} users</span>
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
              <th className='tablehead'>Apellido</th>
              <th className='tablehead'>Email</th>
              <th className='tablehead'>Opciones</th>
            </tr>
          </thead>
          <tbody className='row-table'>
            {rowData.lenght === true && <p>Sin datos</p>}
            {
              rowData.map((el, idx) => {
                return (
                  <RowUsersTable key={"row" + idx} rowContent={el}></RowUsersTable>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersTable