let homeScore = document.getElementById("span-class");

homeScores = 0;

function btn1() {
    homeScores += 1;
    homeScore.textContent = homeScores
}
function btn2() {
    homeScores += 2;
    homeScore.textContent = homeScores
}
function btn3() {
    homeScores += 3;
    homeScore.textContent = homeScores
}

let guestScoreBoard = document.getElementById("span-class2")

guestScores = 0;

function guestBtn1(){
    guestScores += 1;
    guestScoreBoard.textContent = guestScores
}

function guestBtn2(){
    guestScores += 2;
    guestScoreBoard.textContent = guestScores
}

function guestBtn3(){
    guestScores +=3
    guestScoreBoard.textContent = guestScores
}

// refresh button
function refreshBtn() {
    homeScores = 0
    guestScores = 0
    homeScore.textContent = homeScores;
    guestScoreBoard.textContent = guestScores;
}


