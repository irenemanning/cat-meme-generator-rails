import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { signupUser } from '../../Redux/authSlice'
import ReusableForm from '../UI/ReusableForm'

function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const errors = useSelector((state) => state.auth.errors)

  const initialValues = {username: '', password: '', password_confirmation: ''}
  const fields = [
      { label: 'Username', type: 'text', placeholder: 'Enter Username', name: 'username'},
      { label: 'Password', type: 'password', placeholder: 'Enter Password', name: 'password' },
      { label: 'Password Confirmation', name: 'password_confirmation', type: 'password', placeholder: 'Confirm Password' }
  ]

  const handleLoginClick = () => {
    navigate('/login')
  }

  async function handleSignup(data) {
      try {
          await dispatch(signupUser(data))
      
      } catch (error) {
          console.error('Login failed:', error)
      }
  }

  return (
    <div className='pt-24'>
      <h1 className='pt-24'>Sign Up</h1>
      <ReusableForm 
      fields={fields} 
      initialValues={initialValues} 
      onSubmit={handleSignup} 
      submitBtnText={"Sign Up"} 
      errors={errors} 
      />
      <p>
        Already have an account?  
        <button 
        variant="link" 
        onClick={handleLoginClick} 
        style={{color: "#FF038D"}} 
        >
          Login
        </button> 
      </p>
    </div>
  )
}

export default SignUp