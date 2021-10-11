let estilos = ["clase1", "clase2", "clase3", "clase4"]

let botonera = document.getElementsByClassName("btn"); //HTML Collctions
console.log(botonera);
let arr_botonera = Array.prototype.slice.call(botonera) //HTML Collctions -> array

arr_botonera.forEach(function(elemento){
    elemento.classList.add(estilos[2]);
});