// Model --------------------------------

var currentTurn = 'X';
var gameWon = false;

// Controllers --------------------------

var changeSquare = function(square) {
	if (!square.innerHTML && !gameWon) {
		square.innerHTML = currentTurn;
		winChecker();
		changeTurn();
	}
}

var changeTurn = function() {
	if (currentTurn === 'X' && !gameWon) {
			currentTurn = 'O'; 
		} else if (currentTurn === 'O' && !gameWon) {
			currentTurn = 'X';
		}
}

var newGame = function() {
	var board = document.getElementsByClassName('square');
	for (var i = 0; i < board.length; i++) {
		board[i].innerHTML = '';
	}
	gameWon = false;
}


// View --------------------------

var winChecker = function() {
	var board = document.getElementsByClassName('square');
	var pieces = [];
	var winningLayouts = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
	for (var i = 0; i < board.length; i++) {
		pieces.push(board[i].innerHTML);
	}

	for (var i = 0; i < winningLayouts.length; i++) {
		var layout = winningLayouts[i];
		if (pieces[layout[0]] === pieces[layout[1]] && pieces[layout[0]] === pieces[layout[2]]) {
			if (pieces[layout[0]] !== '') {
				displayWin();
				gameWon = true;
				currentTurn = pieces[layout[0]];
				break;
			}
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

var displayWin = function() {
	window.alert(currentTurn + ' has WON!');
}

var displayTie = function() {
	window.alert('TIE!')
}
