import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import '../App.css';
import Navbar from './NavBar';
import Home from './pages/Home'
function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const isAuthenticated = true
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />
          
          {isAuthenticated ? (
            <>
              <Route path="/memes" element={} />
              <Route path="/+meme" element={} />
              <Route path="/profile" element={} />
              {/* <Route path="/profile/settings" element={} /> */}
            </>
          ) : (
            <Route path="/" element={<Home />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
