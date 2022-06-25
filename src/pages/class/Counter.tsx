import React, { Component } from 'react'


type Props = {
  message: string
}
type StateProps = {
  counter: number
}

class Counter extends Component<Props, StateProps>{
  state = {
    counter: 0
  }
  incrementHandler = () => {
    this.setState((prev) => ({
      counter: prev.counter + 1
    }))
  }
  render(){
    return (
      <div>
        <h2>{this.props.message}{this.state.counter}</h2>
        <button onClick={this.incrementHandler}>Increment</button>
      </div>
    )
  }
}

export default Counter
