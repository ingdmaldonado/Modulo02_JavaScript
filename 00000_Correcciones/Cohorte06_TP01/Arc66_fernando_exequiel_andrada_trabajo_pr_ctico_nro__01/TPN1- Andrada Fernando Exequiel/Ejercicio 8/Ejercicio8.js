window.onload=function()
{

console.log("La app esta corriendo");

const idBtnCalcular=document.querySelector("#idBtnCalcular");
const idBtnEdad=document.querySelector("#idBtnEdad");
const idResultado=document.querySelector("#idResultado");


idBtnCalcular.onclick=function()

{

let Edad  = Number(idBtnEdad.value);

if (Edad >= 0 && Edad <= 12) {
    idResultado.value="Es niño/a";
} else if (Edad >= 13 && Edad <= 17) {
    idResultado.value = "Es adolescente";
} else if (Edad >= 18 && Edad <= 64) {
    idResultado.value= " Es adulto";
} else if (Edad > 64) {
    idResultado.value = "Es adulto mayor"
} else {
    idResultado.value = " Opcion invalida";   

}
if (idBtnEdad.value === "") {
    idResultado.value = "Ingrese una edad";
    return;
}
}
}