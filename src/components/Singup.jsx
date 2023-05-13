import React, { useState } from 'react'
import {useAuth} from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import Alert from './Alert'

const Singup = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const{singup} = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({target: {name, value}}) => {
    setUser({... user, [name]: value})
  };

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try{
      await singup( user.email, user.password)
      navigate('/')
    }catch (error){
      setError(error.message)
    }
  }

  return (
    <div>
      {error && <Alert message={error}/>}
      <form onSubmit={handleSubmit}>
        <p className='text-gray-300'>Already A Member?</p>
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
        />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Singup