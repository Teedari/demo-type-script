import React from 'react'

const Input = (props: {
  value: string,
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <input type='text' {...props} />
  )
}

export default Input