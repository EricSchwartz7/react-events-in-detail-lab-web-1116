import React from 'react'
import ReactDOM from 'react-dom'

class CoordinatesButton extends React.Component {
  constructor(){
    super()

  }

  handleClick(event){
    this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }

  render(){
    return(
      <button onClick={this.handleClick.bind(this)}>Click me!</button>
    )
  }
}

module.exports = CoordinatesButton
