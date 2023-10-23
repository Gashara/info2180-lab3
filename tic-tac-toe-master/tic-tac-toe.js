// Game Variables
let round = 1;
let squares;
let board;
let statusDisplay;

// Initializes the game
function newGame() {
    console.log("New Game Button Clicked");
    squares = document.getElementById('board').children;
    board = [
        [squares[0], squares[1], squares[2]],
        [squares[3], squares[4], squares[5]],
        [squares[6], squares[7], squares[8]]
    ];

    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');
        squares[i].addEventListener("mouseover", () => squares[i].classList.add('hover'));
        squares[i].addEventListener("mouseleave", () => squares[i].classList.remove('hover'));
        squares[i].addEventListener("click", () => playMove(squares[i]));

        squares[i].innerHTML = "";
    }
    statusDisplay = document.getElementById("status");
    statusDisplay.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    statusDisplay.classList.remove("you-won");
}

// Handles a player move
function playMove(square) {
    if (square.innerHTML !== "") {
        console.log("Square already taken");
        return;
    }

    let currentPlayer = (round % 2 === 0) ? 'O' : 'X';
    square.classList.add(currentPlayer);
    square.innerHTML = currentPlayer;

    if (checkWin()) {
        console.log(`${currentPlayer} WINS`);
        statusDisplay.innerHTML = `Congratulations! ${currentPlayer} is the Winner!`;
        statusDisplay.classList.add("you-won");
    }

    round++;
}

// Checks if the current player has won
function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (isLineEqual(board[i]) || isLineEqual([board[0][i], board[1][i], board[2][i]])) {
            return true;
        }
    }
    return isLineEqual([board[0][0], board[1][1], board[2][2]]) ||
           isLineEqual([board[0][2], board[1][1], board[2][0]]);
}

// Utility function to check if all elements in a line are equal and not empty
function isLineEqual(line) {
    return line[0].innerHTML !== "" && line[0].innerHTML === line[1].innerHTML && line[1].innerHTML === line[2].innerHTML;
}

// Event handler for page load
window.onload = function() {
    console.log("Game initializing...");
    document.getElementsByClassName("btn")[0].addEventListener("click", newGame);
};
