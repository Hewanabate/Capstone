import React from 'react'
import './earringCard.css'
import JEWLERYS from '../../../Jewlery'
import { CartProvider, useCart } from "react-use-cart";
import { CiDeliveryTruck } from "react-icons/ci";

export default () => {
  const {addItem} = useCart();
  return (
    <div className='EarringCard'>
        {JEWLERYS.filter((item)=>item.type==="earring")
        .map(item => (
          <div className='card'>
               <img className='small' src={item.image} alt='earring image' style='width:100%'/>
                <div>{item.discription}</div>
                <div>${item.price}</div>
                <div><CiDeliveryTruck size={14}/> Free delivery</div>
                <div><button className='butt'onClick={()=>addItem(item)}>Add to Cart</button></div> 
            </div>
        ))}
    </div>
  )
}
