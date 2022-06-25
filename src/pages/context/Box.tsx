import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'

const Box = () => {
  const context = useContext(ThemeContext)
  return (
    <div style={{padding: '2rem', backgroundColor: context.primary.main, color: context.primary.text}}>
      <p>Theme COntext Tutorial Box</p>
    </div>
  )
}

export default Box