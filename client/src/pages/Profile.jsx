import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

import { useLogout } from '../hooks/useLogout'



const Profile = () => {
    const { user } = useAuthContext()
    const { logout } = useLogout()


    const handleLogout = () => {
        logout()
    }

    return (
        <>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.role}</div>
            <div>{user.gender}</div>
            <button onClick={handleLogout}>LOGOUT</button>
        </>

    )
}

export default Profile