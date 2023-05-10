
// variabile per selezionare nel dom il div che ha l'id "container"
const container = document.getElementById("container");


//array vuoto
let bombArr = [];
// Finché l'array non ha 16 elementi, genera numeri casuali unici tra 1 e 100 e li aggiunge all'array
while (bombArr.length < 16) {
let randomNum = Math.floor(Math.random() * 100) + 1;
// Se il numero non è già presente nell'array, lo aggiunge
if (!bombArr.includes(randomNum)) {
    bombArr.push(randomNum);
}
}
console.log(bombArr);

// creare constante per selezionare l'id del button
const buttonGenera = document.getElementById("genera");


// creare l'evento al click del button "genera"
buttonGenera.addEventListener("click",
function myFunction() {

    container.innerHTML = "";
   
    for (let i = 1; i <= 100; i++) {

        // creata una constante con dentro la funzione e i valori che devo creare "div" e aggiungere come classe "square"
        const nuovoQuadrato = createContainerSquare("div", "square")
    

        // Ogni cella ha un numero progressivo, da 1 a 100.
        // creato nuovo elemento, span.
        const createSpan = document.createElement('span');
    
        // aggiunto al nuovo elemento creato la variabile i (che genererà i numero da 1 a 100 all'interno dello span)
        createSpan.append(i);



        // nuovo evento al click, ma questa volta solo sul quadrato creato, in modo da aggiungergli la classe che farà cambiare colore al click
        nuovoQuadrato.addEventListener("click", 
        function() {

            if(createSpan[i] === bombArr.length) {
                nuovoQuadrato.classList.add('red');
                console.log("hai perso");
            } else {
                nuovoQuadrato.classList.add('blue');
                console.log("Il quadrato selezionato è il numero:" + i);
            }
         
        })
       


       


        // inserito dentro al div che contiene classe square (quindi la funzione) il nuovo elemento crerato (span)
        nuovoQuadrato.append(createSpan);
    
        // inserito nel container generale del dom tutto quello che ho creato sopra
        container.append(nuovoQuadrato);
    }

})









// FUNZIONI
// funzione per creare elementi e associargli una classe
function createContainerSquare(prendiElement, prendiClass){

    const newElement = document.createElement(prendiElement);

    newElement.classList.add(prendiClass);

    return newElement
}







 


 
/*

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
        /il computer deve generare 16 numeri compresi da 1 a 100

        


Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.


In seguito l’utente clicca su una cella: 
    se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
    Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.


La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).


Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


*/
 