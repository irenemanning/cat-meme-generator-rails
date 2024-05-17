import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import '../App.css'
import Navbar from './NavBar'
import Home from './pages/Home'
import Memes from './pages/Memes'
import CreateMeme from './pages/CreateMeme'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const isAuthenticated = true
  return (
    <div className="App">
      <Router>
        <Navbar />
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
