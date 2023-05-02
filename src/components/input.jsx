import React from 'react'

const input = ({type, value, onChange, placeHolder}) => {
  return (
    <>
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeHolder} />
    </>
  )
}

export default input