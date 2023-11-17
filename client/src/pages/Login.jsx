import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-parent">
      <div className="login-form">
        <h1>Hello! <p>Welcome</p> Back</h1>
        <input type="text" placeholder='Enter Email' />
        <input type="password" placeholder='Enter Password' />
        <div className='login-btn'>Login</div>
        <div className='login-newhere'>New Here ? <Link className='login-register-redirect' to={'/register'}> Register</Link></div>
      </div>
    </div>
  )
}

export default Login 