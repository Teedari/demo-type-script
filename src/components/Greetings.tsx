import React from 'react'
import Person from './Person'

type props = {
  topic: string,
  message: Array<string>
}


function Greetings(props: props) {
  const person = {
    first: 'John',
    last: 'Doe'
  }
  const personList = [
    {
      fullname: 'Musah Pillars',
      age: 22
    },
    {
      fullname: 'Frederick Amissah',
      age: 20
    },
  ]
  return (
    <div>
      <h2>Welcome to Typescript Tutorial Lesson - {props?.topic} </h2>
      <Person friends={personList} first_name={person?.first} last_name={person?.last} />
      <p>You have {props.message.length} unread messages</p>
    </div>
  )
}

export default Greetings
