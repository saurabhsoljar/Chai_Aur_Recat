import React, {useState} from 'react'
import  {Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authSlice from '../appwrite/auth'
import {useFrom} from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useFrom()
    const [error, setError] = useState("")
    

  return (
    <div>Login</div>
  )
}

export default Login