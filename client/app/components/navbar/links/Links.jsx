import React from 'react'
import Link from 'next/link'

function Links() {
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
    <div>
      {links.map((link => ((
        <Link href={link.path}>{link.title}</Link>
      ))))}
    </div>
  )
}

export default Links