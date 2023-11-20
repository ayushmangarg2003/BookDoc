import React, { useState } from 'react'
import { doctors } from '../assets/data/doctors'
import DoctorCard from '../components/DoctorCard/DoctorCard'

const Doctors = () => {
  const [search, setSearch] = useState("")

  return (
    <div className="doctors-parent">
      <div className="section-heading">FIND A DOCTOR</div>
      <div className="doctor-search-container">
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        />
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <div className='doctors-container'>
        {
          doctors.map((doc) => (
            <DoctorCard key={doc.id} doc={doc} />
          ))
        }
      </div>
    </div>
  )
}

export default Doctors