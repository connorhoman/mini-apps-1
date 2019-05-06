// Model --------------------------------

var currentTurn = 'X';




// Controllers --------------------------

var changeSquare = function(square) {
	if (!square.innerHTML) {
		square.innerHTML = currentTurn;
		if (currentTurn === 'X') {
			currentTurn = 'O'; 
		} else if (currentTurn === 'O') {
			currentTurn = 'X';
		}
	}
}
