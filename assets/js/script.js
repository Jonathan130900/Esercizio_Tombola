const tombola = document.getElementById('tombola');

for (let i = 0; i < 90; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.innerText = i + 1;
    tombola.appendChild(numberDiv);
}

let numeriEstratti = [];

const btnEstrai = document.getElementById('estrai');
btnEstrai.addEventListener('click', function() {

    let estratto;
    do {
        estratto = Math.floor(Math.random() * 90) + 1;
    } while (numeriEstratti.includes(estratto));

    numeriEstratti.push(estratto);

    const celle = document.querySelectorAll('#tombola div');
    for (let i = 0; i < celle.length; i++) {
        if (parseInt(celle[i].innerText) === estratto) {
            celle[i].classList.add('estratto');
            break;
        }
    }
});
