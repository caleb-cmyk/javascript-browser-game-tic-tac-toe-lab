let board = ["", "", "", "", "", "", "", "", ""];
let turn = "X";
let winner = false;
let tie = false;

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
const init = () => {
    console.log("init");
};

updateBoard = () => {
    for (let i = 0; i < board.length; i++) {
        squareEls[i].innerText = board[i]
    }
};

updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.innerText = "It is Player X's Turn";
    } else if (winner === false && tie === true) {
        messageEl.innerText = "Tie!"
    } else {
        messageEl.innerText = "Player X Wins!"
    }
};

const render = () => {
    updateBoard();
    updateMessage()
};

init();

const handleClick = (e) = {
}

squareEls[i].addEventListener("click", handleClick);