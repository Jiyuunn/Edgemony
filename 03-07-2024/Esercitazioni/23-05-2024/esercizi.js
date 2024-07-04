//Usando il querySelector prendiamo l'elemento con id heading ed eseguiamo un console.log

console.log (document.getElementById("heading"));

//Per ogni elemento button presente in pagina stampiamo in console il suo testo:

const buttonEls = document.querySelectorAll(".container button");

for (let el of buttonEls) {
    console.log ("Text:" + el.innerHTML);

}

/*salviamo due variabili con dentro i riferimenti ai due button della pagina resetBtn e clickBtn;

inseriamo una function dentro l'evento onclick di clickBtn e per ogni click:

leggiamo il valore attuale del proprio innerHTML

convertiamo il valore a numero, se NaN portiamolo a 0;
incrementiamo il valore precedente e salviamolo in innerHTML;
inseriamo una function dentro l'evento onclick di resetBtn e per ogni click impostiamo innerHTML di clickBtn a "0";*/

const resetBtn = document.body.querySelector(".container button");
const clickBtn = document.body.querySelectorAll(".container button") [1];
clickBtn.onclick = function() {
 let clickBtntoNum = Number(clickBtn.innerHTML);
 if (isNaN(clickBtntoNum)) {
    clickBtn.innerHTML = 0;
 } else {
    clickBtn.innerHTML++;
 };
};
resetBtn.onclick = function() {
    clickBtn.innerHTML = 0;
};
