let homeScoreEl = document.getElementById("home-score-el")
let homeScore = 0
let guestScoreEl = document.getElementById("guest-score-el")
let guestScore = 0

function homeAdd1() {
    homeScoreEl.textContent = homeScore++
}

function homeAdd2() {
    homeScoreEl.textContent = homeScore+=2
}

function homeAdd3() {
    homeScoreEl.textContent = homeScore+=3
}

 function guestAdd1() {
    guestScoreEl.textContent = guestScore++
}

 function guestAdd2() {
    guestScoreEl.textContent = guestScore+=2
}


 function guestAdd3() {
    guestScoreEl.textContent = guestScore+=3
}
