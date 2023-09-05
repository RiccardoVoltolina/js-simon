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
document.querySelector("div").innerHTML = dataAttuale.getHours();
let oreAttuali = dataAttuale.getHours()
console.log(oreAttuali);
let minutiAttuali = dataAttuale.getMinutes()
console.log(minutiAttuali);
minutiAttuali = minutiAttuali * 60000
console.log(minutiAttuali);