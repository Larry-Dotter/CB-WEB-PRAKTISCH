"use strict";

/* alert("Hallo " + prompt(message:"Gib deinen Namen ein") + " zum Abendkurs"); */

document.write('Abendkurs: ' + typeof "Abendkurs" + '<br>');
document.write('3.14: ' + typeof 3.14 + '<br>'); 
document.write('7:: ' + typeof 7 + '<br>'); 
document.write('NaN: ' + typeof "NaN" + '<br>'); 
document.write('false: ' + typeof "Abendkurs" + '<br>'); 
document.write('Abendkurs: ' + typeof false + '<br>'); 
document.write('[1,2,3,4]: ' + typeof "[1,2,3,4]" + '<br>'); 
document.write("{name:'John', age:34}: " + typeof {name:'John', age:34} + '<br>'); 
document.write('new Date(): ' + typeof "new Date()" + '<br>'); 
document.write('function(): ' + typeof function () {} + '<br>'); 
document.write('myCar: ' + typeof "myCar" + '<br>'); 
document.write('null: ' + typeof null + '<br>'); 

/* Konstanten */
const meineKonstante = 'Ich bin ein String';
console.log(meineKonstante);
/* meineKonstante =7; - geht nicht!!! */
const neueMeineKonstante = meineKonstante + 'und noch mehr';
console.log(meineKonstante, neueMeineKonstante);
const dritteKonst = meineKonstante + neueMeineKonstante + 7 + 8;
console.log(dritteKonst);

document.write('<br><br><hr><br><br>');

//if else
let input1 = Number(prompt("Was ist das Ergebnis aus 3 + 2?"));
let input2 = Number(prompt("Was ist das Ergebnis aus 3 * 2?"));
if (input1 == 5 && input2 == 6) {  /* === überprüft Wert & typeof  == überprüft nur Wert */
    document.write("Gratuliere Du kannst rechnen");
} else if (input1 == 5 || input2 == 6) {
    document.write("Gratuliere eines der beiden ist richtig");
} else {
    document.write('Probiers noch mal');
}

// Switch Case

let article = prompt("Wleches Produkt suchst du?");
switch (article) {
    case "Krapfen":
        alert('Preis: 1.99 $');
        break;
        case "Semmel":
            case "Kornspitz":
                alert('Preis: 0.99 $');
                break;
                default:
                    alert('Produkt nicht gefunden');
}

/* Arrays */

/* let myArray = new Array(); */
//oder
let myArray = ["Bohrmaschien", "Schraubmaschine", "Hammer"];
console.log(myArray);
myArray[3] = "Vorschlaghammer";
console.log(myArray.length);
myArray[myArray.length] = "Kreissäge";
console.log(myArray.length);

let multiArray = [];
multiArray[0] = ["Bohrmaschine", 34.99, true];
multiArray[1] = ["Schraubenzieher", 9.99, false];
multiArray[2] = ["Hammer", 2.99, true];
document.write(multiArray[0][1] +'<br>');
document.write(multiArray[2][2] +'<br>');
document.write(multiArray);
console.log(multiArray);

document.write('<br><br><hr><br><br>');

//map

let myMap = new Map();
myMap.set("Produkttyp", "Bohrmaschine");
myMap.set("Preis, 34.99");
myMap.set('Verfügbarkeit', true);
document.write(myMap.get('Preis') + '<br>');
console.log(myMap);

const persons = [
{ firstname: "Andreas", lastname: "Muster"},
{ firstname: "Michaela", lastname: "Schwarz"},
{ firstname: "jayne", lastname: "Cool"}
];

console.log(persons);
document.write(persons.map(getFullName));
function getFullName(item) {
    return [item.firstname, item.lastname].join("");

}

document.write('<br><br><hr><br><br>');

//while

let eingabe = Number(prompt("bis wohin willst du zählen?"));
let i = 1;
while(i <= eingabe) {
    document.write(i + '<br>');
    i++;
}
//Do wird mindestens 1x aufgerufen
do {
    document.write(i + '<br>');
    i++;
} while(i <= eingabe);

for (let x = 1; x <= eingabe; x++) {
    document.write(x + '<br');
} 

document.write('<br><br><hr><br><br>');

/* in PHP heißt der folgende Code "for each" */
for(let value of myArray) {
    document.write(value + '<br>');
}

document.write('<br><br><hr><br><br>');

for (let value of myMap) {
    document.write("Schlüsselbegriff: " + value[0] + '<br>');
    document.write('Inhalt: ' + value[1] + '<br>');
}

document.write('<br><br><hr><br><br>');

let arr = [2,5,8,10,15,19];
let userInput = Number(prompt("Vergleichswert: "));
let j = 0;
for (let value of arr) {
    if(value == userInput) {
        document.write("Der eingegebene Wert ist im Array vorhanden<br>");
        document.write("Durchläufe: " + (j + 1) +"waren notwendig");
        break;
    }
    j++;
}

if(j === arr.length) {
    document.write("Der Wert ist nicht enthalten");
}





//Kombination map & Array

let products = [];
let firstArticle = new Map();
products[0] = firstArticle; 

