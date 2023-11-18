/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import RegisterIMG from "../assets/images/signup.gif"
import { Link } from 'react-router-dom'
import { useRegister } from '../hooks/useRegister'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('male')
  const [role, setRole] = useState('patient')
  const [password, setPassword] = useState('')

  const { register, error } = useRegister()

  const handelSubmit = async e => {
    e.preventDefault()
    await register(name, email, password, gender, role)
  }


  return (
    <div className="register-parent">
      <div className="register-left">
        <img src={RegisterIMG} className='register-image' alt="Sign Up" />
      </div>
      <div className="register-right">
        <h1>Create an <p>Account</p></h1>
        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
        <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />

        <div className='register-labels'>
          <label className='role-label'>
            <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </label>

          <label className='role-label'>
            <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div className='register-btn' onClick={handelSubmit}>Register</div>
        <div className='register-olduser'>Have an Account ? <Link className='register-login-redirect' to={'/login'}> Login</Link></div>
        <div style={{ color: 'red' }} className='register-olduser'>{error && <div>{error}</div>}</div>
      </div>
    </div>
  )
}

export default Register