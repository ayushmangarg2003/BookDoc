import React from 'react'
import { doctors } from '../assets/data/doctors'
import DoctorCard from '../components/DoctorCard/DoctorCard'

const Doctors = () => {
  return (
    <div className="doctors-parent">
      <div className="section-heading">FIND A DOCTOR</div>
      <div className='doctors-container'>
        {
          doctors.map((doc)=>(
            <DoctorCard key={doc.id} doc={doc} />
          ))
        }
      </div>
    </div>
  )
}

export default Doctors