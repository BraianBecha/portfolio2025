var menu = document.getElementById("dropdown-m")
console.log(menu)
console.log(menu.style.display)
menu.style.display="none";

var setion1 = document.getElementById("section1");
var setion2 = document.getElementById("section2");
var saludo1= document.getElementById("saludo1")
var sideCard = document.getElementById("side-card")

var card = document.querySelectorAll(".card");

console.log(card)
card.forEach(element => {
    element.addEventListener("click" , function(){
       
        this.classList.toggle("flipped");  
          
        console.log("llamada a foreach");
    });
});

function dropDown(){
flag=false;
    if(menu.style.display == "none" && flag==false){
        menu.style.display = "block";
        console.log("if1");
        flag=true;
    };

     if(menu.style.display == "block" && flag==false){
        menu.style.display="none";
           console.log("if2");
           flag=true;
    };
    console.log("llamada a dropDown")
  
}

function mostrarPrincipal(){
    dropDown();
    console.log("llamada a principal");
    setion2.style.display="none";
    setion1.style.display="block";
    saludo1.style.display="block";    
    sideCard.style.display="block";
};
function mostrarAbout(){
    dropDown();
    console.log("llamada a about");
    setion1.style.display="none";
    setion2.style.display="block";
    saludo1.style.display="none";
    sideCard.style.display="none";
};