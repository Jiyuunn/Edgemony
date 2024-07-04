//Esercizi 20/05/2024
//Dato questo object: 

const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

//stampare un console.log per ogni skill presente in coder.skills:

for(let value of coder.skills) {
    console.log(value);
}

//salvare dentro "coder.address" due nuove proprietà da chidere all'utente tramite prompt: "country" e "street". Eseguiamo poi un console.log per controllare tutto sia OK.Stampiamo in console tutte le chiavi presenti dentro il mio oggetto.

coder.address.country = prompt('Enter your country');
coder.address.street = prompt('Enter your street');
console.log(coder);

for(let key in coder) {
    console.log(key);
}

//Per ogni proprietà presente dentro il nostro object, controlliamo la chiave. Se la prima lettera è una vocale stampiamo in console la chiave ed il suo valore.

const vowels = 'aeiou';

for(let key in coder) {
    if(vowels.includes(key[0])) {
        console.log(`${key} : ${coder[key]}`)
    }
}

//Chiediamo all'utente, tramite prompt, cosa vuole salvare dentro il nostro object e (tramite un altro prompt) quale valore voglia inserire. Salviamo quindi una nuova proprietà con chiave/valore presi dai prompt.

const key = prompt('Which key do you want to add?');
const value = prompt('Which value do you want to add?');
coder[key] = value;
console.log(coder);
