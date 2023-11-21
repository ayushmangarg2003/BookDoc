import React, { useState } from 'react'
import { doctors } from '../assets/data/doctors'
import DoctorCard from '../components/DoctorCard/DoctorCard'

const Doctors = () => {
  const [search, setSearch] = useState("")

  let filtered = [];
  for (let i = 0; i < doctors.length; i++) {
    if (doctors[i].name.toLowerCase().includes(search.toLowerCase()) || doctors[i].specialty.toLowerCase().includes(search.toLowerCase()) || doctors[i].hospital.toLowerCase().includes(search.toLowerCase()) || doctors[i].city.toLowerCase().includes(search.toLowerCase())) {
      filtered = [...filtered, doctors[i]];
    }
  }

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
          filtered.map((doc) => (
            <DoctorCard key={doc.id} doc={doc} search={search} />
          ))
        }
      </div>
    </div>
  )
}

export default Doctors