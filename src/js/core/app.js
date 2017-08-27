import React from 'react'
import Board from '../components/board'
import Hud from '../components/hud'
import SweetAlert from 'sweetalert-react'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      PLAYER_ONE_SYMBOL : 'X',
      PLAYER_TWO_SYMBOL : 'O',
      currentTurn : 'X',
      board : [ '', '','','','','','','',''],
      showMsg : false,
      score: 0
    }

    this.indexSelected = null

    this.winning = [[0,1,2], [0,3,6], [2,5,8], [0,4,8], [6,7,8], [3,4,5], [2,4,6]]

    this.alertShown = this.alertShown.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  componentDidUpdate(){
    setTimeout(()=>{this.win()}, 500)
  }

  checkForWinner(){
    return this.winning.find((combo)=>{
      if(this.state.board[combo[0]] == this.state.board[combo[1]] && this.state.board[combo[1]] == this.state.board[combo[2]]){
        return this.state.board[combo[0]]
      } else {
        return false
      }
    })
  }

  win(){
    if (this.checkForWinner()) {
      this.setState( (prevState)=>{
        return {
          score: prevState.score+5,
          showMsg: true,
          board: [ '', '','','','','','','','']
        }
      })
    }
  }

  toggle(index){
    // Store index clicked
    this.indexSelected = index

    let new_board = [ ...this.state.board ]
    new_board[index] = this.state.currentTurn

    this.setState({ ...this.state, board: new_board,
      currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL
    })
  }

  alertShown(){
    this.setState({ showMsg: false })
  }

  render(){
    return (
      <div className="app">
        <Hud score={this.state.score} />
        <Board click={this.indexSelected} gameState={this.state} handler={this.toggle} />
        <SweetAlert
            confirmButtonText="Keep Playing!"
            onConfirm={this.alertShown}
            show={this.state.showMsg}
            text="Congratulations, now your Score will Increase!"
            title="YOU WIN!"
        />
      </div>
    )
  }
}