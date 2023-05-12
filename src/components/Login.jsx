import React, { useState } from 'react'
import {useAuth} from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import Alert from './Alert'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const{login, loginWithGoogle} = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({target: {name, value}}) => {
    setUser({... user, [name]: value})
  };

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try{
      await login( user.email, user.password)
      navigate('/')
    }catch (error){
      setError(error.message)
    }
  }

  const handleGoogleLogin = async() =>{
    try{
      await loginWithGoogle()
      navigate('/')
     }catch(error){
      setError(error.message)
     }
  }
  

  return (
    <div>
      {error && <Alert message={error}/>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          name='email' 
          placeholder='youremail@company.com'
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name='password' 
          id='password'
          onChange={handleChange}
          placeholder='******'
        />
        <button>Login</button>
      </form>

      <button onClick={handleGoogleLogin}>GoogleLogin</button>
    </div>
  )
}

export default Login