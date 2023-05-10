


// variabile per selezionare nel dom il div che ha l'id "container"
const container = document.getElementById("container");



// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

// creare constante per selezionare l'id del button
const buttonGenera = document.getElementById("genera");




// creare l'evento al click del button "genera"
buttonGenera.addEventListener("click",
function myFunction() {

    container.innerHTML = "";
     // Ci saranno quindi 10 caselle per ognuna delle 10 righe.

    for (let i = 1; i <= 100; i++) {

    
       

        // creata una constante con dentro la funzione e i valori che devo creare "div" e aggiungere come classe "square"
        const nuovoQuadrato = createContainerSquare("div", "square")
    


  // Ogni cella ha un numero progressivo, da 1 a 100.

        // creato nuovo elemento, span.
        const createSpan = document.createElement('span');
        // aggiunto al nuovo elemento creato la variabile i (che genererà i numero da 1 a 100 all'interno dello span)
        createSpan.append(i);


// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

        // nuovo evento al click, ma questa volta solo sul quadrato creato, in modo da aggiungergli la classe che farà cambiare colore al click
        nuovoQuadrato.addEventListener("click", 
        function() {

            nuovoQuadrato.classList.add('blue');
            console.log("Il quadrato selezionato è il numero:" + i);
        })
       

       
        
       
           
           
        
        // inserito dentro al div che contiene classe square (quindi la funzione) il nuovo elemento crerato (span)
        nuovoQuadrato.append(createSpan);
    
        // inserito nel container generale del dom tutto quello che ho creato sopra
        container.append(nuovoQuadrato);
 
    

        
    }

})










// funzione per creare elementi e associargli una classe
function createContainerSquare(prendiElement, prendiClass){

    const newElement = document.createElement(prendiElement);

    newElement.classList.add(prendiClass);

    return newElement

}






 


 
  
 