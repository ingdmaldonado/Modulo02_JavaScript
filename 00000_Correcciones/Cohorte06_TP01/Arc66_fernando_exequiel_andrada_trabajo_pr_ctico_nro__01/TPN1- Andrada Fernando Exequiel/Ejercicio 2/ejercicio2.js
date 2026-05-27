window.onload=function()
{

console.log("La app esta corriendo");

const idBtnCalcular=document.querySelector("#idBtnCalcular");
const idBtnImporte=document.querySelector("#idBtnImporte");
const idbtnDescuento=document.querySelector("#idBtnDescuento");
const idBtnResultado=document.querySelector("#idBtnResultado");


console.log(idBtnImporte);
console.log(idBtnDescuento);
console.log(idBtnResultado);

idBtnCalcular.onclick=function()

{

let Importe  = Number(idBtnImporte.value);
let Descuento = Number(idBtnDescuento.value);
let Resultado = Importe - (Importe * (Descuento /100));


idResultado.value=
`Importe: $${Importe}\n` +
`Descuento: ${Descuento}%\n` +
`Resultado: $${Resultado}\n`;

    
}



}