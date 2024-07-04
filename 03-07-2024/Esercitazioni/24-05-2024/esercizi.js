

const appEl = document.querySelector('.app');
appEl.insertAdjacentHTML('afterbegin', '<div><h1>Ciao a tutti, ecco una lista di Nomi!</h1>');
appEl.append('Ecco una lista di Nomi e Cognomi');



const button = document.createElement ('button');
appEl.insertAdjacentElement('afterend', button);
button.innerHTML = 0;
button.onmouseenter = function(){
     this.style.backgroundColor = 'pink';
     this.style.fontSize = '30px';
}
button.onmouseleave = function(){
    this.style.backgroundColor = 'purple';
    this.style.fontSize = '20px';
    this.style.transition = 'all 1s';
}
button.onclick = function(){
    this.style.backgroundColor = 'turquoise';
    this.style.fontSize = '30px';
    this.style.borderRadius = '10px';
    this.style.rotate = '10deg';
    this.style.transition = 'all 1s';
    this.style.marginTop = '30px';
    const html = this.innerHTML;
    const count = Number(html) || 0;
    this.innerHTML = count + 1;
}







const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const liEl = document.querySelector('.list');

formEl.onsubmit = function(event){
    event.preventDefault();
    const inputValue = inputEl.value.trim();
    if(inputValue && inputValue.includes(' ')){
        const li = document.createElement('li');
        li.innerText = inputValue;
    liEl.append(li);
    inputEl.value = '';
    li.onclick = function(){
        console.log(liEl.innerText);
        }
    }

}


