var card = document.querySelectorAll(".card");
console.log(card)
card.forEach(element => {
    element.addEventListener("click" , function(){
       
        this.classList.toggle("flipped");  
          
        console.log("llamada a foreach");
    });
});