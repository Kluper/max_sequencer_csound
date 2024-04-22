const path = require('path');
const Max = require('max-api');
const fs = require('fs')

let lista = [];

// Handler for the first list
Max.addHandler('addToList', (...elements) => {
    lista = [...lista, ...elements];
});


// Handler to interleave the lists
Max.addHandler('interleave', () => {
    const result = [];

    const maxLength = Math.max(lista.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < lista.length) {
            result.push(lista[i]);
        }
    }

    Max.outlet(result); // Output the interleaved list
});
