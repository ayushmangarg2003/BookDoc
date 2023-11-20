import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios';
import { useLogout } from '../hooks/useLogout'
import profilePic from "../assets/images/user.png"

import { backendLink } from "../main"
const Profile = () => {
    const { user } = useAuthContext()
    const { logout } = useLogout()
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`${backendLink}/api/auth/userData/${user.email}`)
            setUserData(res.data)
        }
        getData()
    }, [])

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="profile-container">
            <div className="profile-left">
                <div className="profile-image">
                    <img className="profile-pic" src={profilePic} alt="" />
                </div>
                <div className="logout-btn">
                    <button onClick={handleLogout}>LOGOUT</button>
                </div>
            </div>
            <div className="profile-right">
                <div className="data-container">
                    <label htmlFor="name">Name:</label>
                    <p id='name'>{userData.name}</p>
                </div>
                <div className="data-container">
                    <label htmlFor="name">Email:</label>
                    <p id='email'>{userData.email}</p>
                </div>
                <div className="data-container">
                    <label htmlFor="name">Gender:</label>
                    <p id='gender'>{userData.gender}</p>
                </div>
                <div className="data-container">
                    <label htmlFor="name">Role:</label>
                    <p id='role'>{userData.role}</p>
                </div>
                <div className="data-container">
                    <label htmlFor="name">Unique Code:</label>
                    <p id='role'>{userData._id}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile