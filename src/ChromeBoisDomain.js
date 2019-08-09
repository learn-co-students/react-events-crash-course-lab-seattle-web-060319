import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleClick = (event) => {
    toggleCycling()
  }


   handleMouseMove = (event) => {
     drawChromeBoiAtCoords(event.clientX, event.clientY)
   }

   handleKeyPress = (event) => {
     if (event.key === 'a') {
       resize('+')
     } else if (event.key === 's') {
       resize('-')
     }
  }

  render() {
    return (
      <canvas
        onKeyPress={this.handleKeyPress}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
