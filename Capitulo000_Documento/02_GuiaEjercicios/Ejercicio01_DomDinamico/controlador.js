/* (3) Importo las provincias de un módulo. cuyo nombre
se llama modelo.js */
import {provincias} from "./modelo.js";

/* (5) Creo una función que recibe como parámetro de
entrada una provincia y lo convierte en una opción del selector 

    1 Provincia => 1 opción del selector    

    y la devuelve.

*/

const fnConvertirProvinciaToOption = (provincia) =>{

  /* (6) le pido al DOM que me cree un nuevo elemento HTML
  que se llamará opción del Selector. */

  const opcionDelSelector = document.createElement("option");

  /* (7) A ese elemento HTML que acabo de crear le asigno
  la propiedad textContent para que se pueda visualizar la provincia */

  opcionDelSelector.textContent = provincia.provinciaNombre;

  /* (8) A esa opción creada en el paso anterior, le asigno
  la propiedad value */

  opcionDelSelector.value = provincia.provinciaId;

  /* (9) Hago que la función retorne la opción del selector */

  return opcionDelSelector;

}

/* (10) Esta función, recibe como parámetro de entrada
todas las provincias que se encuentran en el vector de provincias, 
que se recibe como parámetro de la función y las convertirá en opciones. 
para eso recurriremos a la la función anterior. 
Es muy importante cuando quiero convertir
objetos a opciones (estoy hablando en plural), tengo que utilizar map.
map es una función de TRANSFORMACION.

  map es una de nivel superior, que recibe una función callBack, la idea
  de map es transformar elementos de un vector en otra cosa.

  map => recorrerá todas las provincias y las convertirá en opciones,
  reutilizando la función anterior "fnConvertirProvinciaToOption".

*/


const fnConvertirProvinciasToOpciones = (provincias) =>{

  /* (11) Recorro todas las provincias aplicando map 
  map es una función de nivel superior, que transforma
  los elementos del vector en otra cosa. en este caso
  recibe provincias y para cada provincia aplica la función
  que las convierte en opciones. por lo tanto devuelve 
  esta constante opciones.
  */

  const opciones = provincias.map(provincia => fnConvertirProvinciaToOption(provincia));

  return opciones;

};

/* 12) Esta función es una arrow function que recibe
dos parametros, un conjunto de opciones. que creo la función
anterior del paso (11) => "fnConvertirProvinciasToOpciones"
tiene como objetivo recorrer un conjunto de opciones
que se generaron con la función anterior => fnConvertirProvinciasToOpciones
y las inyecta en el DOM en el contenedor que se le pasa como parámetro
a la función.


*/

const fnRender = (opciones,contenedor) => {

  /* (13) Recorro las opciones con forEach y para cada opción
  la agrego en el contenedor que recibo como parametro */

  opciones.forEach(opcion => contenedor.appendChild(opcion));


};


window.onload = ()=>{

  /* (1) Capturo los elementos del DOM por medio
  de constantes */
  const idApellidoYNombre = document.querySelector("#idApellidoYNombre");
  const idDni = document.querySelector("#idDni");
  const idProvincia = document.querySelector("#idProvincia");

  /*(2) Muestro por consola las constantes por medio
  de las cuales controlo los elementos HTML del DOM */

  console.log(idApellidoYNombre,idDni,idProvincia);

  /*(4) Muestro por Consola las Provincias importadas
  desde el archivo modelo.js */

  console.log(provincias);

  /* (14) Invoco a la función que se encarga de 
  Transformar las provincias en opciones del selector */

  const opcionesGeneradas = fnConvertirProvinciasToOpciones(provincias);

  /* (15) Muestro por consola las opciones */

  console.log(opcionesGeneradas);

  /* (16) A las opciones Generadas por el punto anterior 
  las renderizo en el DOM */

  fnRender(opcionesGeneradas,idProvincia);

};