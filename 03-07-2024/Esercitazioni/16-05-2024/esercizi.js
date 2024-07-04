/*Esercizi
Rifacciamo l'esercizio del quiz di ieri in cui chiediamo all'utente di rispondere a domande a risposta multipla, in particolare però:

Raccogliamo tutte le risposte date dall'utente anche dentro un array "risposte";
Quando diamo il risultato finale, mostriamo anche tutte le risposte date dall'utente dentro un solo console.log e dentro mettiamo anche la lunghezza del nostro array*/


let score = 0;

let answer1 = prompt("Quale è la capitale della Francia?: parigi,londra,roma,mosca");

switch (answer1) {
    case "parigi":
        score += 3;
        break;

    case "londra":
    case "roma":
    case "mosca":
        score = Math.max(0, score -1);
}


let answer2 = prompt("Quale è la capitale del Regno Unito?: londra,parigi,roma,mosca");      

switch (answer2) {
    case "londra":
        score += 3;
        break;

    case "parigi":
    case "roma":
    case "mosca":
        score = Math.max(0, score -1);
}


let answer3 = prompt("Quale è la capitale dell\'Italia?: roma,londra,parigi,mosca");  

switch (answer3) {
    case "roma":
        score += 3;
        break;

    case "londra":
    case "parigi":
    case "mosca":
        score = Math.max(0, score -1);
}


let answer4 = prompt("Quale è la capitale della Russia?: roma,londra,parigi,mosca");  

switch (answer4) {
    case "mosca":
        score += 3;
        break;

    case "roma":
    case "londra":
    case "parigi":
        score = Math.max(0, score -1);
}

alert (`Hai totalizzato ${score} punti`);

const arrayAnswer = [];

arrayAnswer.push(answer1, answer2, answer3, answer4);

console.log('risposte date', arrayAnswer, arrayAnswer.length);

if (score === 12) {
    alert('Sei il nuovo campione!');
}
else { 
    alert('Ritenta!');
}


/*Raccogliamo tramite prompt (eseguito tre volte) 3 parole dall'utente, per ogni parola ricevuta mostriamo in console "vocale" o "consonante" in base alla prima lettera. Usiamo un solo console.log per ogni parola sfruttando la potenzialità dell'operatore ternario.*/


let firstWord = prompt('inserisci una parola');

let vowels = 'aeiou';


let firstLetter = firstWord[0];


let isVowel = vowels.includes(firstLetter);


let isVowelOrCons = (isVowel) ? 'vocale' : 'consonante';
alert(`${isVowelOrCons}`);
console.log(isVowelOrCons);

let secondWord = prompt('inserisci una parola');


firstLetter = secondWord[0];


isVowel = vowels.includes(firstLetter);


isVowelOrCons = (isVowel) ? 'vocale' : 'consonante';
alert(`${isVowelOrCons}`);
console.log(isVowelOrCons);

let thirdWord = prompt('inserisci una parola');

firstLetter = thirdWord[0];

isVowel = vowels.includes(firstLetter);

isVowelOrCons = (isVowel) ? 'vocale' : 'consonante';
alert(`${isVowelOrCons}`);
console.log(isVowelOrCons);


/*Data una parola stampiamo in console la parola al rovescio. Per farlo prima usiamo il metodo split delle stringhe che trasforma una stringa in array e poi controlliamo se esiste un metodo per invertire gli elementi...*/

const string = "hello";
console.log(string);

const stringSplit = string.split("");
console.log(stringSplit);

const reverseString = stringSplit.reverse();
console.log(reverseString);

const reverseStringJoin = reverseString.join("");
console.log(reverseStringJoin);
