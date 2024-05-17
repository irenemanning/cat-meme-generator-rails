import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../Redux/authSlice'
import '../App.css'
import Navbar from './NavBar'
import Home from './pages/Home'
import Memes from './pages/Memes'
import CreateMeme from './pages/CreateMeme'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
function App() {
  const dispatch = useDispatch()
  // const user = useSelector((state) => state.auth.user)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const isLoading = useSelector((state) => state.auth.isLoading)
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchUser())
    }
    fetchData()
  }, [dispatch, isAuthenticated])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <Router>
        <Navbar isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <SignUp />} />
          <Route path="/" element={<Home />} />
          
          {isAuthenticated ? (
            <>
              <Route path="/memes" element={<Memes />} />
              <Route path="/+meme" element={<CreateMeme />} />
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/profile/settings" element={} /> */}
            </>
          ) : (
            <Route path="/" element={<Home />} />
          )}
        </Routes>
      </Router>
    </div>
  )
}

export default App
