const tombola = document.getElementById('tombola');

for (let i = 0; i < 90; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.innerText = i + 1;
    tombola.appendChild(numberDiv);
}

const btnEstrai = document.getElementById('estrai')
btnEstrai.addEventListener('click', function() {
    extract = Math.floor(Math.random() * 90) + 1;
    const celle = document.querySelectorAll('#tombola div')
    for (let i = 0; i < celle.length; i++) {
        if (celle[i].innerText == extract) {
            celle[i].classList.add('estratto')
        }
    }
})
