import React from 'react'
import DefaultCompnent from './DefaultCompnent'

const PrimaryButton = (props: React.ComponentProps<typeof DefaultCompnent> & {variant: 'primary'}) => {
  return (
    <button className={props.variant} {...props}>
      {props.children}
    </button>
  )
}

export default PrimaryButton