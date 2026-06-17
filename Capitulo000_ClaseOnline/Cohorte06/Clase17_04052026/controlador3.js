import {productos} from "./modelo.js";

// de valores simples //
const sueldosEnero = [3700,4100,25000];

// el vector de productos es un vector de objetos //

window.onload = ()=>{

    console.log(productos);

    /* map. es una función de TRANSFORMACIÓN DE ELEMENTOS
    del vector original en otro vector 
    */

    console.log(`--------- map sobre vectores simples ---------`);

    let sueldosDeFebrero = sueldosEnero.map((sueldo)=>{

        return (sueldo * 1.20);

    });

    console.log(sueldosEnero);

    console.log(sueldosDeFebrero);

    console.log(`--------- map sobre vectores de objetos ---------`);

    let productos2 = productos.map(producto => {

        // aqui estoy mostrando el producto //
        console.log(producto);

        // destructuring 
        const {id,nombre,precio} = producto;

        // mostrar esas variables o constantes sueltas
        console.log(id,nombre,precio);

        // constructuring  => aqui armo un objeto a partir de constantes
        return {id,nombre,precio};

    });

    console.log(productos2);





};