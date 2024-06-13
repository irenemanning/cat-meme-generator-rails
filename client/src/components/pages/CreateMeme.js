import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createMeme } from '../../Redux/memesSlice'

function CreateMeme() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const errors = useSelector((state) => state.memes.errors)

  const [formData, setFormData] = useState({
    caption_one: '',
    caption_two: '',
    file: null,
    preview: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setFormData({
        ...formData,
        file: file,
        preview: reader.result
      })
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('meme[caption_one]', formData.caption_one)
    data.append('meme[caption_two]', formData.caption_two)
    data.append('meme[image]', formData.file)

    try {
      const result = await dispatch(createMeme(data))
      if (result.payload && (!result.payload.errors || result.payload.errors.length === 0)) {
        navigate('/memes')
      } else {
        console.error("Error creating meme:", result.payload ? result.payload.errors : "Payload is undefined")
      }
    } catch (error) {
      console.error('Error creating meme:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-24">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md pt-24"
      >
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-bold mb-2">Upload File:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md text-gray-900"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caption_one" className="block text-gray-700 font-bold mb-2">Caption 1:</label>
          <input
            type="text"
            id="caption_one"
            name="caption_one"
            value={formData.caption_one}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caption_two" className="block text-gray-700 font-bold mb-2">Caption 2:</label>
          <input
            type="text"
            id="caption_two"
            name="caption_two"
            value={formData.caption_two}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        
        {formData.preview && (
          <div className="mb-4 text-center">
            <h2 className="text-xl text-black font-bold mb-2">{formData.caption_one}</h2>
            <img 
              src={formData.preview} 
              alt="Preview" 
              className="max-w-full h-auto rounded-md"
            />
            <h2 className="text-xl text-black font-bold mt-2">{formData.caption_two}</h2>
          </div>
        )}
        {errors.length > 0 && (
          <div className='text-red-500'>
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <button 
          type="submit" 
          className="w-full text-white font-bold py-2 px-4 rounded-md"
          style={{ backgroundColor: 'rgb(255, 92, 181)' }}
        >
          Submit
        </button> 
      </form>
    </div>
  )
}

export default CreateMeme