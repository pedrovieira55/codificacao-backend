let ganguetaz = [];

if (ganguetaz.length === 0) {
    ganguetaz.unshift('taz');
}

ganguetaz.push('Frajola', 'Eufrazino', 'Piu-Piu', 'Gaguinho');

if (ganguetaz[ganguetaz.length - 1] !== 'taz') {
    ganguetaz.pop();
}

if (ganguetaz.length > 0 && ganguetaz[0].length < 5){
    ganguetaz.shift();
}

let nomesTerminadosEmA = ganguetaz.some(nome => nome.toLowerCase().endsWith('a'));
if (nomesTerminadosEmA) {
    ganguetaz.push('Tina');
}

let copiaFiltrada = ganguetaz.filter(nome => nome.length >= 5 && nome.length <= 8);

//console.log(ganguetaz);
console.log(copiaFiltrada);
