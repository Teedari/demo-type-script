import React, { useState } from 'react'

type props = {
  count: () => number
}

const CountButton = (props:props) => {
  const [count, setCount] = useState(0)
  const addCountHandler = () => {
    setCount(props.count())
  }
  return (
    <div>
      <h5>{count}</h5>
      <button onClick={addCountHandler}>Count</button>
    </div>
  )
}

export default CountButton