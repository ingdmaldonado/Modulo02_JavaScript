window.onload=function()
{

console.log("La app esta corriendo");

const idBtnCalcular=document.querySelector("#idBtnCalcular");
const idBtnNumero=document.querySelector("#idBtnNumero");
const idResultado=document.querySelector("#idResultado");


idBtnCalcular.onclick=function()

{

let Numero  = Number(idBtnNumero.value);

if (Numero % 2 === 0) {
  idResultado.value=
`Numero Par: ${Numero}\n`;

} else {
  idResultado.value=
`Numero Impar: ${Numero}\n`;

}

let ResultadoTernario= Numero % 2 === 0 ? `Numero Par: ${Numero}`: `Numero impar: ${Numero}`;
idResultado.value += `\nTernario: ${ResultadoTernario}`;
    
}
}