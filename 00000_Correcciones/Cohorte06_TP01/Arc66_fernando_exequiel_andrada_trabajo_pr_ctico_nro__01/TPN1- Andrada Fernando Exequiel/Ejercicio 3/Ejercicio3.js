window.onload=function()
{

console.log("La app esta corriendo");

const idBtnCalcular=document.querySelector("#idBtnCalcular");
const idBtnLuz=document.querySelector("#idBtnLuz");
const idBtnConectividad=document.querySelector("#idBtnConectividad");
const idBtnAgua=document.querySelector("#idBtnAgua")
const idResultado=document.querySelector("#idResultado");


idBtnCalcular.onclick=function()

{

let Luz  = Number(idBtnLuz.value);
let Conectividad = Number(idBtnConectividad.value);
let Agua = Number(idBtnAgua.value);

let LuzIncremento = Luz + (Luz * (12.5 /100));
let ConectividadIncremento = Conectividad + (Conectividad * (7 / 100));
let AguaIncremento = Agua + (Agua * (3 / 100 ));

idResultado.value=
`Luz: $${LuzIncremento}\n` +
`Conectividad: $${ConectividadIncremento}\n` +
`Agua: $${AguaIncremento}\n`;

    
}
}