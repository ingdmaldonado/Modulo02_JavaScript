window.onload=function()
{

console.log("La app esta corriendo");

const idBtnCalcular=document.querySelector("#idBtnCalcular");
const idBtnProducto=document.querySelector("#idBtnProducto");
const idbtnCantidad=document.querySelector("#idBtnCantidad");
const idBtnResultado=document.querySelector("#idBtnResultado");


idBtnCalcular.onclick=function()

{


let Codigo = Number(idBtnProducto.value);
let Cantidad = Number(idBtnCantidad.value);

let Producto  = "";
let PrecioUnidad = 0; 

if (Codigo === 1) {
  Producto = "Dogui x 21 kg";
  if (Cantidad >= 11) {
    PrecioUnidad = 34000;
  } else if (Cantidad >= 5) {
    PrecioUnidad = 36000;
  } else {
    PrecioUnidad = 38000;
  }
} else if (Codigo === 2) {
  Producto = "Tiernitos x 21 kg";
  if (Cantidad >= 11) {
    PrecioUnidad = 27000;
  } else if (Cantidad >= 5) {
    PrecioUnidad = 29000;
  } else {
    PrecioUnidad = 31000;
  }
} else if (Codigo === 3) {
  Producto = "Dogpro x 21 kg";
  if (Cantidad >= 11) {
    PrecioUnidad = 42000;
  } else if (Cantidad >= 5) {
    PrecioUnidad = 44000;
  } else {
    PrecioUnidad = 46000;
  }
} else {
   idResultado.value = "Código inválido";
 return;
}

let total = PrecioUnidad * Cantidad; 

idResultado.value=
`Producto: ${Producto}\n` +
`Cantidad: ${Cantidad}\n` +
`Precio unitario: $${PrecioUnidad}\n`+
`Total: $${total}` 
;

    
}



}