import {productos} from "./modelo.js";


/* ********************* Particularidades de las Arrow Function *************************

  * Si la función tiene un solo parametro de entrada se puede obviar los ()
  * Si la función tiene una sola instrucción en el cuerpo se pueden obviar 
    las {} del cuerpo de la función
  * Si la función tiene una sola instrucción en el cuerpo se puede obviar
    la palabra return => lo que la convierte en un return implícito

*/

const importeIVA1 = (importeBase)=>{
    return importeBase * 21/100;
};

const importeIVA2 = importeBase => importeBase * 21/100 ;

/********************* Particularidades de las Arrow Function *************************/

const fnCuadrado = (numero)=>{return numero * numero};

const fnCubo = (numero)=>{return numero * numero * numero};

const fnLLamadoraODeOrdenSuperior = (fn,parametro)=>{

  const resultado = fn(parametro);

  return resultado;


};


window.onload = ()=>{

  const idParticularidades = document.querySelector("#idParticularidades");
  const idFuncCallBack = document.querySelector("#idFuncCallBack");
  const idForEach = document.querySelector("#idForEach");
  const idMap = document.querySelector("#idMap");

  const idProducto = document.querySelector("#idProducto");
  const idFind = document.querySelector("#idFind");

  const idPrecioDesde = document.querySelector("#idPrecioDesde");
  const idPrecioHasta = document.querySelector("#idPrecioHasta");
  const idFilter = document.querySelector("#idFilter");



  /********************** PARTICULARIDADES DE LAS ARROW FUNCTION  ******************************/

  idParticularidades.onclick = ()=>{

    let resultado1 = importeIVA1(1000);
    console.log(resultado1);

    let resultado2 = importeIVA2(1000);
    console.log(resultado2);


  };


  /********************** FUNCIONES CALLBACK  ******************************/

  idFuncCallBack.onclick = ()=>{

    /* Una función callBack es una función que se pasa
    como parametro de entrada de otra función */

    // paso como parametro una función definida previamente
    let resultado1 = fnLLamadoraODeOrdenSuperior(fnCuadrado,2);
    console.log(resultado1);

    // paso como parametro una función definida previamente
    let resultado2 = fnLLamadoraODeOrdenSuperior(fnCubo,2);
    console.log(resultado2);

    // paso como parametro una función anónima
    let resultado3 = fnLLamadoraODeOrdenSuperior((numero)=>{

      return (numero * numero * numero * numero);

    },2);

    console.log(resultado3);
    
  };

  /********************** FOREACH EN VECTORES  *****************************/

  idForEach.onclick = ()=>{

    // muestro de forma completo el vector //
    console.log(productos);

    /* recorro elemento x elemento utilizando forEach. forEach
     es la función de orden superior que necesita que lleve dos 
     parametros. el elemento y el indice de la posición del elemento.
     Generalmente el 99.99 % de las veces la función que se pasa como 
     parámetro del forEach es una función anónima definida dentro mismo
     del forEach

        la función callBack necesita:

          * 1) el elemento (Siempre)
          * 2) el indice (opcional)

     */

    console.log(`------Ejemplo de forEach - funcion callBack completa------`);
    productos.forEach((element,index)=>{

      console.log(element);
      console.log(`ID: ${element.id} - NOMBRE: ${element.nombre} - PRECIO: ${element.precio}`);

    });

    /****** Vamos a Realizar un forEach aplicando las particularidades ******/

    console.log(`------Ejemplo de forEach - funcion callBack reducida------`);
    productos.forEach(elemento => console.log(elemento));

    /****** Vamos a Realizar un forEach aplicando las particularidades ******/

    /* Nota: generalmente en lugar de denominarlo element, tratamos de ponerle
    al parametro de la arrow function un nombre representativo del elemento que
    se está iterando */

    productos.forEach(producto => console.log(producto));

    /**** Vamos a Realizar un forEach - modificando atributos ******/
    console.log(`------Ejemplo de forEach - modificamos el precio------`);
    productos.forEach(producto => producto.precio = 225000);
    console.log(productos);

  };

  /********************** MAP EN VECTORES  *****************************/

  idMap.onclick = ()=>{

    /* Map Transforma los Elementos de un Vector, en otra cosa
    diferente, que pueden ser objetos, puede ser cualquier otra cosa */

    console.log(`------Ejemplo de forEach - modificamos el precio------`);
    const sueldosEmpleados = [2000,2150,3250,7500];
   

    const sueldosConAumento = sueldosEmpleados.map((sueldo)=>{
      return sueldo = sueldo + sueldo * 1.20;
    });

    console.log(sueldosEmpleados);
    console.log(sueldosConAumento);



    const preciosProductos = productos.map(producto => {

      let {nombre,precio} = producto;

      return {nombre,precio};

    });

    const preciosProductos2 = productos.map(producto => {

      let id = producto.id;
      let nombre = producto.nombre;
      let precio = producto.precio;

      return {id,nombre,precio};

    });

    preciosProductos2.forEach(producto => producto.precio = 777.77);
    
       

    // muestro elemento x elemento //
    preciosProductos.forEach((producto)=>{console.log(producto.precio)});

    // al vector resultante les incremento el precio //
    preciosProductos.forEach((producto)=>{producto.precio = 222.22});

    console.log(productos);
    console.log(preciosProductos);
    console.log(preciosProductos2);





  };
  
  /********************** FIND EN VECTORES  *****************************/

  idFind.onclick = ()=>{

    let id = Number(idProducto.value);

    const productoEncontrado = productos.find(producto => producto.id === id);

    if(productoEncontrado)
    {
      console.log(productoEncontrado);      
    }
    else
    {
      console.log("No encontramos ese producto");
    }

  };

  /********************** FILTER EN VECTORES  *****************************/

  idFilter.onclick = ()=>{

    let desde = Number(idPrecioDesde.value);
    let hasta = Number(idPrecioHasta.value);

    let productosFiltrados = productos.filter(producto => {
      if(producto.precio >= desde && producto.precio <= hasta)
      {
        return true;
      }
    });

    let productosFiltrados2 = productos.filter(producto => {
      return producto.precio >= desde && producto.precio <= hasta ? true:false;           
    });

    let productosFiltrados3 = productos.filter(producto => producto.precio >= desde && producto.precio <= hasta);

    console.log(productosFiltrados);
    console.log(productosFiltrados2);
    console.log(productosFiltrados3);

  };




};