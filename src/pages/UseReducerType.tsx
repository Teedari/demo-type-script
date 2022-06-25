import React, {useReducer} from 'react'

type state = {
  count:number
}
enum Actions {
  INCREMENT,
  DECREMENT,
  RESET
}

type NonRequiredPaylod = {
  type: Actions.RESET
}
type RequiredPayload = {
  payload:number,
  type: Actions.DECREMENT | Actions.INCREMENT
}

const intialState = {
  count: 0
}

const reducer = (state:state, action:RequiredPayload | NonRequiredPaylod ) => {
  switch(action.type){
    case Actions.INCREMENT:
      return {count: state.count + action.payload}
    case Actions.DECREMENT:
      if (state.count <= 0){
        return state
      }
      return {count: state.count - action.payload}
    case Actions.RESET:
      return intialState
    default:
      return state
  }
}
const UseReducerType = () => {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <div>
      <h1>Learning Typescript with useReducer</h1>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({type: Actions.INCREMENT, payload: 1})}>+</button>
      <button onClick={() => dispatch({type: Actions.DECREMENT, payload: 1})}>-</button>
      <button onClick={() => dispatch({type: Actions.RESET})}>C</button>
    </div>
  )
}

export default UseReducerType