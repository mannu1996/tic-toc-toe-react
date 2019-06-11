import React,{Component}  from 'react';

import './App.css';
import Status from './components/Status'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      board : Array(9).fill(null),
      player : null,
      winner : null
    }
    
  }

 checkWinner() {

  let winLines = 
  [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","4","8"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","3","6"],
    ["2","5","0"],
    ["6","4","2"],
  ]

  this.checkMatch(winLines)
 }
 checkMatch(winLines) {
  for(let index = 0; index < winLines.length; index++) {
    const [a, b, c] = winLines[index];
    let board =  this.state.board
    if(board[a] && board[a] === board[b] && board[a] === board[c]){
      alert("you won");
      this.setState({
        winner : this.state.player  
      })
    }
  }

 }
 reset(){
this.setState({
player : null,
winner : null,
board : Array(9).fill(null)
})
 }




  handleClick(index){
    if(this.state.player && !this.state.winner){

      let newBoard =  this.state.board

    if(this.state.board[index] === null ) {
       newBoard[index] = this.state.player
    }
    newBoard[index] = this.state.player
    this.setState({
      board : newBoard,
      player: this.state.player === "X" ? "0" : "X"
    })
    this.checkWinner();
  }

  }
    

  setPlayer(player){
  this.setState({ player : player })
  }
  renderBoxes(){
    return this.state.board.map( 
      (box,index)=> 
      <div className="box" key = {index} 
      onClick= {() => this.handleClick(index)}>
      {box}
      </div>
      )
  }

  render(){
    
       
  return (
    <div className="container">
      <h1>Tic Tac Toe App</h1>
      <Status 
      player = {this.state.player} 
      setPlayer ={(e) => {this.setPlayer(e)}}
      winner = {this.state.winner}/>
    
    
      <div className="board">
     {this.renderBoxes()}
      </div>
      <button onClick={() => this.reset()}>Restart</button> 
    </div>

  );
  };
}

export default App;
