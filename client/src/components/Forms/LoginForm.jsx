import Register from '../../pages/Forms/Register';
import Nav from '../Nav/Nav';
import './loginForm.css';
import React, { useState } from 'react';
import { CiUser } from 'react-icons/ci';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in both fields.');
      return;
    }

    console.log(username, password);
  };
  

  return (
    <div>
      <div>
        <h1>FABULOUS</h1>
        <h3>JEWLERY STORE</h3>
        <Nav />
      </div>
      <div className='Loginform'>
        <form onSubmit={handleFormSubmit}>
          <h2>Login</h2>
          <br />
          <p>
            <CiUser size={30} />
          </p>
          <div>
            <input
              type='text'
              id='username'
              placeholder='UserName'
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type='password'
              id='password'
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>
          <p id='p'>
            Don't have account
            <a href='RegistrationForm' onClick={Register}> SignUp</a>
          </p>
          <br />
          <div className='button'>
            <button type='submit'>
              <a href='Contact'>Log In </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
