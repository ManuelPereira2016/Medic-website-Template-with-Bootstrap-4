import React from 'react'
import PropTypes from 'prop-types'

export default class Hud extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="hud">
        <div className="score">Score: <span id={'score-value'}>{this.props.score}</span>
        </div>
      </div>
    )
  }
}

Hud.propTypes = {
  score: PropTypes.number
}