

window.addEventListener("load",()=>{

  /* ejemplo02_SpreadOperator.js */

/* 
   SPREAD OPERATOR (...)
   ---------------------
   El operador de propagación ("spread") permite "expandir" o "desarmar" 
   arrays u objetos en lugares donde se esperan múltiples elementos o propiedades.

   Regla general:
   - Se usa con [] para vectores.
   - Se usa con {} para objetos.
*/

/* ==========================================================
   EJEMPLO 1: Copiar un vector
   - Spread crea una copia superficial de un vector.
   - Muy usado para evitar modificar el original.
========================================================== */
const numeros = [1, 2, 3];
const copiaNumeros = [...numeros]; // Copia con spread
console.log("EJEMPLO 1:", copiaNumeros);

/* ==========================================================
   EJEMPLO 2: Combinar vectores
   - Spread permite unir fácilmente varios arrays en uno solo.
========================================================== */
const pares = [2, 4, 6];
const impares = [1, 3, 5];
const combinados = [...pares, ...impares];
console.log("EJEMPLO 2:", combinados);

/* ==========================================================
   EJEMPLO 3: Agregar elementos a un vector
   - Spread permite insertar elementos adicionales.
========================================================== */
const base = [10, 20];
const extendido = [5, ...base, 30];
console.log("EJEMPLO 3:", extendido);

/* ==========================================================
   EJEMPLO 4: Copiar un objeto
   - Spread copia todas las propiedades de un objeto.
   - Muy útil para evitar modificar el original.
========================================================== */
const persona = { nombre: "Ana", edad: 25 };
const copiaPersona = { ...persona };
console.log("EJEMPLO 4:", copiaPersona);

/* ==========================================================
   EJEMPLO 5: Combinar objetos
   - Spread permite fusionar dos o más objetos en uno nuevo.
   - Si hay propiedades repetidas, prevalece el último.
========================================================== */
const direccion = { ciudad: "Catamarca", pais: "Argentina" };
const personaConDireccion = { ...persona, ...direccion };
console.log("EJEMPLO 5:", personaConDireccion);

/* ==========================================================
   EJEMPLO 6: Sobrescribir propiedades de un objeto
   - Spread se usa mucho para clonar un objeto y cambiar solo un campo.
========================================================== */
const personaModificada = { ...persona, edad: 30 };
console.log("EJEMPLO 6:", personaModificada);




});
