import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div className="login">
        <p>Log in Here</p>
        <div className="content">
            <p id='txt-1'>Welcome Back</p>
            <p id='txt-2'>Designers !</p>
            <form>
              <input type="email" placeholder='Enter Email id' id='email'/>
              <input type="password" placeholder='Enter Password' id='pass'/>
              <button  id='log'>Login</button>
            </form>
            <p id='new'>OR</p>
            <button type='button' id='g-log'>Login with</button>
            
        </div> 
    </div>
  );
}

export default Login;
