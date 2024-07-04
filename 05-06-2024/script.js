// Esercizio 1:
document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        if (event.target.id === 'button1') {
            console.log('La porta del destino si apre..fai attenzione');
        } else if (event.target.id === 'button2') {
            console.log('Cammini sul sentiero del sogno..');
        } else if (event.target.id === 'button3') {
            console.log('Un\'arcana rivelazione si sta manifestando..');
        }
    }
});

// Esercizio 2:
function logThis() {
    console.log(this);
}

document.querySelectorAll('#parent button').forEach(button => {
    button.addEventListener('click', logThis);
});

// Esercizio 3, 4, 5:
document.getElementById('open-modal').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    const inputName = document.getElementById('input-name').value;
    document.getElementById('modal-message').textContent = `Benvenut* ${inputName}!`;

    let countdown = 5;
    const countdownElement = document.createElement('p');
    countdownElement.id = 'countdown';
    countdownElement.textContent = `Questa finestra si chiuderà in ${countdown} secondi. Sei pronto per conoscere il tuo futuro?`;
    modal.appendChild(countdownElement);

    const interval = setInterval(() => {
        countdown -= 1;
        countdownElement.textContent = `Questa finestra si chiuderà in ${countdown} secondi. Sei pronto per conoscere il tuo futuro?`;
        if (countdown <= 0) {
            clearInterval(interval);
            modal.style.display = 'none';
            modal.removeChild(countdownElement); 
        }
    }, 1000);
});

document.getElementById('yes').addEventListener('click', function() {
    console.log('La ricchezza e il vero amore ti troveranno presto.. tieni gli occhi aperti');
});

document.getElementById('no').addEventListener('click', function() {
    console.log('Peccato. Ci rivedremo presto...');
});

document.getElementById('close').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        modal.removeChild(countdownElement); 
    }
});
