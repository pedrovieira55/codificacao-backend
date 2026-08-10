const equipepernalonga = ["pernalonga", 'frajola']

//console.log(equipepernalonga)
 
if (equipepernalonga.length <3 && !equipepernalonga.includes('patolino')) {
    console.log('patolino')
}

equipepernalonga.sort();
const indicePatolino = equipepernalonga.indexOf('patolino');
if (indicePatolino !== -1) {
    equipepernalonga.splice(indicePatolino, 1);
    equipepernalonga.push('pernalonga');
}

if (equipepernalonga.some(nome => nome.startsWith('f'))) {
    equipepernalonga.push('patolino');
}

console.log(equipepernalonga)