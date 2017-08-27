import React from 'react'
import PropTypes from 'prop-types'

export default class Square extends React.Component {
  constructor(props){
    super(props)
  }

  shouldComponentUpdate(nextProps){
    if(this.props.index == nextProps.index){
      if(this.props.value != nextProps.value){
        return true
      }
    }
    return false
  }

  render(){
    return ( <div className='square' data-Idx={this.props.index} onClick={this.props.onHandler}>{this.props.value}</div> )
  }
}

Square.propTypes = {
  index: PropTypes.number,
  onHandler: PropTypes.func,
  value: PropTypes.string
}