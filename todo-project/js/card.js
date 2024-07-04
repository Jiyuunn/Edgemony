/*ARRAY DI COLORI per inserirli random nelle card*/
export const cardColor = [
  "#ffdef2",
  "#f2e2ff",
  "#e2eeff",
  "#ddfffc",
  "#ffffe3",
  "#e5ffe4",
  "#ffffb0",
  "#ffe6c7",
  "#b0ceff",
];
//funzione per inserire random l'array colori nelle card
const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * cardColor.length);
  const color = cardColor[randomIndex];
  cardColor.splice(randomIndex, 1);
  return color;
};

//abbiamo selezionato e creato la card-list dove andranno tutte le card iterate in base all'oggetto
export const cardList = () => {
  const container = document.createElement("div");
  container.className = "card-list";
  return container;
};
//CREAZIONE CARD
export const card = (el) => {
  const container = document.createElement("div");
  const titleWrapper = document.createElement("div"); // Aggiunto un wrapper per il titolo e l'icona
  const title = document.createElement("h2");
  const icon = document.createElement("span"); // Aggiunto un elemento per l'icona
  const text = document.createElement("div");
  const input = document.createElement("input");
  const btn = document.createElement("button");
  const list = document.createElement("ul");
  const randomColor = getRandomColor();

  container.style.backgroundColor = randomColor;
  container.classList.add("card");

  titleWrapper.classList.add("title-wrapper"); // Aggiunto una classe al wrapper
  icon.classList.add("category-icon"); // Aggiunto una classe all'icona
  icon.innerHTML = el.icon; // Impostato il contenuto dell'icona
  title.innerHTML = el.category;
  title.className = "card__title";
  title.textContent = el.category;

  titleWrapper.appendChild(icon);
  titleWrapper.appendChild(title);

  text.className = "text";
  text.appendChild(input);
  text.appendChild(btn);

  btn.innerHTML = "Add";
  btn.classList.add("card__btn");

  input.classList.add("card__input");

  //STAMPA SU DOM l'array di items
  list.className = "todo";
  for (let i = 0; i < el.items.length; i++) {
    const liEl = document.createElement("li");

    // Aggiungi il pulsante select ad ogni elemento li
    const selectBtn = document.createElement("span");
    selectBtn.className = "select";
    selectBtn.innerHTML = "\u2714";
    liEl.insertBefore(selectBtn, liEl.firstChild);

    // Aggiungi il testo dell'elemento li
    const textSpan = document.createElement("span");
    textSpan.textContent = el.items[i];
    liEl.appendChild(textSpan);

    // Aggiungi il gestore di eventi per il pulsante select
    selectBtn.addEventListener("click", function () {
      selectBtn.classList.toggle("active");
      textSpan.classList.toggle("checked");
    });

    // Aggiungi il pulsante edit (matita) ad ogni elemento li
    const editBtn = document.createElement("span");
    editBtn.className = "edit";
    editBtn.innerHTML = "✏️";
    liEl.appendChild(editBtn);

    // Aggiungi il gestore di eventi per il pulsante edit
    editBtn.addEventListener("click", function () {
      input.value = textSpan.textContent.trim();
      liEl.remove();
    });
    // Pulsante × close ad ogni elemento li
    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "\u00D7";
    liEl.appendChild(closeBtn);

    // Rimuovi l'elemento "li" quando si fa clic sul pulsante close
    closeBtn.addEventListener("click", function () {
      liEl.remove();
    });

    list.appendChild(liEl);
  }

  container.append(titleWrapper, text, list);

  //MODALE
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];

  // Aprire modale
  function openModal() {
    modal.style.display = "block";
  }
  // Chiudere modale
  span.onclick = function () {
    modal.style.display = "none";
  };
  // Click fuori dalla modale per chiuderla
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  //al click del bottone tutto ciò che scritto in input verrà messo in fondo alla lista
  btn.addEventListener("click", () => {
    const inputValue = input.value.trim().toLowerCase();
    const listItems = list.getElementsByTagName("li");
    let itemExists = false;

    //Controllo se l'item esiste già
    for (let i = 0; i < listItems.length; i++) {
      const textSpan = listItems[i].querySelector(
        "span:not(.select):not(.edit):not(.close)" //esclude queste classi
      );
      if (
        textSpan &&
        textSpan.textContent.trim().toLowerCase() === inputValue
      ) {
        itemExists = true;
        break;
      }
    }
    if (itemExists) {
      openModal();
    } else if (inputValue !== "") {
      const newLi = document.createElement("li");

      // Aggiungi il pulsante select al nuovo elemento li
      const selectBtn = document.createElement("span");
      selectBtn.className = "select";
      selectBtn.innerHTML = "\u2714";
      newLi.appendChild(selectBtn);

      // Aggiungi il testo dell'elemento li
      const textSpanUser = document.createElement("span");
      textSpanUser.textContent = inputValue;
      newLi.appendChild(textSpanUser);

      // Aggiungi il pulsante edit (matita) ad ogni elemento li
      const editBtn = document.createElement("span");
      editBtn.className = "edit";
      editBtn.innerHTML = "✏️";

      newLi.appendChild(editBtn);

      // Aggiungi il gestore di eventi per il pulsante edit
      editBtn.addEventListener("click", function () {
        input.value = newLi.textContent.trim();
        liEl.remove();
      });

      // Aggiungi × close al nuovo elemento li
      const closeBtn = document.createElement("span");
      closeBtn.className = "close";
      closeBtn.innerHTML = "\u00D7";
      newLi.appendChild(closeBtn);

      // Rimuovi l'elemento li quando si fa clic sul pulsante close
      closeBtn.addEventListener("click", function () {
        newLi.remove();
      });

      // Aggiungi ✓ come completato
      selectBtn.addEventListener("click", function () {
        newLi.classList.toggle("checked");
      });

      list.appendChild(newLi);
      input.value = "";
    }
  });

  return container;
};