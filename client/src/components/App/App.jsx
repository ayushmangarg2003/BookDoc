import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home'
import Register from '../../pages/Register'
import Login from '../../pages/Login'
import Doctors from '../../pages/Doctors'
import Contact from '../../pages/Contact'
import Services from '../../pages/Services'
import DoctorDetails from '../../pages/DoctorDetails'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App