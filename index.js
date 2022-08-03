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
  
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" +  minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    
    }, 1000);

}
  window.onload = function () {
    let tenMinutes = 60 * 10,
        display  = document.querySelector('#timer');
        startTimer(tenMinutes, display);
  };





