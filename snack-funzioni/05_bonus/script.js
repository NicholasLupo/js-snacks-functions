/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.
function heyGuest(guest) {

    const time = new Date(); //Per fare dei test -> 'March 11, 2026 17:15:00'
    let hour = time.getHours();

    if (hour >= 0 && hour <= 5) {

        let goodnight = 'Buonanotte ' + guest;
        console.log(goodnight);

    } else if (hour > 13 && hour <= 17) {

        let goodafternoon = 'Buon pomeriggio ' + guest;
        console.log(goodafternoon);

    } else if (hour > 17 && hour <= 24) {

        let goodevening = 'Buonasera ' + guest;
        console.log(goodevening);

    } else {

        let goodmorning = 'Buongiorno ' + guest;
        console.log(goodmorning);

    }
}

// Invoca la funzione qui e stampa il risultato in console
heyGuest(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.