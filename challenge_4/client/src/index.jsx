import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
  createBoard() { 
	let board = [];
	for (let i = 0; i < 7; i++) {
	  let children = [];
	  for (let j = 0; j < 8; j++) {
        children.push(<td key={`${i}, ${j}`}></td>)
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
	}

	render() {

	}
}












ReactDOM.render(<Board />, document.getElementById('app'));

export default Board;