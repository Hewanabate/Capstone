import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import {useCart} from 'react-use-cart';

//import react icons
import { FiShoppingCart } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";


export default () => {
  const { totalItems} = useCart();
  return (
    <nav className='Nav'> 
        <ul>
            <li><Link to="/rings">RINGS</Link></li>
            <li><Link to="/earrings">EARRINGS</Link></li>
            <li><Link to="/necklaces">NECKLACES</Link></li>
            <li><Link to="/bracelets">BRACELETS</Link></li>
            <li><Link to="/contact"><IoHomeOutline size={18}/></Link></li>
            <li><Link to="/login"><CiUser size ={20}/></Link></li>
            <li><Link to="/cart"><FiShoppingCart size= {18}/><span className='pcart'>{totalItems}</span></Link></li>
        </ul>
    </nav>
  )
}
