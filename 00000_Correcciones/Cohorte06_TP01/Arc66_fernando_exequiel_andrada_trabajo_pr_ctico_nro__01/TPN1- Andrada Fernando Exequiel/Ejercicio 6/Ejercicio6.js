window.onload=function()
{

console.log("La app esta corriendo");

const idBtnCalcular=document.querySelector("#idBtnCalcular");
const idBtnNumero=document.querySelector("#idBtnNumero");
const idResultado=document.querySelector("#idResultado");


idBtnCalcular.onclick=function()

{

let Numero  = Number(idBtnNumero.value);
let Promo = 0.5;
let TopeDescuento=80000;
let Descuento = 0 ;

Descuento = Numero * Promo ;

if (Descuento > TopeDescuento) {
  Descuento = TopeDescuento;
}

let TotalPagar = Numero - Descuento;

 idResultado.value =
        `Compra: $${Numero}\n` +
        `Descuento: $${Descuento}\n` +
        `Total a pagar: $${TotalPagar}`;



}
}