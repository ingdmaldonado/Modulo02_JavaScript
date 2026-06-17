
import {productos,usuarios} from "./modelo.js";

/* DESTRUCTURING es el concepto de descomponer
en partes objetos y/o Vectores */

const vectorDeSueldos = [2500,2300,4800,1200,3200,1100,1350];

const jugador = {

    nombre:"MESSI LIONEL ANDRES",
    domicilio:"MIAMI BEACH - 480 - 2DO. B"
}

/* 

    cuando los [] están del lado de la derecha del = [] creando un vector

    cuando las {} están del lado de la derecha del = {} creando un objeto

    cuando el [] están del lado de la izquierda del igual => Destructuring de un vector

    cuando el {} están del lado de la izquierda del igual => Destructuring de un objeto

*/

    /* forma larga */

    console.log("resultado largo")
    let resultado1 = vectorDeSueldos.filter(sueldo => sueldo < 1500);

    resultado1.forEach(sueldo => console.log(sueldo));

    /* forma corta */

    console.log("resultado corto");
    vectorDeSueldos.filter(sueldo => sueldo < 1500).forEach(item => console.log(item));


    // Destructuring de un Vector //

    const [primerElemento,segundoElemento] = vectorDeSueldos;

    console.log("destructuring de elementos comunes");

    console.log(primerElemento);
    console.log(segundoElemento);

    /* estoy haciendo una copia del vector de productos . copia
    por REFERENCIA. y unicamente ocurre cuando trabajo 
    con vectores que a dentro tienen objetos literales. */

    const productos2 = productos;

    console.log(productos);

    console.log(productos2);

    productos.push({id: 100, nombre: "Camiseta de Boca",     precio: 99000,  categoria: "calzado",    stock: 30, activo: true})
    
    console.log(productos);

    console.log(productos2);

    /* voy a hacer destructuring de un vector de productos */

    const [producto1,,producto3] = productos;

    // destructuring salteando valores //
    const [pro1,pro2,,,prod5] = productos;

    console.log(producto1);

    producto1.precio = 33777.77;

    console.log(producto1);

    console.log(producto3);

    console.log(productos);

    console.log(productos2);

    /* aqui vamos a ver destructuring de objetos */

    const usuario1 = { id: 1, nombre: "Juan",  email: "juan@mail.com",  rol: "admin",  password: "hash1234" };

    /* destructuring de los atributos del objeto literal */

    const {id,nombre,email,domicilio="sin domicilio"} = usuario1;

    console.log(id);
    console.log(nombre);
    console.log(email);
    console.log(domicilio);


    /* Destructuring en el cuerpo de una función */

    const fnMostrarUsuario = (usuario)=>{

        const {nombre,email} = usuario; // hice destructuring en el cuerpo de una función
        
        console.log("destructuring en el cuerpo",nombre,email);

    };

    fnMostrarUsuario(usuario1);

    /* Destructuring en el encabezado de una función */

    const fnMostrarUsuario2 = ({nombre,email}) =>{

        console.log("destructuring en el encabezado",nombre,email);

    };

    fnMostrarUsuario2(usuario1);

    /* Map => es una función de nivel superior de los vectores.

        MAP DEVUELVE UN VECTOR NUEVO.



        recibe como parametro una funcion callBack . función
        de transformación y sobre cada elemento hace un return.
        
        forEach
        find
        filter
        every
        some
    */

    console.log("aqui voy a hacer map sobre el vector de usuarios");

    
    const usuariosSinClave = usuarios.map((usuario)=>{

        /* aqui estoy haciendo destructuring */

        console.log("esto esta ocurriendo dentro de map");

        // aqui estoy descomponiendo el usuario //
        const {id,nombre,email} = usuario;

        // aqui lo estoy mostrando por consola //
        console.log(id,nombre,email);

        // aqui construyo un nuevo objeto con los atributos descompuestos //
        //const resultado = {id,nombre,email}; // constructuring

        //return resultado;

        return {id,nombre,email};





    });

    /* si cuando copio una constante que apunta a un vector
    estoy haciendo una copia por referencia. entonces
    como hago, para hacer una copia totalmente INDEPENDIENTE
    de la versión original.

    1) aplicando map => 
        
        
    */

    console.log(usuariosSinClave);

    /*********************************************************/
    /**********************************************************/
    /* SPREAD OPERATOR => PROPAGACIÓN DE ELEMENTOS 
    
        = ...                       => estoy spread operator

        ... =                       => rest operator


       
    */

    /* SPREAD DE VECTORES */

    const NumerosImpares = [1,3,5,7,9];

    const NumerosPares = [2,4,6,8,10];

    const Numeros = [...NumerosImpares,...NumerosPares,22,55,33];

    console.log(NumerosImpares);
    console.log(NumerosPares);
    console.log(Numeros);

    /* SPREAD DE OBJETOS */

    const usuario10 = { id: 1, nombre: "Juan",  email: "juan@mail.com",  rol: "admin",  password: "hash1234" };


    const usuario11 = {...usuario10,domicilio:"LA BOCA 777 DEPARTAMENTO 7. PISO 7B"};

    console.log(usuario10);
    console.log(usuario11);

    
