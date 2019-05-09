import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {turn: 'player1'};
  	this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
  	console.log('board clicked');
  }

  createBoard() { 
	let board = [];
	for (let i = 0; i < 7; i++) {
	  let children = [];
	  for (let j = 0; j < 8; j++) {
        children.push(<Square handleClick={this.handleClick} id={`${i}, ${j}`} key={`${i}, ${j}`} />)
      }
      board.push(<tr key={`${i}`}>{children}</tr>);
	}
    return board;
  }

  render() {
	return (
   	  <table key='board'>
   	    <tbody>
   		  {this.createBoard()}
   		</tbody>
	  </table>
	);
  }
}

class Square extends Board {
  constructor(props) {
	super(props);
	this.state = {
	  player1: false,
	  player2: false,
	  playable: true
	}
  }

  handleClick() {
 	this.props.handleClick();
  }

  render() {
  	if (this.state.player1) {
  	  return (<td style="background-color: blue" onClick={() => {this.handleClick()}} ></td>)
  	}
  	if (this.state.player2) {
  	  return (<td style="background-color: red" onClick={() => {this.handleClick()}} ></td>)
  	}
	return (<td onClick={() => {this.handleClick()}} ></td>);
  }
}

ReactDOM.render(<Board />, document.getElementById('app'));
