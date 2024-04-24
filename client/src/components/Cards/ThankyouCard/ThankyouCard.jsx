import React from 'react'
import './thankyouCard.css'


function ThankyouCard() {
  
  return (
<section className = 'thankyou'> 
    <h2>Thank you for Shoping with Us </h2> <br/>
      <div >
        <h4>Ordered Successfully!</h4><br/>
        <h5>We will let you know the delivery date as soon as processing the order.</h5>
        <a href="contact" target="__blank" rel="noopener noreferrer">
        <button className='close' >Close</button>
        </a>
        
      </div>
    </section>
  )
}

export default ThankyouCard