/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useLayoutEffect, useState } from 'react'
import RegisterIMG from "../assets/images/signup.gif"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { backendLink } from '../main'
const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "male",
    role: "patient"
  })
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }


  const handelSubmit = async e => {
    e.preventDefault()
    // Post Request on Server to register user
    const user = { name: form.name, email: form.email, password: form.password, role: form.role, gender: form.gender }
    try {
      await axios.post(`${backendLink}/api/auth/register`, user)
      navigate('/')
    } catch (error) {
      setError(error.response.data.error);
    }
  }


  return (
    <div className="register-parent">
      <div className="register-left">
        <img src={RegisterIMG} className='register-image' alt="Sign Up" />
      </div>
      <div className="register-right">
        <h1>Create an <p>Account</p></h1>
        <input type="text" name='name' value={form.name} onChange={handelChange} placeholder='Enter Name' />
        <input type="text" name='email' value={form.email} onChange={handelChange} placeholder='Enter Email' />
        <input type="password" name='password' value={form.password} onChange={handelChange} placeholder='Enter Password' />

        <div className='register-labels'>
          <label className='role-label'>
            <select name="role" value={form.role} onChange={handelChange}>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </label>

          <label className='role-label'>
            <select name="gender" value={form.gender} onChange={handelChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>

        {/* <input className='image-input' type="file" id='profile-pic' /> */}
        {/* <label htmlFor="profile-pic" accept=".jpg .png">Choose Image</label> */}

        <div className='register-btn' onClick={handelSubmit}>Register</div>

        <div className='register-olduser'>Have an Account ? <Link className='register-login-redirect' to={'/login'}> Login</Link></div>
        <div style={{ color: 'red' }} className='register-olduser'>{error}</div>
      </div>
    </div>
  )
}

export default Register