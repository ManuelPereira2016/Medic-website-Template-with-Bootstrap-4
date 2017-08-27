import React from 'react'
import Square from './square'
import PropTypes from 'prop-types'

export default class Board extends React.Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    if(e.target.innerHTML != ''){
      return false
    }
    this.props.handler(parseInt(e.target.dataset.idx))
  }

  render(){
    return (
      <div className="board">
        {
          this.props.gameState.board.map( (cell, index)=>{
            return <Square hasClick={this.props.click} index={index} key={index} onHandler={this.handleClick} value={cell} />
          })
        }
      </div>
    )
  }
}

Board.propTypes = {
  gameState: PropTypes.object,
  click: PropTypes.number,
  handler: PropTypes.func
}