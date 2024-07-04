// Creazione dell'orologio
function creaOrologio() {
  const orologio = document.createElement("div");
  orologio.classList.add("orologio");

  const ora = document.createElement("span");
  ora.classList.add("ora");
  const separatore1 = document.createElement("span");
  separatore1.textContent = ":";
  separatore1.classList.add("separatore");
  const minuti = document.createElement("span");
  minuti.classList.add("minuti");
  const separatore2 = document.createElement("span");
  separatore2.textContent = ":";
  separatore2.classList.add("separatore");
  const secondi = document.createElement("span");
  secondi.classList.add("secondi");

  orologio.appendChild(ora);
  orologio.appendChild(separatore1);
  orologio.appendChild(minuti);
  orologio.appendChild(separatore2);
  orologio.appendChild(secondi);

  return orologio;
}

// Aggiornamento dell'orologio ogni secondo
function aggiornaOrologio() {
  const ora = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  const [ore, minuti, secondi] = ora.split(":");

  const orologio = document.querySelector(".orologio");
  orologio.querySelector(".ora").textContent = ore;
  orologio.querySelector(".minuti").textContent = minuti;
  orologio.querySelector(".secondi").textContent = secondi;
}

// Inserimento dell'orologio nel documento
const orologioContainer = document.getElementById("orologio-container");
const orologio = creaOrologio();
orologioContainer.appendChild(orologio);

// Variabili per l'intervallo dell'orologio
let intervalId;

// Funzione per avviare l'orologio
function startOrologio() {
  if (!intervalId) {
      aggiornaOrologio();
      intervalId = setInterval(aggiornaOrologio, 1000);
  }
}

// Funzione per fermare l'orologio
function stopOrologio() {
  clearInterval(intervalId);
  intervalId = null;
}

// Aggiorna l'orologio immediatamente al caricamento della pagina
aggiornaOrologio();

// Event listener per i bottoni
document.getElementById("start").addEventListener("click", startOrologio);
document.getElementById("stop").addEventListener("click", stopOrologio);
