const React = require('react');
const ReactDOM = require('react-dom');

class Board extends React.Component {

	createBoard() { 
		let board = [];
		
	    for (let i = 0; i < 7; i++) {
	      let children = []
	      for (let j = 0; j < 8; j++) {
	        children.push(<td>{`Column ${j + 1}`}</td>)
	      }
	      board.push(<tr>{children}</tr>)
	    }
    return board;
	}

	render() {
		return (
			<table key='board'>
				{this.createBoard()}
			</table>
		);
	}
}

ReactDOM.render(<Board />, document.getElementById('board'));