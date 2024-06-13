import React from 'react'
import { useSelector, useDispatch } from "react-redux"

function Memes() {
  const memes = useSelector((state) => state.memes.entities)
  const isLoadingMemes = useSelector((state) => state.memes.isLoadingMemes)

  if (isLoadingMemes) {
    return <div>Loading...</div>
  }


  return (
    <div>
    {memes.map( (meme) => (
      <div key={meme.id}>
        <h2>{meme.caption_one}</h2>
        <img src={meme.image_url} alt=""/>
        <h2>{meme.caption_two}</h2>
      </div>
    ))}
    </div>
  )
}

export default Memes
