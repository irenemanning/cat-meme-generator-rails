"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Links() {
  const [nav, setNav] = useState(false)
  const links = [
    {
      title: "Home", 
      path: "/"
    },
    {
      title: "Memes", 
      path: "/memes"
    },
    {
      title: "+ Meme", 
      path: "/+meme"
    },
    {
      title: "Profile", 
      path: "/profile"
    },
    
  ]
  return (
    // <div>
    //   {links.map((link => ((
    //     <Link href={link.path} key={link.path}>{link.title}</Link>
    //   ))))}
    // </div>

    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.title}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >

      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link) => (
            <li
              key={link.title}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    
  )
}

export default Links