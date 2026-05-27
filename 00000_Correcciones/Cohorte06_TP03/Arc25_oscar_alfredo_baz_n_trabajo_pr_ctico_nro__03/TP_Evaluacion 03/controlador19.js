

import { fnCalculaPrecioVenta } from "./modelo19.js";

const inputCompra = document.getElementById("idImporteCompra");
const inputMargen = document.getElementById("idMargen");
const boton = document.getElementById("idBotonCalcular");
const resultado = document.getElementById("resultado");

boton.onclick = () => {


console.log(`esta funcionando`);

const comprar=Number(inputCompra.value);
const margen = Number (inputMargen.value);


const precioVenta= fnCalculaPrecioVenta(comprar, margen);

resultado.textContent= `El precio de venta va a ser: $${precioVenta}`
};


