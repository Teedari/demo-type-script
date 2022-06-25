import React from 'react'
type props = {
  onClick: (e:React.MouseEvent<HTMLButtonElement>, id:number) => void,
  text:string
}
const SayHello = (props:props) => {
  return (
    <button color='#00B' onClick={(e) => props.onClick(e, 1)}>{props.text}</button>
  )
}

export default SayHello