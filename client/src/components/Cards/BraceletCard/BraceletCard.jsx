import React from 'react'
import './braceletCard.css'
import { CartProvider, useCart } from "react-use-cart";
import { CiDeliveryTruck } from "react-icons/ci";

import JEWLERYS from '../../../Jewlery'

export default () => {
  const {addItem} = useCart();
  return (
    <div className='BraceletCard'>
        {JEWLERYS.filter((item)=>item.type==="bracelet")
        .map(item => (
          <div className='card'>
               <img className='small' src={item.image} alt='bracelet image' style='width:100%'/>
                <div>{item.discription}</div>
                <div>${item.price}</div>
                <div><CiDeliveryTruck size={14}/> Free delivery</div>
                <div><button className='butt' onClick={()=>addItem(item)}>Add to Cart</button></div> 
            </div>
        ))}
    </div>
  )
}
