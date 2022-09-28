
import React from 'react'
import "./RowTable.css"

function RowTable(props) {

    const urlApiImgProd = "http://localhost:3001/images/products-image/";
    const urlFlags = "/images/flags/";

    return (
        <tr>
            <td className='row-content'>
                <div className='row-img'>
                    <img className='img-prod' src={urlApiImgProd + props.rowContent.imageURL} alt="img" />
                </div>
            </td>
            <td className='row-content'>{props.rowContent.name}</td>
            <td className='row-content'>
                <div className='row-desc'>
                    {props.rowContent.description}
                </div>
            </td>
            <td className='row-content'>{props.rowContent.price}</td>
            <td className='row-content'>
                <img className='row-flag' src={urlFlags + props.rowContent.id_country + ".png"} alt="flag" />
            </td>
            <td className='row-content'></td>
        </tr>
    )
}

export default RowTable