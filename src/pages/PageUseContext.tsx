import React from 'react'
import Box from './context/Box'
import ThemeContextProvider from './context/ThemeContext'

const PageUseContext = () => {
  return (
    <ThemeContextProvider>
      <Box />
    </ThemeContextProvider>
  )
}

export default PageUseContext