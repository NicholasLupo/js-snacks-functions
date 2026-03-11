/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
const onlyVocals = (text) => {

    let vocals = ['a', 'e', 'i', 'o', 'u'];
    let countVocals = '';
    
    for (let i = 0; i <= text.length; i++) {

        let letter = text[i];

        for (let p = 0; p < vocals.length; p++) {

            let singleVocal = vocals[p];

            if (letter == singleVocal) {

                countVocals += letter;
                console.log(letter);

            }
        }

        if (i == text.length) {

            console.log(countVocals.length);

        }
    }
}

// Invoca la funzione qui e stampa il risultato in console
onlyVocals(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)