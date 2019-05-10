import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {turn: 'player1'};
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  	if (this.state.turn === 'player1') {
  	  this.setState({turn: 'player2'});
  	}
  	if (this.state.turn === 'player2') {
  	  this.setState({turn: 'player1'});
  	}
  	this.winChecker();
  }

  winChecker() {
  	var getSquare = function(coords) {
  	  var ele = document.getElementById(coords);	
  	  if (ele.getAttribute('player1') === 'true') {
  		return 1;
  	  } else if (ele.getAttribute('player2') === 'true') {
  		return 2;
  	  } else {
  		return 0;
  	  } 
  	}
  	var result = [];
  	for (var i = 0; i < 7; i++) {
  	  for (var j = 0; j < 8; j++) {
  		var set = i.toString() + ', ' + j.toString();
  		result.push(getSquare(set));
  	  }
  	}
  	var horizontalCheck = function(array) {
  	  for (var i = 0; i < array.length; i++) {
  		var rowEnds = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55];
  		if (rowEnds.indexOf(i) > -1) {
  		  continue;
  		}
  		if (array[i] === 1 && array[i + 1] === 1 && array[i + 2] === 1 && array[i + 3] === 1) {
  		  console.log('Player 1 wins!');
  		}
  		if (array[i] === 2 && array[i + 1] === 2 && array[i + 2] === 2 && array[i + 3] === 2) {
  		  console.log('Player 2 wins!');
  		}
  	  }
  	}
  	var verticalCheck = function(array) {
  	  for (var i = 0; i < 33; i++) {
  		if (array[i] === 1 && array[i + 8] === 1 && array[i + 16] === 1 && array[i + 24] === 1) {
  		  console.log('Player 1 wins!');
  		}
  		if (array[i] === 2 && array[i + 8] === 2 && array[i + 16] === 2 && array[i + 24] === 2) {
  		  console.log('Player 2 wins!');
  		}
  	  }
  	}
  	var majorDiagonalCheck = function(array) {
  	  for (var i = 0; i < 29; i++) {
  		if (array[i] === 1 && array[i + 9] === 1 && array[i + 18] === 1 && array[i + 27] === 1) {
  		  console.log('Player 1 wins!');
  		}
  		if (array[i] === 2 && array[i + 9] === 2 && array[i + 18] === 2 && array[i + 27] === 2) {
  		  console.log('Player 2 wins!');
  		}
  	  }
  	}
  	var minorDiagonalCheck = function(array) {
  	  for (var i = 0; i < 33; i++) {
  		if (array[i] === 1 && array[i + 7] === 1 && array[i + 14] === 1 && array[i + 21] === 1) {
  		  console.log('Player 1 wins!');
  		}
  		if (array[i] === 2 && array[i + 7] === 2 && array[i + 14] === 2 && array[i + 21] === 2) {
  		  console.log('Player 2 wins!');
  		}
  	  }
  	}
  	var tieChecker = function(array) {
  	  var tie = true;
  	  console.log(array);
  	  for (var i = 0; i < array.length; i++) {
  		if (array[i] === 0) {
  		  tie = false;
  		}
  	  }
  	  if (tie) {
  		console.log('TIE!');
  	  }
  	}
  	horizontalCheck(result);
  	verticalCheck(result);
  	majorDiagonalCheck(result);
  	minorDiagonalCheck(result);
  	tieChecker(result);
  }

  createBoard() { 
	let board = [];
	for (let i = 0; i < 7; i++) {
	  let children = [];
	  for (let j = 0; j < 8; j++) {
        children.push(<Square handleClick={this.handleClick} turn={this.state.turn} id={`${i}, ${j}`} key={`${i}, ${j}`} />);
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
 	if (this.props.turn === 'player1') {
 	  this.setState({player1: true, playable: false}, () => {this.props.handleClick()});
 	}
 	if (this.props.turn === 'player2') {
 	  this.setState({player2: true, playable: false}, () => {this.props.handleClick()});
 	}
  }

  render() {
  	let styles1 = {backgroundColor: 'red'};
  	let styles2 = {backgroundColor: 'blue'}

  	if (this.state.player1) {
  	  return (<td style={styles1} player1={this.state.player1.toString()} id={this.props.id} onClick={() => {this.handleClick()}} ></td>);
  	}
  	if (this.state.player2) {
  	  return (<td style={styles2} player2={this.state.player2.toString()} id={this.props.id} onClick={() => {this.handleClick()}} ></td>);
  	}
	return (<td id={this.props.id} onClick={() => {this.handleClick()}} ></td>);
  }
}

ReactDOM.render(<Board />, document.getElementById('app'));
