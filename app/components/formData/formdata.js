import { useState } from 'react'

const formData = (initialValue) => {
  const [values,setValues] = useState(initialValue);

  const handleChange = (value) => {
    setValues(value);
  }
  return {
    values,
    setValues,
    handleChange
  }
}

export default formData;