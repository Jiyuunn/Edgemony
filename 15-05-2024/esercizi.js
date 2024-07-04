// Chiediamo all'utente tramite un prompt di inserire il suo nome, poi salviamo il dato in una variabile;
let userName = prompt("Inserisci il tuo nome");

// Chiediamo all'utente tramite un prompt di inserire il suo cognome, poi salviamo il dato in una variabile;

let userSurename = prompt("Inserisci il tuo cognome");

//Controlliamo che siano valori validi (non null), con almeno 3 caratteri e mostriamo tramite alert errori specifici; Se abbiamo mostrato un errore ricarichiamo la pagina usando window.location.reload();

if (userName === '') {
    alert('nessun username inserito');
    window.location.reload();
}else if (userName.length < 3) {
    alert('username troppo corto!Deve essere lungo almeno 3 caratteri');
    window.location.reload();
}else if (userSurename === '') {
    alert('nessun cognome inserito')
    window.location.reload();
}else if(userSurename.length < 3) {
    alert('cognome troppo corto!Deve essere lungo almeno 3 caratteri');
    window.location.reload();
} else {


//Prendiamo il nome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola

let firstLetterCapitalizeName = userName.charAt(0).toUpperCase();

let nameWithoutFirstLetter = userName.slice(1);

let nameCapitalize = firstLetterCapitalizeName + nameWithoutFirstLetter;

//Prendiamo il cognome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola

let firstLetterCapitalizeSurename = userSurename.charAt(0).toUpperCase();

let surenameWithoutFirstLetter = userSurename.slice(1);

let surenameCapitalize = firstLetterCapitalizeSurename + surenameWithoutFirstLetter;

//Mostriamo tramite alert "Ciao + [Nome] + [Cognome]"

alert(`Ciao ${nameCapitalize} ${surenameCapitalize} `);

/* Quizzone - Qui usiamo lo switch dove possibile
Creiamo una variabile let score = 0;;
Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
Per ogni risposta corretta aggiungiamo al score 3 punti, per ogni errata togliamo 1 punto;
Alla fine delle 4 domande mostriamo il pungeggio complessivo;
Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!" */

let score = 0;

let question1 = prompt('Qual è la capitale dell\'Australia??');
let question2 = prompt('Il vecchio nome di Tokyo fino al 1868');
let question3 = prompt('Come si chiamavano le città-stato dell\'Antica Grecia?');
let question4 = prompt('Dov\'è sepolto Alessandro Magno?');

//Risposte in minuscolo e senza spazi

question1 = question1.toLowerCase().trim();
question2 = question2.toLowerCase().trim();
question3 = question3.toLowerCase().trim();
question4 = question4.toLowerCase().trim();


//Risposte


switch (question1) {    
    case 'canberra':
        score += 3;
        break;

    default:
        score -= 1;
        break;
}

switch (question2) {    
    case 'edo':
        score += 3;
        break;

    default:
        score -= 1;
        break;
}


switch (question3) {    
    case 'polis':
        score += 3;
        break;

    default:
        score -= 1;
        break;
}


switch (question4) {    
    case 'alessandria d\'egitto':
        score += 3;
        break;

    default:
        score -= 1;
        break;
}


alert(`Il tuo punteggio è di: ${score} punti su 12`);

if (score === 12) {
    alert('Sei il nuovo campione!')
}

else { alert('Peccato, andrà meglio la prossima volta');}

}