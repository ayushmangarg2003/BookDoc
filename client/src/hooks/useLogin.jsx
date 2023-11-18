import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

import { backendLink } from '../main'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate();

    const login = async (email, password) => {
        setError(null)
        const user = { email, password }
        try {
            await axios.post(`${backendLink}/api/auth/login`, user)
            navigate('/')
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({ type: 'LOGIN', payload: user })
        } catch (error) {
            setError(error.response.data.error);
            // console.log(error);
        }
    }

    return { login, error }
}