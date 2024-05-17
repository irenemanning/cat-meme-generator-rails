import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from '../../Redux/authSlice'
import ReusableForm from '../UI/ReusableForm'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const errors = useSelector((state) => state.auth.errors)
  const isLoading = useSelector((state) => state.auth.isLoading)

  const initialValues = {username: '', password: ''}
  const fields = [
      { label: 'Username', type: 'text', placeholder: 'Enter Username', name: 'username'},
      { label: 'Password', type: 'password', placeholder: 'Enter Password', name: 'password' },
  ]

  const handleSignUpClick = () => {
    navigate('/signup') 
  }

  async function handleLogin(data) {
      try {
          await dispatch(loginUser(data))
      
      } catch (error) {
          console.error('Login failed:', error)
      }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='pt-24'>
      <h1 className='pt-24'>Login</h1>
      <ReusableForm 
      fields={fields} 
      initialValues={initialValues} 
      onSubmit={handleLogin} 
      submitBtnText={"Login"} 
      errors={errors}
      />
      <p>
        Don't have an account?  
        <button 
        variant="link" 
        onClick={handleSignUpClick} 
        style={{color: "#FF038D"}} 
        >
          Sign up
        </button> 
      </p>
    </div>
  )
}

export default Login