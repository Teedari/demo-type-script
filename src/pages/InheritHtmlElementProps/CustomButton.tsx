import React from 'react'
type ButtonProps = {
  variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

const CustomButton = ({variant, children}:ButtonProps) => {
  return (
    <button className={variant}>
      {children}
    </button>
  )
}

const CustomButtonWithTextAsChildren = ({variant, children}:Omit<ButtonProps, 'children'> & {children:string}) => {
  return (
    <button className={variant}>
      {children}
    </button>
  )
}

export {CustomButton, CustomButtonWithTextAsChildren}