
import {productos} from "./modelo.js";

/* una funcion callBack es una función
que se pasa como parametro de otra función, 
esto es algo nuevo. y la función que llama
e invoca a la fn callBack generalmente le decimos
función de nivel superior */

window.onload = ()=>{

    /* (1) muestro el vector completo */

    console.log(productos);

    /* (2) forEach es una función de nivel Superior,
    que a dentro de sus parametros recibe una función.
    esa función es definida por el usuario y a dentro 
    haremos el tratamiento de cada uno de los items */

    console.log("ejemplo 2 -------------------");

    productos.forEach((item,indice)=>{

        if(item.precio >= 20000)
        {
             console.log(item);
        }
    });

    /* (3) vamos a hacer un forEach de una manera mas corta */

    console.log("ejemplo 3 -----------------");

    productos.forEach(producto=>{

        if(producto.precio <= 20000)
        {
            console.log(producto);
        }

    });

    /* (4) Aqui vamos hacer un forEach lo mas corto posible */

    console.log("ejemplo 4 ------------------");

    productos.forEach(producto => producto.precio <= 20000 ? console.log(producto):"");

    /* (5) find => es una función de nivel superior */

    console.log("ejemplo 5 -----------------");

    let productoEncontrado = productos.find(producto=>{

        return producto.id === 6 ? true:false;

    });

    console.log(productoEncontrado);

    /* (6) find => lo mas corto posible - retorna un objeto*/

    console.log("ejemplo 6 -----------------");

    let productoEncontrado2 = productos.find(producto => producto.id === 6);

    console.log(productoEncontrado2);

    /* (7) filter => devuelve un vector nuevo */

    console.log("ejemplo 7 -------------------");

    let calzados = productos.filter(producto => producto.categoria === 'calzado');

    console.log(calzados);

    /* (8) some => devuelve true o false.
    Si existe al menos uno*/

    console.log("ejemplo 8 ------------------------");

    let resultado = productos.some(producto=>producto.stock === 0);

    console.log(resultado);

    /* (9) every =>  determina si todos cumplen la condición
    que yo estoy buscando en la función callBack de a dentro 
    devuelve true o false */

    console.log("ejemplo 9 ----------------------------");

    let resultado2 = productos.every(producto => producto.stock >= 5);
    console.log(resultado2);

    /* (10) map => map aplica sobre todos los elementos una función
    de transformación. es decir, la función callBack de a dentro
    tiene que transformar el elemento en algo, en otra cosa, 
    o en algo mas simplificado */

    console.log("ejemplo 10 ----------------------------");

    let sueldos = [32000,17000,78000,10000];

    let quincenas = sueldos.map(sueldo=>sueldo/2);

    let sueldosConAumentoDel40 = sueldos.map(sueldo => sueldo * 1.40);

    console.log(quincenas);

    console.log(sueldosConAumentoDel40);


};

/* 
    1 - forEach => recorre todos los elementos, no puedo 
                    salir de ese bucle hasta que termine.

    2 - find => recorre hasta que encuentra un elemento
    que cumple con la condición que establece la función
    callBack de a dentro. que devuelve el objeto donde
    se haya producido la coincidencia. 

    3 - filter => recorre, busca, encuentra pero me separa
    esos elementos en un vector nuevo. donde estan todos
    los que cumplen con la condición que yo haya establecido
    en la arrow function. (funcion callBack)

    4 - some => determina si existe al menos uno que cumpla
    la condicion que busco. 

    5 - every => determina si todos cumplen la condicion

    6 - map => transforma

*/