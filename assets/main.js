/* 
Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi? 
*/

// creare una variabile che indica l' orario e il minuto attuale const d = new Date();
//trovare il tempo che manca da adesso alla lezione in millisecondi
//const d = new Date("2023-09-05"); in questo modo ottengo i millisecondi che mancano a domani

const dataAttuale = new Date();
let oreAttuali = dataAttuale.getHours()
console.log(oreAttuali);
let minutiAttuali = dataAttuale.getMinutes();
let oreGiornata = converterOreMinuti(24)
function calcoloMinutiMs(minuti) {
    const risultatoInMs = minuti * 60000
    return risultatoInMs;
}
minutiAttuali = calcoloMinutiMs(minutiAttuali) // minuti in ms
console.log(minutiAttuali);

function converterOreMinuti (ore) {
    const oreInMinuti = ore * 60
    return oreInMinuti
}

let OreTrasformateInMinuti = converterOreMinuti(oreAttuali) // ore attuali in minuti
console.log(OreTrasformateInMinuti);

oreAttuali = calcoloMinutiMs(OreTrasformateInMinuti) // ore attuali in ms
console.log(oreAttuali);
oreGiornata = calcoloMinutiMs(oreGiornata) // ore di una giornata intera in ms

function minutiAlTermineGiornata(ore , minuti , giornata) {
    let minutiMancantiGiornata = giornata - (ore + minuti)
    return minutiMancantiGiornata
}

let msMancantiGiornata = minutiAlTermineGiornata (oreAttuali , minutiAttuali , oreGiornata) // ms mancanti al termine della giornata

let TempoMancanteDa00Alle9 = converterOreMinuti(9) 
TempoMancanteDa00Alle9 = calcoloMinutiMs(TempoMancanteDa00Alle9) + calcoloMinutiMs(30) // tempo mancante da 00 alle 9.30 in ms
console.log(TempoMancanteDa00Alle9);
let tempoPrimaDellaLezione = msMancantiGiornata + TempoMancanteDa00Alle9 // tempo rimanente in ms
console.log(tempoPrimaDellaLezione);

function calcoloMsMinuti(ms) {
    let msMinuti = ms / 60000
    return msMinuti
}
tempoPrimaDellaLezione = calcoloMsMinuti(tempoPrimaDellaLezione) * 60
console.log(tempoPrimaDellaLezione);

let clock = setInterval(function() {
    document.querySelector("div").innerHTML = ('Secondi rimanenti alla prossima lezione : ' + tempoPrimaDellaLezione);
    if (tempoPrimaDellaLezione == 0) {
        clearInterval(clock);
        alert('Preparati, inizia la lezione!')
    } else {
        tempoPrimaDellaLezione --
    }

}, 1000)
