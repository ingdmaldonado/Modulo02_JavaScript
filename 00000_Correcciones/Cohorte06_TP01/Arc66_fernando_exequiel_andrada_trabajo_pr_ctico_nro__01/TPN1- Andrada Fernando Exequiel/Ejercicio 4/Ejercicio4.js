window.onload=function()
{

console.log("La app esta corriendo");

const idBtnCalcular=document.querySelector("#idBtnCalcular");
const idBtnNumero=document.querySelector("#idBtnNumero");
const idResultado=document.querySelector("#idResultado");


idBtnCalcular.onclick=function()

{

let Numero  = Number(idBtnNumero.value);

if (Numero > 0) {
idResultado.value=
`Numero Positivo: ${Numero}\n`;

} else if (Numero < 0) {
idResultado.value=
`Numero Negativo: ${Numero}\n`;    



} else {
idResultado.value=
`Numero Cero: ${Numero}\n`;
}

let ResultadoTernario= 
 Numero > 0 
    ? `Numero Positivo: ${Numero}` 
    : Numero < 0 
        ? `Numero Negativo: ${Numero}` 
        : `Numero Cero: ${Numero}`;
idResultado.value += `\nTernario: ${ResultadoTernario}`;
    
}
}