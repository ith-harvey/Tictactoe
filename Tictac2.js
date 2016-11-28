

/*javascript object - key value mapping
*/
//var map = {
// s1: document.getElementById('s1'),
// s2: document.getElementById('s2'),
// s3: document.getElementById('s3'),
//
// s4: document.getElementById('s4'),
// s5: document.getElementById('s5'),
// s6: document.getElementById('s6'),
//
// s7: document.getElementById('s7'),
// s8: document.getElementById('s8'),
// s9: document.getElementById('s9'),
//}

var Gb = document.getElementById('gameboard');
var h2 = document.getElementById('h2');
var rl = document.getElementById('rLineVert');

var headShot = document.getElementById('headShot');
var mKillz = document.getElementById("mKillz");

var pM = document.getElementById('playsMade');

var p1Score = document.getElementById('p1Score');
var scoreNum1 = document.getElementById("scoreNum1");

var p2Score = document.getElementById('p2Score');
var scoreNum2 = document.getElementById("scoreNum2");

var overlay = document.getElementById('overlay');
var submit = document.getElementById('submit');
var restart = document.getElementById('restart');
var imgg = document.getElementsByClassName('imgg');

var turn = 1
var slot ={};
var start = 1;
var arr1 = new Array(3);
var n = 0;
var cts = 0;

var player1Score = 0;
var player2Score = 0;

var mKillP1 = 0;
var mKillP2 = 0;

var xoro
var player1 
var player2

var gameover = false;


for (var i = 0; i < 3; i++){
    arr1[i]= new Array(3);
    }

for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
    var key = 's' + start;
    slot[key] = { 
        xoro: 0
    };
    arr1[i][j] = slot[key]; 
    start += 1
    }
}


  function restarting() {
        for (var g = 1; g < 10; g++){
          var y = 's' + g;
          map[y].innerHTML = ' ';
          slot[y]= { 
             xoro: 0
          };
        }
      rl.id = "rLineVert";
      Gb.className = "gameboard";
      pM.innerHTML = " ";
      turn = 1;
      
  }  

function nextTurn(e) {
    if (turn == 1) {
        turn = 0;
        e.target.innerHTML = "<img src='images/cross.png' class='imgg'>";
        cts += 1;
        return 1;  
    }
    
    else {
        turn = 1;
        e.target.innerHTML = "<img src='images/o.png' class='imgg'>";
        cts += 1;
        return 4;
    }
}

function xWin(gcPath) {
    Gb.className += " dissableClick";
    h2.innerHTML = 'X Wins';
    
    if (gcPath == "h1") {
        rl.id = "rLineHoriz1";
    }
    else if (gcPath == "h2") {
        rl.id = "rLineHoriz2"
    }
    else if (gcPath == "h3") {
        rl.id = "rLineHoriz3"
    }
    else if (gcPath == "v1") {
        rl.id = "rLineVert1"
    }
     else if (gcPath == "v2") {
        rl.id = "rLineVert2"
    }
     else if (gcPath == "v3") {
        rl.id = "rLineVert3"
    }
    else if (gcPath == "d1") {
        rl.id = "rLineDiag1"
    }
      else if (gcPath == "d2") {
        rl.id = "rLineDiag2"
    }
    player1Score += 1;
    pM.textContent += "\n\n" + player1 + ' Wins';
    p1Score.textContent = "Player 1's Score: " + player1Score;
    Multikill('x');
    
}

function oWin(gcPath) {
    
    Gb.className += " dissableClick";
    h2.innerHTML = 'O Wins';
    if (gcPath == "h1") {
        rl.id = "rLineHoriz1";
    }
    else if (gcPath == "h2") {
        rl.id = "rLineHoriz2"
    }
    else if (gcPath == "h3") {
        rl.id = "rLineHoriz3"
    }
     else if (gcPath == "v1") {
        rl.id = "rLineVert1"
    }
     else if (gcPath == "v2") {
        rl.id = "rLineVert2"
    }
     else if (gcPath == "v3") {
        rl.id = "rLineVert3"
    }
      else if (gcPath == "d1") {
        rl.id = "rLineDiag1"
    }
      else if (gcPath == "d2") {
        rl.id = "rLineDiag2"
    }
    player2Score += 1;
    pM.textContent += "\n\n" + player2 + ' Wins';
    p2Score.textContent = "Player 2's Score: " + player2Score;
    Multikill('o');
}


function goCheck() {
    
        cats();
        horizChck();
        vertChck();
        diagChck1();
        diagChck2();
        
    
            function horizChck() {
            var gChck = 1;
            var n = 0;
            loop1:
                for (var i = 0; i < arr1.length; i++){
                    
                loop2:
                    for (var j = 0; j < 3; j++){
                    var key = 's' + gChck;
                    n = n + slot[key]['xoro'];
                    gChck = gChck + 1;
                         
                            if (n == 12) {
                                if (key + n == 's312') {
                                   oWin("h1");
                                   break loop1;
                               }
                                if (key + n == 's612') {
                                   oWin("h2");
                                   break loop1;
                               }
                                if (key + n == 's912') {
                                   oWin("h3");
                                   break loop1;
                               }
                                  
                                }
                            else if (n == 3) {
                               if (key + n == 's33') {
                                   xWin("h1");
                                   break loop1;
                               }
                                if (key + n == 's63') {
                                   xWin("h2");
                                   break loop1;
                               }
                                if (key + n == 's93') {
                                   xWin("h3");
                                   break loop1;
                               }
                                    
                                    
                                }
                            else {            
                    }
                    }
                    n = 0;
                }
            }
            
            function vertChck() {
            var gChck = 1;
            var n = 0;
            loop1:
                for (var i = 0; i < arr1.length; i++){
                    if (gChck == 10) {
                        gChck = 2;
                    }
                    else if (gChck == 11) {
                        gChck = 3;
                    }
                    else {}
            loop2:
                    for (var j = 0; j < 3; j++){
                    var key = 's' + gChck;
                    n = n + slot[key]['xoro'];
                    gChck += 3;
                   
                        
                    if (n == 12) {
                        if (key + n == 's712') {
                                   oWin("v1");
                                   break loop1;
                               }
                        if (key + n == 's812') {
                                   oWin("v2");
                                   break loop1;
                               }
                        if (key + n == 's912') {
                                   oWin("v3");
                                   break loop1;
                               }
                        }
                    else if (n == 3) {
                         if (key + n == 's73') {
                                   xWin("v1");
                                   break loop1;
                               }
                         if (key + n == 's83') {
                                   xWin("v2");
                                   break loop1;
                               }
                         if (key + n == 's93') {
                                   xWin("v3");
                                   break loop1;
                               }
                        }
                    else {                             
                        }
                    }
                n = 0;    
                }
            }
    
            function diagChck1() {
            var gChck = 1;
            var n = 0;
            loop1:
                for (var i = 0; i < arr1.length; i++){
                loop2:
                    for (var j = 0; j < 3 && gChck < 10; j++){
                            var key = 's' + gChck;
                            n = n + slot[key]['xoro'];
                            gChck += 4;
                            if (n == 12) {
                            if (key + n == 's912') {
                                   oWin("d1");
                                   break loop1;
                                }
                            }
                            else if (n == 3) {
                                if (key + n == 's93') {
                                   xWin("d1");
                                   break loop1;
                                }
                            }
                }
                    n = 0;
            }
            }
            
            function diagChck2() {
            var gChck = 3;
            var n = 0;
            loop1:
                for (var i = 0; i < arr1.length; i++){
                loop2:
                    for (var j = 0; j < 3 && gChck < 10 ; j++){
                     var key = 's' + gChck; 
                     n = n + slot[key]['xoro'];
                     gChck += 2;
                         if (n == 12) {
                            if (key + n == 's712') {
                                    oWin("d2");
                                    break loop1;
                                    }
                         }
                         else if (n == 3) {
                            if (key + n == 's73') {
                                xWin("d2");
                                break loop1;
                            }
                         }
                    }
                }
            }
}
    

function onclickfunc() {
    var boxNumber = event.target.getAttribute("data-player");
    if (boxNumber == "false") {
        event.target.setAttribute("data-player", turn);
        turn = turn ? 0 : 1;
        processBoard();
        displayTurn();
    }
}

function processBoard() {
    
    if (gameover) return;
    
    // processing rows
    for (let x = 0; x < 3; x++) {
        processBoxGroup(3*x, 3*x+3, (y) -> y+1); 
    }
    
    // processing columns
    for (let x = 0; x < 3; x++){
       processBoxGroup(0, x+7, (y) -> y+3);     
    }
    
    // processing diagonals
    processBoxGroup(0, 9, (y) -> y+4);
    processBoxGroup(2, 7, (y) -> y+2);
    
}    

function processBoxGroup(initial, condition, increment) {
    let state = -1;
    let hasWon = true;
    let winner = -1;
    
    for (let y = initial; y < condition; y = increment(y)) {
        let attr = document.getElementById("s" + y).getAttribute("data-player");
        if(attr == "false") {
            hasWon = false;
            break;
        }
        if(state == -1) {
            state = attr;
            winner = attr;
        }
        else if(state != attr){
            hasWon = false;
            break;
        }
    }
    if(hasWon) {
      console.log("Player " + winner + " has won!");  
    }
    
}

function displayTurn() {
    
    
}
          

function onclickfunc1() {
    if(slot[event.target.id]['xoro'] <= 0) {
        slot[event.target.id]['xoro'] = nextTurn(event);
        playsMade(event.target.id);
        goCheck();
    }
    
else{
    console.log("there is a 1(x) or 4(o) in the slot");
    }
}

function playsMade(play) { 
      if (slot[play]['xoro'] == 1) {
          playText(player1);
          
      }
      else {
        playText(player2);
      }
    function playText(name) {
          if (play == "s1") {
             pM.textContent += "\n" + name + " has made a move in top left";
          }
          else if (play == "s2") {
             pM.textContent += "\n" + name + " has made a move in top middle";
          }
          else if (play == "s3") {
             pM.textContent += "\n" + name + " has made a move in top right"
          }
          else if (play == "s4") {
             pM.textContent += "\n" + name + " has made a move in middle left";
          }
          else if (play == "s5") {
             pM.textContent += "\n" + name + " has made a move in the center";
          }
          else if (play == "s6") {
             pM.textContent += "\n" + name + " has made a move in middle right";
          }
          else if (play == "s7") {
             pM.textContent += "\n" + name + " has made a move in bottom left";
          }
          else if (play == "s8") {
             pM.textContent += "\n" + name + " has made a move in bottom middle";
          }
          else if (play == "s9") {
             pM.textContent += "\n" + name + " has made a move in bottom right" ;
          }
        }
    
}

function submitform() {
    overlay.id = "overlayh";
    player1 = document.getElementById('Player1').value;
    player2 = document.getElementById('Player2').value;
}   

function cats() {
    var t = 1
    for (var g = 1; g < 10; g++){
        var y = 's' + g;
        t = slot[y]['xoro'] * t
        }
    if (t > 0) {
    Gb.className += " dissableClick";
    h2.innerHTML = 'Cats Game';
    }
    else if (t = 0) {
    }
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

submit.addEventListener("click",submitform, false);
restart.addEventListener("click", restarting, false);

