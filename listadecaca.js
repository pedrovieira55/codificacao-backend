let listahortelino = [];

if (listahortelino[0] !== 'Pernalonga') {
    listahortelino.push('Pernalonga');
}

const aves = ['patolino', 'Piu-Piu', 'Frangolino'];
let jatemAves = listahortelino.some(personagem => aves.includes(personagem));

if (!jatemAves) {
    listahortelino.unshift('patolino');
} else {
    listahortelino.push('patolino');
}

let posicaoPatolino = listahortelino.indexOf('patolino');
if (posicaopatolino > 2) {
    listahortelino.splice(posicaoPatolino, 1);
}
if (listahortelino.length >= 2) {
    listahortelino.push('Frajola');
}

let listaFiltrada = listahortelino.filter(nome => {
    let comecaComP = nome.startsWith('P');
    let ultimaLetra = nome.toLowerCase().slice(-1);
    let terminaComVogal = ['a', 'e', 'i', 'o', 'u'].includes(ultimaLetra);
    return comecaComP && terminaComVogal;
});

console.log(listahortelino);
//console.log(listaFiltrada);