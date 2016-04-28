var s1 = document.getElementById ('s1');
var s2 = document.getElementById ('s2');
var s3 = document.getElementById ('s3');

var s4= document.getElementById ('s4');
var s5= document.getElementById ('s5');
var s6 = document.getElementById ('s6');

var s7= document.getElementById ('s7');
var s8= document.getElementById ('s8');
var s9 = document.getElementById ('s9');

var gb = document.getElementById ('gameboard');

var box = document.getElementsByName('box');

var h2 = document.getElementById('h2');

var xoro = 1
var moves = 0


s1.addEventListener('click', select, false);
s2.addEventListener('click', select, false);
s3.addEventListener('click', select, false);

s4.addEventListener('click', select, false);
s5.addEventListener('click', select, false);
s6.addEventListener('click', select, false);

s7.addEventListener('click', select, false);
s8.addEventListener('click', select, false);
s9.addEventListener('click', select, false);


function winCheck(e) {
    if (s1.className == 'Xcomplete' && s2.className == 'Xcomplete' && s3.className == 'Xcomplete') {
        console.log('X wins');
        gameOverX();
        }
    else if (s4.className == 'Xcomplete' &&
             s5.className == 'Xcomplete' &&
             s6.className == 'Xcomplete') {
             console.log('X wins w/row 2');
             gameOverX();
    }
    else if (s7.className == 'Xcomplete' &&
             s8.className == 'Xcomplete' &&
             s9.className == 'Xcomplete') {
             console.log('X wins w/row 3');
             gameOverX();
        }
    else if (s1.className == 'Xcomplete' &&
             s5.className == 'Xcomplete' &&
             s9.className == 'Xcomplete') {
             console.log('X wins');
             gameOverX();
        }
    else if (s3.className == 'Xcomplete' &&
             s5.className == 'Xcomplete' &&
             s7.className == 'Xcomplete') {
             console.log('X wins');
             gameOverX();
        }
    else if (s1.className == 'Xcomplete' &&
             s4.className == 'Xcomplete' &&
             s7.className == 'Xcomplete') {
             console.log('X wins');
             gameOverX();
        }
     else if (s2.className == 'Xcomplete' &&
             s5.className == 'Xcomplete' &&
             s8.className == 'Xcomplete') {
             console.log('X wins');
             gameOverX();
        }
     else if (s3.className == 'Xcomplete' &&
             s6.className == 'Xcomplete' &&
             s9.className == 'Xcomplete') {
             console.log('X wins');
             gameOverX();
        }
    else if (s1.className == 'ocomplete' && s2.className == 'ocomplete' && s3.className == 'ocomplete') {
             console.log('o wins');
             gameOverO();
        }
    else if (s4.className == 'ocomplete' &&
             s5.className == 'ocomplete' &&
             s6.className == 'ocomplete') {
             console.log('o wins w/row 2');
             gameOverO();
    }
    else if (s7.className == 'ocomplete' &&
             s8.className == 'ocomplete' &&
             s9.className == 'ocomplete') {
             console.log('o wins w/row 3');
             gameOverO();
        }
    else if (s1.className == 'ocomplete' &&
             s5.className == 'ocomplete' &&
             s9.className == 'ocomplete') {
             console.log('o wins');
             gameOverO();
        }
    else if (s3.className == 'ocomplete' &&
             s5.className == 'ocomplete' &&
             s7.className == 'ocomplete') {
             console.log('o wins');
             gameOverO();
        }
    else if (s1.className == 'ocomplete' &&
             s4.className == 'ocomplete' &&
             s7.className == 'ocomplete') {
             console.log('o wins');
             gameOverO();
        }
     else if (s2.className == 'ocomplete' &&
             s5.className == 'ocomplete' &&
             s8.className == 'ocomplete') {
             console.log('o wins');
             gameOverO();
        }
     else if (s3.className == 'ocomplete' &&
             s6.className == 'ocomplete' &&
             s9.className == 'ocomplete') {
             console.log('o wins');
             gameOverO();
        }
    else {
        
    }
}
    
    
function gameOverO() {
    h2.textContent = "Game Over O Wins!";    
}
function gameOverX() {
    h2.textContent = "Game Over X Wins!";    
}

function gameOverC() {
    h2.textContent = "Meow.. Cats Game";
}
function select(e) {
    if (e.target.className == 'box') {
        moves += 1;
        console.log(moves);
        console.log('a move was been made');
        
        if (xoro == 1) {
            e.target.className = 'Xcomplete';
            e.target.innerHTML = "<img src='cross.png'>";
            winCheck(e);
            xoro = 0;
        }
        else {
            e.target.className = 'ocomplete';
            e.target.innerHTML = "<img src='o.png'>";
            winCheck(e);
            xoro = 1;
        }
        
        if (moves == 9) {
            
            console.log("Cats Game");
    
        }
        else {
        
        }
    }
    else {
        console.log("the move has already been made");
    }
}

