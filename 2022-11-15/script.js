//'use strict';  /* =heißt "ich will das neue JS verwenden" */
let rounds = 0;
let maxRounds = 0;
let compWin = 0;
let userWin = 0;
const NewGame = '<button class="btn gameover" type="button" ' + /* Wenn 2. zeile angefangen wird, muss ein Leerzeichen nach dem Apostroph verwendet werden */
' onclick="window.location.reload()">Spiel neu starten</button>'; /* mit welchen Apostroph angefangen wird ist egal */

function setRound() {
    maxRounds = document.querySelector('#roundsCounter').value;
    if(Number(maxRounds) > 0) {
        console.log(maxRounds);
        document.querySelector('.rounds').classList.toggle('none');
        document.querySelector('.game').classList.toggle('none');
        document.querySelector('#outputRounds').innerHTML =
            'Runde: ' + rounds +  ' von ' + maxRounds;
    }
}

function game(userChoice) {
    let result;
    function getRandomInt() {
        return Math.floor(Math.random() * 4);
    }
    let compChoice = getRandomInt();

    /* Umwandlung der Zahlen in einen String */

    switch (compChoice) {
        case 0: compChoice = "Schere"; break;
        case 1: compChoice = "Stein"; break;
        case 2: compChoice = "Papier"; break;
        case 3: compChoice = "Brunnen"; break;
    }

        /* Abfrage 1 */
        if (compChoice === "Schere") {
            switch (userChoice) {
                case "Schere": result = 0; break;
                case "Stein": result = 1; break;
                case "Papier": result = 2; break;
                case "Brunnen": result = 1; break;
            }
        }
        /* Abfrage 2 */
        if (compChoice === "Stein") {
            switch (userChoice) {
                case "Schere": result = 2; break;
                case "Stein": result = 0; break;
                case "Papier": result = 1; break;
                case "Brunnen": result = 1; break;
            }
        }
        /* Abfrage 3 */
        if (compChoice === "Papier") {
            switch (userChoice) {
                case "Schere": result = 1; break;  /* gewinnt User  */
                case "Stein": result = 2; break;    /* verliert User */
                case "Papier": result = 0; break;   /* unentschieden */
                case "Brunnen": result = 2; break;
            }
        }
        /* Abfrage 4 */
        if (compChoice === "Brunnen") {
            switch (userChoice) {
                case "Schere": result = 2; break; 
                case "Stein": result = 2; break; 
                case "Papier": result = 1; break; 
                case "Brunnen": result = 0; break; 
            }
        }

        rounds++;
        let output = 
           `<div class="flex"><span>User</span><span>Comp</span></div>` + 
           `<div class="flex"><img src="IMG/${userChoice}.png"><img src="IMG/${compChoice}.png"> </div>`;
           console.log(output);
           switch (result) {
            case 0: result = output + " Patt<br>" + userWin + " : " + compWin; break;
            case 1: userWin++; result = output + 'User gewinnt<br>' + userWin + ' : ' + compWin; break;
            case 2: compWin++; result = `${output} Computer gewinnt<br> ${userWin} : ${compWin}`; break; 
           }

           document.querySelector('#outputRounds').innerHTML = `Runde : ${rounds} von ${maxRounds}`;
           document.querySelector('#output').innerHTML = result;
        
           if (rounds === Number(maxRounds)) {
            if (userWin > compWin) {
                document.querySelector('.game').innerHTML= `<div class="gameoverText">Spiel vorbei, User hat gewonnen<br> ${NewGame}`;
            } else if(compWin > userWin) {
                document.querySelector('.game').innerHTML= `<div class="gameoverText">Spiel vorbei, Comp hat gewonnen<br> ${NewGame}`;
            } else {
                document.querySelector('.game').innerHTML= `<div class="gameoverText">Spiel vorbei, Unentschieden<br> ${NewGame}`;
            }
           }

        /* 0 = unentschieden
        1 = sieg 
        2 = verloren  */

}