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
  	for (var i = 0; i < 6; i++) {
  	  for (var j = 0; j < 7; j++) {
  		var set = i.toString() + ', ' + j.toString();
  		result.push(getSquare(set));
  	  }
  	}
  	console.log(result);
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
 	  this.setState({player1: true, playable: false});
 	}
 	if (this.props.turn === 'player2') {
 	  this.setState({player2: true, playable: false})
 	}
 	this.props.handleClick();
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
