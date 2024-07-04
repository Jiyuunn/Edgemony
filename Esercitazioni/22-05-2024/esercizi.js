/*Scriviamo una function che prende in parametro una serie indefinita di indicazioni, per ogni indicazione stampare un console.log
nb: le indicazione possono essere solo "su" "giù" "sinistra" "destra"*/

function indicazioni(...direction) {
    for(let direct of directions) {
        if(direct === 'su' || direct === 'giù' || direct === 'sinistra' || direct === 'destra'){
            console.log(direct);
        } else {
            console.log(`${direct} non è una direzione valida`);
        }
    }
}

indicazioni('su','su','sinistra')

/* scrivere una function partendo da quella di prima, per ogni direzione salvare dentro un oggetto il numero di indicazioni uguali.*/

function directionCount(...direction){
    const moves = {
        su: 0,
        giù: 0,
        destra: 0,
        sinistra: 0
    }

    for(let direct of directions){
        if (moves.hasOwnProperty(direct)){
            moves[direct]++;
        } else {
            console.log(`${moves} non è una direzione valida`);
        }
    }
    return moves;
}
function alphabetPosition(text) {
    const alphabet = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, 
        k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, 
        t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };

    let result = [];

    for (let char of text.toLowerCase()) {
        if (alphabet[char]) {
            result.push(alphabet[char]);
        }
    }

    return result.join(' ');
}
    

/*scriviamo una function che conta quante volte viene eseguita. Attacchiamo questa function all'evento click sul body usando document.body.onclick.*/


/* document.body.onclick = function () {
    return count += 1;
} console.log(count);*/

let count = 0;
const countClick = () => {
    return console.log(`Click-> ${count++}`);
} 

document.body.onclick = countClick;






