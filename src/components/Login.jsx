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
      <div className='w-full max-w-xs m-auto'>
      {error && <Alert message={error}/>}
      <form onSubmit={handleSubmit} className='bg-gray-700 shadow-lg rounded-3xl px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-white font-bold text-5xl mb-16'>Login.</h1>
        <div className="mb-4">
        <label htmlFor="email" className='block text-white  text-sm font-fold mb-2'>Email</label>
        <input 
          type="email"
          name='email' 
          placeholder='youremail@company.com'
          className='appearence-none rounded-full w-full py-2 px-3 text-white placeholder:text-white caret-white bg-gray-500 focus:outline-none focus:shadow-outline'
          onChange={handleChange}
        />
        </div>
        <div className="mb-4">   
        <label htmlFor="password" className='block text-white  text-sm font-fold mb-2'>Password</label>
        <input 
          type="password" 
          name='password' 
          id='password'
          onChange={handleChange}
          className='appearence-none rounded-full w-full py-2 px-3 text-white placeholder:text-white caret-white bg-gray-500 focus:outline-none focus:shadow-outline'
          placeholder='******'
          />
        </div>
        <div className='flex justify-end mt-10'>
          <button className='bg-sky-600 text-white  hover:bg-sky-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>
        </div>
      </form>
        <button onClick={handleGoogleLogin}
        className='bg-slate-50 hover:bg-slate-100 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full'>Google Login</button>
      </div>
  )
}

export default Login