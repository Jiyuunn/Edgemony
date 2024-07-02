//Esercizio 1

/*Trova il positivo:
dato un array di numeri [-1, -2, -10, 2, 5];

scriviamo due cicli for che soddisfano ognuno una condizione:

Stampare in console solo i numeri > 0
Deve interrompere al primo numero > 0 l'esecuzione del for (break)*/

const array = [-1, -2, -10, 2, 5];
console.log(array);

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        console.log(array[i]);
    }
}

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        console.log(array[i]);
        break;
    }
}

//Esercizio 2

/* Palindromi:
abbiamo visto come si trova una parola palindroma, ma non l'abbiamo fatto in modo efficente. Quello che dovremo fare invece è: prendere una parola dall'utente tramite prompt, scomporla in array ed usare un for per poter controllare se è palindroma.

nel caso in cui non troviamo corrispondenza usiamo dal for e stampiamo in console.log un messaggio. se nell'ultimo carattere della parola non abbiamo riscontrato errori stampiamo un console.log con "Successo! è un palindromo!"

tips: ogni carattere è uguale al suo elemento specchio nella parola elemento ad indice 0 === elemento ad indice fine meno -1 elemento ad indice 1 === elemento ad indice fine meno -2 elemento ad indice i === elemento ad indice fine meno (i * -1) -1 /// length - i - 1 */

let word = prompt("Inserisci una parola");
const wordArray = word.split("");
const newArray = [];
for (let i = wordArray.length - 1; i >= 0; i--) {
    newArray.push(wordArray[i]);
}

console.log(newArray);
console.log(wordArray);

let isPalindrome = true;
for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] !== newArray[i]) {
        console.log("No, Non è un palindromo!");
        isPalindrome = false;
        break;
    }
}   

if (isPalindrome) {
    console.log("Si, è un palindromo!");
}