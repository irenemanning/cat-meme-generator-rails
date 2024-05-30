import React, {useState} from 'react'

function CreateMeme() {
  const [formData, setFormData] = useState({
    caption_1: '',
    caption_2: '',
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
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
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caption_1" className="block text-gray-700 font-bold mb-2">Caption 1:</label>
          <input
            type="text"
            id="caption_1"
            name="caption_1"
            value={formData.caption_1}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caption_2" className="block text-gray-700 font-bold mb-2">Caption 2:</label>
          <input
            type="text"
            id="caption_2"
            name="caption_2"
            value={formData.caption_2}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        
        {formData.preview && (
          <div className="mb-4 text-center">
            <h2 className="text-xl text-black font-bold mb-2">{formData.caption_1}</h2>
            <img 
              src={formData.preview} 
              alt="Preview" 
              className="max-w-full h-auto rounded-md"
            />
            <h2 className="text-xl text-black font-bold mt-2">{formData.caption_2}</h2>
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