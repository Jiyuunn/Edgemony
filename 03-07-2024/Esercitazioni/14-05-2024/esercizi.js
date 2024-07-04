/* 1- definiamo variabile che contiene una stringa */
/* 2- Usiamo i doppi apici e salviamo la stringa: Ciao Mondo! */

let phrase = "Ciao Mondo!";

/* 3- Usiamo i singoli apici e salviamo la stringa: Mio zio viene dalla città di l'Aquila
Occhio ad usare un escape per i singoli apici dentro la stringa!!*/

let phrase1 = 'Mio zio viene dalla città di L\'Aquila';

/* 4- Usiamo il backtick per concatenare le due stringhe precendti dentro una nuova, usiamo anche "l'andata a capo"*/

let phrase2 =  `

${phrase} 

${phrase1}`;

console.log(phrase2);

/* 5- Creiamo una nuova variabile in cui inseriamo una variabile precedente che modifichiamo portato il tutto in maiuscolo (.toUpperCase())*/

let upperCase = phrase2.toUpperCase();

console.log(upperCase);

/* 6- Definiamo una variabile e salviamo all'interno un dato passato dall'utente tramite prompt()*/
/* 7- Facciamo un console.log del dato precedento portato a lowercase
Chiediamo al nostro user un numero da 1 a 10 tramite prompt e solo se maggiore di 7 esclamare in console che ha vinto!*/

let insertnumber = prompt('Inserisci un numero da 1 a 10');

if (insertnumber > 7) {
    console.log('Hai vinto!');
} else if (insertnumber <= 7) {
    console.log('Hai perso!');
} 
else (insertnumber == NaN)
    console.log('Inserisci un numero');
