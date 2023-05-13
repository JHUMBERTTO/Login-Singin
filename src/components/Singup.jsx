import React, { useState } from 'react'
import {useAuth} from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
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
    <div className='w-full max-w-md m-auto'>
      {error && <Alert message={error}/>}
      <form onSubmit={handleSubmit} className='bg-gray-700 shadow-lg rounded-3xl px-8 pt-6 pb-8 mb-4'>
      <h1 className='text-white font-bold text-5xl mb-16'>Create new account.</h1>
        <p className='text-white mb-10'>Already A Member? <Link to="/login" className='text-sky-600'>Login</Link></p>
        <div className="mb-4">
          <label htmlFor="email" className='block text-white  text-sm font-fold mb-2'>Email</label>
          <input 
            type="email"
            name='email' 
            placeholder='youremail@company.com'
            className='appearence-none rounded-full w-full py-2 px-3 text-white placeholder:text-white caret-white bg-gray-500 focus:outline-sky-600'
            onChange={handleChange}
          />
        </div>
          <label htmlFor="password" className='block text-white  text-sm font-fold mb-2'>Password</label>
          <input 
            type="password" 
            name='password' 
            id='password'
            placeholder='******'
            className='appearence-none rounded-full w-full py-2 px-3 text-white placeholder:text-white caret-white bg-gray-500 focus:outline-sky-600'
            onChange={handleChange}
          />
        <div className="mb-4">
        </div>
        <div className='flex justify-end mt-10'>
          <button className='bg-sky-600 text-white  hover:bg-sky-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Singup