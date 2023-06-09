 let score = 0;
// variabile per selezionare nel dom il div che ha l'id "container"
const container = document.getElementById("container");


// creare constante per selezionare l'id del button
const buttonGenera = document.getElementById("genera");


// creare l'evento al click del button "genera"
buttonGenera.addEventListener("click",
function myFunction() {

    container.innerHTML = "";
   
    // richiamo la funzione
    const bombe = createNumRandomOrd(16, 1, 100);

    console.log(bombe);
  

    


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


        
           
           

            if (bombe.includes(i)) {
                nuovoQuadrato.classList.add('red');
               console.log("Hai persoooo, hai totalizzato punti:" + " " + score);

               container.innerHTML = "Hai perso!! Hai totalizzato:" + " " + score;
               
            }else {
                score++;
                console.log(score);
               
                nuovoQuadrato.classList.add('blue');
                console.log("Il quadrato selezionato è il numero:" + i + "Hai totalizzato punti:" + " " + score);   
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



// funzione x creare numeri random
function createRandomNum(numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1) ) + numMin;
  }






//   funzione per creare le bombe in base al numero totale dei quadrati presenti nel gioco
function createNumRandomOrd(numMax, min, max){

    let numArray = [];

    while (numArray.length < numMax) {
        const nuovoNumRand = createRandomNum(min, max);
       
        if (!numArray.includes(nuovoNumRand)) {

            numArray.push(nuovoNumRand);
        }

    }
   
    return numArray;
}


//  console.log(createNumRandomOrd(16, 1, 100));






 
 
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
 