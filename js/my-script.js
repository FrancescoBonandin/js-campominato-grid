// 1.creo un eventlistener su bottone 
// 2. al clic sul bottone genero un ciclo che mi produce 10 elementi per riga per 10 righe (10 * 10 = 100)
// 3. ogni cella avra al suo interno stampato il suo numero identificativo
// 4. per ogni cella creo un event listener che toggla una classe con BG azzurro
//    e stampa il suo numero in console






const gridGeneratorButton = document.getElementById("grid-generator");
gridGeneratorButton.addEventListener("click", function(){

    const myContainer = document.getElementById("grid-container");

    let row;
    
    // ciclo: incremento i 100 volte
    for(let i=1;i <= 100; i++){

        

        if(i === 1 || ((i-1) % 10 === 0 && i != 100)){

            row = document.createElement("div");

            row.classList.add("row", "row-cols-10", "g-0" );

            myContainer.append(row);
            
        }
        
        const col = document.createElement("div");

        col.addEventListener("click", function(){
            this.toggleAttribute("active")
            console.log(this.innerHTML)
        })

        col.classList.add("col", "cell");
        
        row.append(col);
    
        col.append(i);
    
        console.log(i);
    
    
    }

})