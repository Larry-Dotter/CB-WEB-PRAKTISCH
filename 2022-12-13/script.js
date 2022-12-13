'use strict';

function greetings(){
    let name = prompt("Gib deinen Namen ein");
    alert('Herzlich Willkommen ' + name);
}

greetings();

/* Returnwerte von Funktionen */
function greeting2() {
    let forename = prompt("Dein Vorname");
    let famimlyname = prompt("Dein Nachname");
    let returnValue = new Array();
    returnValue[returnValue.length] = forename;
    returnValue[returnValue.length] = famimlyname;
    return returnValue;
}

let functionValue = greetin2();
for (let value of functionValue) {
    document.write('' + value + '');
}

/* Übergabeparameter von Funktionen */

let user = prompt('Dein Name');
let age = prompt('Dein Alter');

function greetings3(user, age ) {
    document.write('der User' + user + 'ist' + age + ' alt');
}

greetings3(user, age);

/* Übergabe- und Rückgabeparameter von Funktionen */

function mathquestion(x) {
    let result = 2 * x * x + 5 * x + 7;
    return result;
}

let userInput = Number(prompt('gib eine Zahl ein'));
let mathresult = mathquestion(userInput);
document.write('<br>') + mathresult + '<br>';

/* Haltepunkte / Breakpoints setzen ermöglicht in der Konsole JS zu debuggen.
Dafür klickt man in der Konsole einfach auf die entsprechende Zahl links neben der Zeile */

/* Fehlerbehandlung */

let a = 1.3483895485489643339439302016728393903;
let x = prompt('Wie viele Stellen sollen angezeigt werden')

try {
    let b = a.toPrecision(x);
    document.write('Gewünschte Präzision: ' + b);
} catch(err) {
    document.write(err.name);
    document.write(err.message);

}