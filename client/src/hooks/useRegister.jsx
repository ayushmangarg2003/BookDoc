import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { backendLink } from '..'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const useRegister = () => {
    const [error, setError] = useState("")
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    const register = async (name, email, password, role, gender) => {
        setError(null)
        const user = { name, email, password, role, gender }
        try {
            await axios.post(`${backendLink}/api/auth/register`, user)
            navigate('/')
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({ type: 'LOGIN', payload: {name, email, role, gender} })
        } catch (error) {
            setError(error.response.data.error);
        }
    }

    return { register, error }
}