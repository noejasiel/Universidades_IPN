
/*
let variable = document.querySelectorAll("a") //se coloca selector css//

variable.forEach(function(variable)  {       enlistar varios enementos selecionados del mismo tipo con querySelectorAll
  console.log(variable);
});*/



/*
let celdas = document.querySelectorAll("td") //se coloca selector css//

celdas.forEach(function(celdas)  {
  celdas.addEventListener("click", function(){
  console.log(this);
  })
}); */


//obtener el boton // X

var close = document.querySelectorAll(".Boton_X");

close.forEach(function(close) {
  close.addEventListener("click", function(ev){
    ev.preventDefault();
    let animacion = document.querySelector(".parte1");
    animacion.classList.remove("fadeInDown");
    animacion.classList.remove("animated");
    animacion.classList.add("fadeOutUp");
    animacion.classList.add("animated");


    setTimeout(function () {
      location.href= "../index.html";
    }, 450);

  })
});
/*
let estrellas = document.querySelectorAll("i");

estrellas.forEach(function(estrellas){
  estrellas.classList.remove("fa-star");

}); */
