/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function onlyInitial (value) {

    for (let i = 0; i < value.length; i++) {

        let element = value[i];

        for (let e = 0; e < 1; e++) {

            let firstLetter = element[e];
            console.log(firstLetter);

        }
    }
}

// Invoca la funzione qui e stampa il risultato in console
onlyInitial(names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]