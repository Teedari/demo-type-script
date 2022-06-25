import React, { useCallback, useEffect, useRef, useState } from 'react'

const MutableRef = () => {
  const ref = useRef<number | null>(null)
  const [time, setTime]  = useState(0)

  const timerStop = useCallback(() => {
    if(ref?.current){
      clearInterval(ref?.current)
    }
  },[])

  useEffect(() => {
    ref.current = window.setInterval(() => {
      setTime( prev => prev + 1)
    }, 1000)
    return () => timerStop()
  })
  return (
    <div>
      <h4>Mutable Ref</h4>
      <p>HookTimer - {time}</p>
      <button onClick={timerStop}>stop timer</button>
    </div>
  )
}

export default MutableRef