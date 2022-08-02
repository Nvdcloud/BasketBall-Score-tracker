let homeScoreEl = 0;
let guestScoreEl = 0;

document.getElementById("homescore-el").textContent = homeScoreEl;
document.getElementById("guestscore-el").textContent = guestScoreEl;

function homePlusOne() {
    homeScoreEl += 1;
    document.getElementById("homescore-el").textContent = homeScoreEl;
}

function homePlusTwo() {
    homeScoreEl += 2;
    document.getElementById("homescore-el").textContent = homeScoreEl; 
}

function homePlusThree() {
    homeScoreEl += 3;
    document.getElementById("homescore-el").textContent = homeScoreEl; 
}


function guestPlusOne() {
    guestScoreEl += 1;
    document.getElementById("guestscore-el").textContent = guestScoreEl;
}


function guestPlusTwo() {
    guestScoreEl += 2;
    document.getElementById("guestscore-el").textContent = guestScoreEl;
}

function guestPlusThree() {
    guestScoreEl += 3;
    document.getElementById("guestscore-el").textContent = guestScoreEl;
}


function newGame() {
    guestScoreEl = 0;
    homeScoreEl = 0;
    document.getElementById("guestscore-el").textContent = guestScoreEl;
    document.getElementById("homescore-el").textContent = homeScoreEl;
}
  






