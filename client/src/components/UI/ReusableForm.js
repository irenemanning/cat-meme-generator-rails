import React, { useState } from "react"

function ReusableForm({ fields, initialValues, onSubmit, submitBtnText, errors, cancel }) {
    const [formValues, setFormValues] = useState(initialValues)
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormValues({ ...formValues, [name]: value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      onSubmit(formValues)
    }
    
    return (
        <form onSubmit={handleSubmit} className='reusable-form'>
            {fields.map((field) => (
                <div key={field.label} className='mb-4 '>
                <label htmlFor={field.name} className='block text-sm font-medium text-gray-700'>
                    {field.label}
                </label>
                <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formValues[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className='mt-1 p-2 border rounded-md w-full'
                />
                </div>
            ))}
            {errors.length > 0 && (
                <div className='text-red-500'>
                {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                ))}
                </div>
            )}
            <button
                type="submit"
                className={`bg-black text-white px-4 py-2 rounded-md mt-4`}
            >
                {submitBtnText}
            </button>
            {cancel && (
                <button
                type="button"
                onClick={cancel}
                className='bg-gray-700 text-white px-4 py-2 rounded-md mt-4'
                >
                Cancel
                </button>
            )}
        </form>
    )
  }
  
export default ReusableForm