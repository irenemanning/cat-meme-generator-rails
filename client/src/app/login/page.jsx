"use client"
// import { useEffect } from "react"
import ReusableForm from "../components/ui/ReusableForm"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "@/redux/slices/authSlice"

function Login() {
  const router = useRouter()
  const dispatch = useDispatch()

  const errors = useSelector((state) => state.auth.errors)
  const isLoading = useSelector((state) => state.auth.isLoading)
  const initialValues = {username: '', password: ''}
  const fields = [
      { label: 'Username', type: 'text', placeholder: 'Enter Username', name: 'username'},
      { label: 'Password', type: 'password', placeholder: 'Enter Password', name: 'password' },
  ]

  const handleSignUpClick = () => {
    router.push('/signup') 
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

  // useEffect(() => {
  //   // Dispatch actions, perform initialization, etc.
  //   // This code will run on the client-side
  //   dispatch(fetchUser())
  // }, [dispatch])

  return (
    <div>
      <h1>Login</h1>
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