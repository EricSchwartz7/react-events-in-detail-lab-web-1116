import React from 'react'
import ReactDOM from 'react-dom'

class DelayedButton extends React.Component {
  constructor(){
    super()

  }

//   handleClick(event){
//     let persistedEvent = event
//     setTimeout(this.props.onDelayedClick(persistedEvent), this.props.delay)
//   }
//
//   render(){
//     return(
//       <button onClick={this.handleClick.bind(this)}>Click me!</button>
//     )
//   }
// }
  handleClick(event){
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay)
  }

  render(){
    return(
      <button onClick={this.handleClick.bind(this)}>Click me!</button>
    )
  }
}

module.exports = DelayedButton
