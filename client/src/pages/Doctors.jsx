import React, { useState } from 'react'
import { doctors } from '../assets/data/doctors'
import DoctorCard from '../components/DoctorCard/DoctorCard'

const Doctors = () => {
  const [search, setSearch] = useState("")

  // const loadData = async () => {
    
  // };


  // useEffect(() => {
  //   loadData();
  // }, []);

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
        <i class="fa fa-search" aria-hidden="true"></i>
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