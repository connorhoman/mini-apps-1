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
	var gameWon;
	var pieces = [];
	var winningLayouts = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
	for (var i = 0; i < board.length; i++) {
		pieces.push(board[i].innerHTML);
	}


	for (var i = 0; i < winningLayouts.length; i++) {
		var layout = winningLayouts[i];
		if (pieces[layout[0]] === pieces[layout[1]] && pieces[layout[0]] === pieces[layout[2]]) {
			displayWin();
			gameWon = true;
			break;
		}
	}
	if (!gameWon) {
		var tied = true;
		for (var i = 0; i < pieces.length; i++) {
			if (!pieces[i]) {
				tied = false;
			}
		}
		if (tied) {
			displayTie();
		};
	}
}


// Controllers --------------------------

var changeSquare = function(square) {
	if (!square.innerHTML) {
		square.innerHTML = currentTurn;
		winChecker();
		changeTurn();
	}
}

var newGame = function() {
	// wipe board clean
}


// View --------------------------

var displayWin = function() {
	console.log(currentTurn, 'has WON!');
}

var displayTie = function() {
	console.log('TIE!')
}
