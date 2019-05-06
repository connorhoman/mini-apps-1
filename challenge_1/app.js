// Model --------------------------------

var currentTurn = 'X';

var changeTurn = function() {
	if (currentTurn === 'X') {
			currentTurn = 'O'; 
		} else if (currentTurn === 'O') {
			currentTurn = 'X';
		}
}

var winChecker = function() {
	var board = document.getElementsByClassName('square');
	var pieces = [];
	for (var i = 0; i < board.length; i++) {
		pieces.push(board[i].innerHTML);
	}
	// Implement tic-tac-toe rules
}


// Controllers --------------------------

var changeSquare = function(square) {
	if (!square.innerHTML) {
		square.innerHTML = currentTurn;
		winChecker();
		changeTurn();
	}
}


// View --------------------------

var newGame = function() {
	// wipe board clean
}

var displayWin = function() {
	// Show "WINNER" and X or O
}

var displayTie = function() {
	// Show "TIE"
}
