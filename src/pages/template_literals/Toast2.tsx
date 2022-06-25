import React from 'react'


export enum Directions {
  topLeft,
  topCenter,
  topRight,
  center,
  centerLeft,
  centerRight,
  bottomLeft,
  bottomCenter,
  bottomRight
}


type ToastProps = {
  position: Directions,
  style?: React.CSSProperties
}

const Toast2 = (props: ToastProps) => {
  return (
    <div style={props.style}><h4>Toast Lessons</h4></div>
  )
}

export default Toast2