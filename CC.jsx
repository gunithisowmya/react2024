import React, { Component } from 'react'

export default class CC extends Component {
  constructor(){
    super()
    console.log('constructor')
    this.state={
        date:1,month:1,year:2024
    }
  }
  componentDidMount(){
    console.log('Mounting')
    setInterval(()=> {
        this.setState({date:this.state.date+1})
    },1000)
}
  componentDidUpdate(){
    console.log('update')
    if(this.setState.date===31)
    {
        alert('its month end!')
        this.setState({month:this.state.month+1})
        this.setState({date:1})
        if(this.state.month===12)
        {
            alert('its tear end')
            this.setState({year:this.state.year+1})
            this.setState({month:1})
        }
    }
  }
  componentWillUnmount() {

  }

    render() {
        console.log('rendering')
    return (
        <>
      <h1>Date:{this.state.date}-{this.state.month}-{this.state.year}</h1>
      </>
    );
  }
}