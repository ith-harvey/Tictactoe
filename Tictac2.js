

var headShot = document.getElementById('headShot');
var mKillz = document.getElementById("mKillz");

var turnBoard = document.getElementById('playsMade');

var overlay = document.getElementById('overlay');
var submit = document.getElementById('submit');
var restart = document.getElementById('restart');
var imgg = document.getElementsByClassName('imgg');

var turn = 1;
var numberOfPlaysMade = 0;

var player1Score = 0;
var player2Score = 0;

var mKillP1 = 0;
var mKillP2 = 0;

var player1 = ""
var player2 = ""
var playerPrint = ""

var gameover = false;


function onclickfunc() {
    var boxNumber = event.target.getAttribute("data-player");

    //checking if their is already an X or an O in the square
    if (boxNumber == "false" && document.getElementById("gameboard").getAttribute("data-has-winner") == "false") {
      // sets data-player to a 1 or a 0 (X or an O)
      event.target.setAttribute("data-player", turn);
      displayTurn();
      processBoard();
      ++numberOfPlaysMade
      turn = turn ? 0 : 1;
    }
    testCatsGame()
}

function processBoard() {
    // processing rows
    for (let x = 0; x < 3; x++) {
        processBoxGroup(3 * x, 3 * x + 3, (y) => y + 1, "row" + x);
    }

    // processing columns
    for (let x = 0; x < 3; x++){
       processBoxGroup(x, x + 7, (y) => y + 3, "column" + x);
    }

    // processing diagonals
    processBoxGroup(0, 9, (y) => y+4, "diagonal0");
    processBoxGroup(2, 7, (y) => y+2, "diagonal1");
}

function processBoxGroup(initial, condition, increment, linePosition) {
    let state = -1;
    let hasWon = true;
    let winner = -1;

    //checks row passed in for winner
    for (let y = initial; y < condition; y = increment(y)) {
        let attr = document.getElementById("s" + y).getAttribute("data-player");

        //if no play has been made in current square break
        if(attr == "false") {
            hasWon = false;
            break;
        }
        //if play has been made in square change state to 1 or 0 (X or O)
        if(state == -1) {
            state = attr;
            winner = attr;
        }
        //if last play (X or O) doesn't match current play then this check (column or row) won't pass
        else if (state != attr){
            hasWon = false;
            break;
        }
    }
    if(hasWon) {
        console.log("Player " + winner + " has won!");
        processWinner(linePosition);
    }
}

function processWinner(linePosition) {
    document.getElementById("gameboard").setAttribute("data-has-winner", true);
    document.getElementById("red-line").setAttribute("data-position", linePosition);
    playerPrint = turn==1 ? player1 : player2
    turnBoard.textContent += "\n" + playerPrint +
            " has won!"
    winnerTally();
}

function winnerTally() {
    console.log('in winnerTally',turn);
    if(turn === 1) {
        player1Score += 1;
        document.getElementById("scoreNum1").textContent = player1Score;
    }
    else {
        player2Score += 1;
        document.getElementById("scoreNum2").textContent = player2Score;
    }
}

function displayTurn() {
    let boxes = htmlToArray(document.getElementsByClassName("box"));
    let boxIndex = boxes.indexOf(event.target);

    let rowNames =
        ["top", "top", "top", "middle", "middle",
         "middle", "bottom", "bottom", "bottom"];

    let columnsNames =
        ["left", "center", "right", "left",
         "center", "right", "left", "center", "right"];

    playerPrint = turn==1 ? player1 : player2

    turnBoard.textContent += "\n" + playerPrint +
        " has made a move in " +
        rowNames[boxIndex] + ' ' + columnsNames[boxIndex];

}


function restartIt() {
    document.getElementById("gameboard").setAttribute("data-has-winner", false);
    turnBoard.textContent = "";

    let rowNames = ["top", "middle", "bottom"];
    for (var x=0; x < 3; x++) {
        for (var i=1; i < 6; i+=2) {
            document.getElementById(rowNames[x])
                .childNodes[i]
                .setAttribute("data-player", "false");
        }
    }
    turn = 1;
}

function submitForm() {
    overlay.id = "overlayh";
    player1 = document.getElementById('Player1').value;
    player2 = document.getElementById('Player2').value;
}


function Multikill(whowon) {
    if (whowon == 'x') {
        mKillP1 += 1;
        mKillP2 = 0;
        mKillSound();
    }
    else if (whowon == 'o') {
        mKillP2 += 1;
        mKillP1 = 0;
        mKillSound();
    }
    function mKillSound() {
        if(mKillP1 >= 2 || mKillP2 >= 2) {
        mKillz.play();
        }
        else {
        headShot.play();

        }
    }
}

let htmlToArray = (arr) => [].slice.call(arr);

function testCatsGame() {
  if (numberOfPlaysMade === 9 && document.getElementById("gameboard").getAttribute("data-has-winner") === 'false') {
    console.log('Cats game!');
    turnBoard.textContent += "\n Cats game!"
  }
}
