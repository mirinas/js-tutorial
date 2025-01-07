// let a = 'Hello';
// let b = 'Augustas';

// alert(a + ' ' + b);

// kintamojo sukūrimas ir stiliaus pakeitimas


let element = document.querySelector('#title');

function applyStyle() {
    // fono spalva
    element.style.background = 'lightblue';
    // teksto spalva
    element.style.color = 'green';
}

function removeStyle() {
    // fono spalva
    element.style.background = '';
    // teksto spalva
    element.style.color = '';
}

// funkcija kuri nuima stiliu