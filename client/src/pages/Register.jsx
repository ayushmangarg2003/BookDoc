import React from 'react'
import RegisterIMG from "../assets/images/signup.gif"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register-parent">
      <div className="register-left">
        <img src={RegisterIMG} className='register-image' alt="Sign Up" />
      </div>
      <div className="register-right">
        <h1>Create an <p>Account</p></h1>
        <input type="text" placeholder='Enter Name' />
        <input type="text" placeholder='Enter Email' />
        <input type="password" placeholder='Enter Password' />

        <div className='register-labels'>
          <label className='role-label'>
            <select name="role">
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </label>

          <label className='role-label'>
            <select name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>

        <input className='image-input' type="file" id='profile-pic' />
        <label htmlFor="profile-pic" accept=".jpg .png">Choose Image</label>

        <div className='register-btn'>Register</div>

        <div className='register-olduser'>Have an Account ? <Link className='register-login-redirect' to={'/login'}> Login</Link></div>
      </div>
    </div>
  )
}

export default Register