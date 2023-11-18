import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

import { useLogout } from '../hooks/useLogout'

const Profile = () => {
    const { user } = useAuthContext()
    const { logout } = useLogout()
    const [userData, setUserData] = useState({})


    const handleLogout = () => {
        logout()
    }
    return (
        //     <div>{user.name}</div>
        //     <div>{user.role}</div>
        //     <div>{user.gender}</div> 
        <div className="profile-parent">
            <div className="profile-top">
                <div className="profile-pic"></div>
                {/* <div className="profile-title"><div>{user.email}</div></div> */}
                <div className="profile-logout"><button onClick={handleLogout}>LOGOUT</button></div>
            </div>
            <div className="profile-bottom"></div>
        </div>
    )
}

export default Profile