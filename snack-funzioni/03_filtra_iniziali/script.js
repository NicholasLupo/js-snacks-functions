/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const letter = 'A';

// Dichiara la funzione qui.
const filterLetter = (input, verify) => {

    for (let i = 0; i < input.length; i++) {

        let element = input[i];

        for (let e = 0; e < 1; e++) {

            let firstLetter = element[e];

            if (firstLetter == verify) {

                console.log(element);

            }
        }
    }
}

// Invoca la funzione qui e stampa il risultato in console
filterLetter(names, letter);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]