import React from 'react'
type PropTypes = {
  variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>
const DefaultCompnent = ({variant ,children, ...rest}:PropTypes) => {
  return (
    <button className={variant} {...rest}>
      {children}
    </button>
  )
}

export default DefaultCompnent
