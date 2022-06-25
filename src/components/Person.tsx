import React from 'react'

type props = {
  first_name: string, 
  last_name: string,
  friends: {
    fullname: string,
    age: number
  }[]
}

function Person(props: props) {
  return (
    <div>
      <h4>Hello {props?.first_name} {props?.last_name}</h4>
      <ul>
      {
        props.friends.map( (value, key) => <li key={key}>{value.fullname}</li>)
      }

      </ul>
    </div>
  )
}

export default Person