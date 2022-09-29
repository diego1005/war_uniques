
import React from 'react'
import "./RowUsersTable.css"

function RowUsersTable(props) {

    const urlApiImgProd = "http://localhost:3001/images/user-image/";

    return (
        <tr>
            <td className='row-content'>
                <div className='row-img'>
                    <img className='img-prod' src={urlApiImgProd + props.rowContent.imageURL} alt="img" />
                </div>
            </td>
            <td className='row-content'>{props.rowContent.name}</td>
            <td className='row-content'>{props.rowContent.lastname}</td>
            <td className='row-content'>{props.rowContent.email}</td>
            <td className='row-content'>
                <p className='row-opt-edit'><i class="fa-solid fa-pencil"></i></p>
                <p className='row-opt-trash'><i class="fa-solid fa-trash"></i></p>
            </td>
        </tr>
    )
}

export default RowUsersTable