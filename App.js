import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  decrement = () => {
  console.log('decre----')
  this.setState({ count: this.state.count - 1 })
  }
  increment = () => {
    console.log('incre----')
    this.setState({ count: this.state.count + 1 })
    }

  render() {
    return (
      <>
        <h1>
          I am App{this.state.count}
        </h1>
        <button onClick={this.increment}>+</button >
        <button onClick={this.decrement}>-</button >
      </>
    )
  }
}

