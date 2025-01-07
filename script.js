// kintamojo sukūrimas
// let a = 'Hello';
// let b = 'Augustas';

// alert(a + ' ' + b);


// funkcija kuri uzdeda stiliu
let element = document.querySelector('#title');

function applyStyle() {
    // fono spalva
    element.style.background = 'lightblue';
    // teksto spalva
    element.style.color = 'green';
}

// funkcija kuri nuima stiliu
function removeStyle() {
    // fono spalva
    element.style.background = '';
    // teksto spalva
    element.style.color = '';
}


function submitNameEnter(e) {
    if(e.key == 'Enter') {
        submitName();
    }
}


function submitName() {
    // 1. gauti <input> elementa
    let input = document.querySelector('#name-input');
    // 2. patikrinti ar ivestis teisinga
    if(input.value.length < 3) {
        alert('Name must be 3 charaters or more');
        return;
    }

    // 3. ideti perskaityta reiksme i <span>
    document.querySelector('#name-span').innerHTML = input.value;
    // 4. isvalyti <input> reiksme
    input.value = '';
}