let scoreHome = document.getElementById("score-card")
let scoreGuest = document.getElementById("score-card-2")
let countHome = 0
let countGuest = 0
function addOneHome(){
    countHome += 1
    scoreHome.textContent = countHome
}
function addOneGuest(){
    countGuest += 1
    scoreGuest.textContent = countGuest
}

function addTwoHome(){
    countHome += 2
    scoreHome.textContent = countHome
}

function addTwoGuest(){
    countGuest += 2
    scoreGuest.textContent = countGuest
}

function addThreeHome(){
    countHome += 3
    scoreHome.textContent = countHome
}

function addThreeGuest(){
    countGuest += 3
    scoreGuest.textContent = countGuest
}

function reset(){
    countHome = 0
    scoreHome.textContent = countHome
    countGuest = 0
    scoreGuest.textContent = countGuest
    foulHome = 0
    addHomeFoul.textContent = foulHome
    foulGuest = 0
    addGuestFoul.textContent = foulGuest
    leaderResult.textContent = " "
}

let leaderResult = document.getElementById("leader-result")
let numberOfFouls = document.getElementById("foul-result")
function leaderMessage(){
    if(countHome > countGuest){
        leaderResult.textContent = "The Home Team Wins!"
    }
    else if(countGuest > countHome){
        leaderResult.textContent = "The Guest Team Wins!" 
    }
     else if(countGuest === countHome){
        leaderResult.textContent = "Down to Overtime!" 
    }
    
    if(foulHome >= 6 && foulGuest >= 6){
         numberOfFouls.textContent = "A Player from Both Teams was Ejected!"
    }
    else if(foulGuest >= 6){
         numberOfFouls.textContent = "Player from Guest Team was Ejected!"
    }
    else if(foulHome >= 6){
        numberOfFouls.textContent = "Player from Home Team was Ejected!"
    }
    
}

let addHomeFoul = document.getElementById("foul-score-1")
let addGuestFoul = document.getElementById("foul-score-2")

let foulHome = 0
let foulGuest = 0

function homeFoul(){
    foulHome += 1
    addHomeFoul.textContent = foulHome
}
function guestFoul(){
    foulGuest += 1
    addGuestFoul.textContent = foulGuest
}


