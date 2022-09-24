import React from 'react'
import "./Table.css"

function Table() {
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
              <th className='tablehead'>1</th>
              <th className='tablehead'>2</th>
              <th className='tablehead'>3</th>
              <th className='tablehead'>4</th>
            </tr>
          </thead>
          <tbody>
            <tr> {/*Row component*/}
              <td className='tablebody'>11</td>
              <td className='tablebody'>22</td>
              <td className='tablebody'>33</td>
              <td className='tablebody'>44</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table