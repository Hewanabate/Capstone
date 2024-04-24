import React from 'react';
import './regisrationForm.css';
import Nav from '../Nav/Nav';

export default () => {

  
  return (
    <div>
      <div >   
        <h1>FABULOUS</h1>
        <h3>JEWLERY STORE</h3>
        <Nav/>
      </div> 
      <div className='RegistrationForm'>
        <form>
          <h1>Registration Form</h1>
          <div>
            <div><input type='text' placeholder='FirstName' value={FirstName} /></div>
            <div><input type='text' placeholder='LastName' value={LastName} /></div>
            <div><input type='email' placeholder='Email' value={email} /></div>
            <div><input type='password' placeholder='Password'value={password}/></div>
            <div> <input type='text' placeholder='Card Number' value={cardnumber} /></div>
            <div><input type='text' placeholder='expired date mm/yyyy' value={cardnumber}/></div>
            <div><input type='text' placeholder='CVC' value={cvc} /></div>
            <div><button type='submit'>Register</button>
            <button type='text'>Close</button></div>
          </div>
        </form>
      </div>
    </div>
  );
};
