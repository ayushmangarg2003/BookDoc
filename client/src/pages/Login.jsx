/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { backendLink } from '../main';

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = { email: form.email, password: form.password }
    console.log(user);
    try {
      await axios.post(`${backendLink}/api/auth/login`, user)
      navigate('/')
    } catch (error) {
      setError(error.response.data.error);
    }
  }

  return (
    <div className="login-parent">
      <div className="login-form">
        <h1>Hello! <p>Welcome</p> Back</h1>
        <input onChange={handelChange} name='email' value={form.email} type="text" placeholder='Enter Email' />
        <input onChange={handelChange} name='password' value={form.password} type="password" placeholder='Enter Password' />
        <div className='login-btn' onClick={handleSubmit}>Login</div>
        <div className='login-newhere'>New Here ? <Link className='login-register-redirect' to={'/register'}> Register</Link></div>
        <div style={{ color: "red" }} className='login-newhere'>{error}</div>
      </div>
    </div>
  )
}

export default Login 