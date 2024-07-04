//Scriviamo ed eseguamo una funzione che permetta di fare rapidamente un console.clear()

function clearConsole() {
    console.clear();
}
console.log(clearConsole());
console.log("welcome");
clearConsole();

//Scriviamo ed eseguamo una funzione che possa data una stringa tornarne una nuova con la prima lettera maiuscola, il resto minuscolo.

function capitalize(string) {
    let firstLetterCap = string[0].toUpperCase();
    let stringWithoutFirstLetter = string.slice(1).toLowerCase();

    return `${firstLetterCap}${stringWithoutFirstLetter}`;
}

console.log(capitalize('WELCOME'));

//Scrivere una function che dati due parametri in ingresso controlla se siano numeri e torna il numero più piccolo:

function findSmallestNumber(a, b) {
    if(typeof a === 'number' && typeof b === 'number') {
        return Math.max(a, b);
    } else {
        typeof a != 'number' && typeof b != 'number';
        return console.warn('type a number'); 
    }
}

console.log(findSmallestNumber(10, 8));
console.log(findSmallestNumber(0, 5));

//Scriviamo una function potenza che accetta due parametri: base ed esponente. Facciamo tornare alla funzione il numero "base" moltiplicato per se stesso tante volte quante indicate dall'esponente

function power(base, exponent) {

    let result = 1;
    for(let i = 0; i < exponent; i++) {
        result *= base;
    }
    if (exponent = 0) {
        result = 1;}

    return result;
}

console.log(power(4, 4));
console.log(power(5, 0));

// bonus point prevediamo anche l'elevamento a potenza con esponente 0.
/*Bonus point (opzionale): il fattoriale (n!) in matematica è il prodotto di un numero intero per tutti i numeri precedenti positivi (!==0). esempio: 5! (fattoriale di 5) è 5 * 4 * 3 * 2 * 1 = 120
scriviamo una funzione ricorsia che calcola il fattoriale di un numero passato tramite parametro e lo stampa in console.*/

function factorial(number) {
    if(number === 0) {
        return 1;
    } return number * factorial(number - 1);

}
