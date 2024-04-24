import React from 'react'
import './contact.css'
import Nav from '../../components/Nav/Nav'


// import react icons
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";


export default () => {

  return (
    <div className = 'Contact'>
      <h1 className='h1'>FABULOUS</h1>
      <h3>JEWLERY STORE</h3>
      <Nav/>
      <div className='footer'>
      <p><b><i><u> Contact us</u> </i></b> </p><br/>
      <p> <FaLocationDot size={14}/> 6373 Bounwind dr, Dallas TX</p><br/>
      <p> <MdEmail size = {14}/>  contactus@info.com</p><br/>
      <p><FaPhone size = {14}/>  747-455-8967</p>
      </div>
      
    </div>
  )
}
