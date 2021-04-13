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
]

var somma = 0;


var small = [];
var large = [];


for( var i = 0; i < arrayZucchine.length; i++ ) {
    var thisZucchina = arrayZucchine[i];
    // console.log(thisZucchina);

    thisZucchina.peso = getRndInteger(1 , 10);
    thisZucchina.lunghezza = getRndInteger(1 , 30);

    var peso = thisZucchina.peso;
    var lunghezza = thisZucchina.lunghezza;
    
    // Calcola la somma del peso di tutte le zucchine.
    somma += peso;

    // Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
    if( lunghezza <= 15 ) {
        small.push(thisZucchina);
    } else if ( lunghezza > 15 ) {
        large.push(thisZucchina);
    }

}


console.log(arrayZucchine);
console.log('Il peso complessivo di tutte le zucchine è di: ', somma , 'Kg');

console.log('Le zucchine più piccole sono: ', small);
console.log('Le zucchine più lunghe sono: ', large);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
var sommaSmall = 0;
for( var j = 0; j < small.length; j++) {
    var thisZucchinaSmall = small[j];

    sommaSmall += thisZucchinaSmall.peso;

}

var sommaLarge = 0;
for( var z = 0; z < large.length; z++) {
    var thisZucchinaLarge = large[z];

    sommaLarge += thisZucchinaLarge.peso;

}

console.log('Peso complessivo Zucchine piccole: ', sommaSmall);
console.log('Peso complessivo Zucchine lunghe: ', sommaLarge);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
    
});

