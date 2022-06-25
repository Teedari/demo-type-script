import React from 'react'
type NumberType = {value: number}
type PostiveNumberOnly = {
  value: number,
  isPositive:boolean,
  isNegative?:never,
  isZero?:never
}

type NegativeNumberOnly = NumberType & {
  isNegative:boolean,
  isPositive?:never,
  isZero?:never
}

type ZeroNumberOnly = {
  value: number,
  isZero:boolean
  isNegative?:never,
  isPositive:never,
}


type RandomNumberPropsTypes = ( PostiveNumberOnly | NegativeNumberOnly | ZeroNumberOnly)

const RandomNumber = (props: RandomNumberPropsTypes) => {
  return (
    <div>
      <h4>{props.value}</h4>
      <p>The number is { props.isPositive && 'Positive'} { props.isNegative && 'Negative'} { props.isZero && 'Zero'}</p>
    </div>
  )
}

export default RandomNumber