import React from 'react'

const Input = ({item,placeholder,type}) => {
  return (
    <div>
      <input class="form-control" type={type} placeholder={placeholder} aria-label="default input example">{item}</input>
    </div>
  )
}

export default Input
