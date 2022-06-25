import React from 'react'

type VerticalDirections = 'left' | 'center' | 'right'
type HorizontalDirections = 'top' | 'center' | 'bottom'


type ToastProps = {
  position: Exclude<`${VerticalDirections}-${HorizontalDirections}`, 'center-center'> | 'center'
}

const Toast = (props: ToastProps) => {
  return (
    <div><h4>Toast Lessons</h4></div>
  )
}

export default Toast