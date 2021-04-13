$(document).ready(function() {

// Crea 10 oggetti che rappresentano una zucchina,
// indicandone per ognuno varietà, peso e lunghezza. 
var arrayZucchine = [
    {
        'varietà': 'Zucchino Giallo',
        'peso': 0,
        'lunghezza': 0
    },
    {
        'varietà': 'Zucchina Crookneck',
        'peso': 0,
        'lunghezza': 0
    },
    {
        'varietà': 'Zucchina pâtisson',
        'peso': 0,
        'lunghezza': 0
    },
    {
        'varietà': 'Zucchina trombetta di Albenga',
        'peso': 0,
        'lunghezza': 0
    },
    {
        'varietà': 'Zucchino tondo di Firenze',
        'peso': 0,
        'lunghezza': 0
    },
    {
        'varietà': 'Zucchino tondo di Nizza',
        'peso': 0,
        'lunghezza': 0
    },
    {
        'varietà': 'Zucchina rigata pugliese',
        'peso': 0,
        'lunghezza': 0
    },
    {
        'varietà': 'Zucchina bianca triestina',
        'peso': 0,
        'lunghezza': 0
    },
    {
        'varietà': 'Zucchina striata di Napoli',
        'peso': 0,
        'lunghezza': 0
    },
    {
        'varietà': 'Zucchino siciliano',
        'peso': 0,
        'lunghezza': 0
    },
];

for( var i = 0; i < arrayZucchine.length; i++ ) {
    var thisZucchina = arrayZucchine[i];
    console.log(team);

    thisZucchina.peso = getRndInteger(1 , 10);
    thisZucchina.lunghezza = getRndInteger(1 , 30);

}

console.log(arrayZucchine);
// Calcola la somma del peso di tutte le zucchine.
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
    
});

