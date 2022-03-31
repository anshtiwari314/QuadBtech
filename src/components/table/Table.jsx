import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './table.scss'

export default function Table() {
  return (
    <table className='table'>
        <tr className='table_head'>
            <th>#</th>
            <th>platform</th>
            <th>last traded price</th>
            <th>buy / sell price</th>
            <th>difference</th>
            <th>savings</th>
        </tr>
        <tr className='table_data'>
            <td>1</td>
            <td><img/> <span>WazirX</span></td>
            <td>&#8377; 36,70,899</td>
            <td>&#8377; 36,67,982 /&#8377; 36,70,899</td>
            <td className='table_data_diff'>6.05 %</td>
            <td className='table_data_savings'><span>&#9650;</span> &#8377; 2,09,479</td>
        </tr>
        <tr className='table_data'>
            <td>1</td>
            <td><img/> <span>WazirX</span></td>
            <td>&#8377; 36,70,899</td>
            <td>&#8377; 36,67,982 /&#8377; 36,70,899</td>
            <td className='table_data_diff'>6.05 %</td>
            <td className='table_data_savings'><span>&#9650;</span> &#8377; 2,09,479</td>
        </tr>
    </table>
  )
}
