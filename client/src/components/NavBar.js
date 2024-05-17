import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const links = isAuthenticated ? [
    { title: "Memes", path: "/memes" },
    { title: "+ Meme", path: "/+meme" },
    { title: "Profile", path: "/profile" },
    { title: "Log Out", path: "/" }
  ] : [
    { title: "Sign Up", path: "/signup" },
    { title: "Log In", path: "/login" }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 px-4 text-black flex items-center justify-between" style={{ backgroundImage: 'linear-gradient(180deg, rgb(193, 248, 64), rgb(255, 167, 5))' }}>
      <div className="cm-logo">
        <h1 className="text-5xl font-signature ml-2">
          <a className="link-underline link-underline-black" href="/" rel="noreferrer">
            Cat Meme Generator
          </a>
        </h1>
      </div>

      <ul className="hidden lg:flex items-center space-x-4">
        {links.map((link) => (
          <li key={link.title} className="nav-links cursor-pointer capitalize font-medium text-black-500 hover:scale-105 hover:text-white duration-200 link-underline">
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div className="lg:hidden flex items-center">
        <button onClick={() => setNavOpen(!navOpen)} className="text-gray-500 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {navOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {navOpen && (
        <div className="lg:hidden fixed top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col items-center justify-center" style={{background: 'rgb(255, 167, 5)'}}>
          {links.map((link) => (
            <Link key={link.title} onClick={() => setNavOpen(false)} to={link.path} className="nav-links py-2 text-4xl">{link.title}</Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar