import React, { useRef, useEffect } from 'react'

const DomRef = () => {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    ref.current?.focus()
  }, [])
  
  return (
    <div>
      <h4>User Ref API HOOK</h4>
      <input ref={ref} type="text" />
    </div>
  )
}

export default DomRef