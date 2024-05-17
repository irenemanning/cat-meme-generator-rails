import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import '../App.css';
import Navbar from './NavBar';
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
