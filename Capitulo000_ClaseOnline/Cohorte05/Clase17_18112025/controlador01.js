
/* Flujo de Ejecución de funciones */

/* esta función devuelve el importe base
a partir de metros cubicos que indica un 
medidor */
const fnRetornarImporteBase = (mtsCubicos) => 
    {
        return (mtsCubicos * 350);
    }

/* esta función devuelve el iva a partir
de un importe base */
const fnRetornaIVA = (importeBase) => 
    {
        return (importeBase * 21/100);
    }

/* esta función devuelve el cuadrado */
const fnCalcularCuadrado = (numero) =>
{
    return numero * numero;
}

/* esta función devuelve el cubo de un numero */

const fnCalcularCubo = (numero) => {

    return numero * numero * numero;

}

/* voy a construir una funcion llamadora */

const fnLlamadora = (funcionCallBack,numero)=>{

    let resultado = funcionCallBack(numero);

    return resultado;


};







window.onload = ()=>
    {

        /* (1er. Paso) => Calcular una Factura
        con su importe base con 45 mts. cubicos */

        let importeBase1 = fnRetornarImporteBase(45);
        console.log(importeBase1);

        /* (2da. Paso) => A partir de un Importe Base
        vamos a calcular el IVA */

        let importeIva1 = fnRetornaIVA(importeBase1);
        console.log(importeIva1);


        /* (3ra. Parte) => INVOCAR A LA FUNCION LLAMADORA */

        let resultado1 = fnLlamadora(fnCalcularCuadrado,4);

        console.log(resultado1);

        /* (4ta. Parte) => INVOCAR A LA FUNCION LLAMADORA */

        let resultado2 = fnLlamadora(fnCalcularCubo,4);

        console.log(resultado2);

        /* (5ta. Parte) => INVOCAR A LA FUNCION LLAMADORA */

        let resultado3 = fnLlamadora((numero)=>{
            return numero * 24;
        },4)

         console.log(resultado3);

        let resultado4 = fnLlamadora((numero)=>{

            return numero * 2;

        },4)

        console.log(resultado4);


        /* (6ta. Parte) => Recorrido de Vectores
        
        ESTRUCTURA DEL VECTOR ES FLEXIBLE => TAMAÑO, LARGO.

            - push()
            - pop()
            - shif()

        
        */

        const Vector = [1450000000,10,340000];

        console.log(Vector);

        // recorrido tradicional //
        for(let i = 0; i < Vector.length;i++)
        {
            console.log(Vector[i]);
        }

        /* No recomiendo utilizar for ni while
        Si, durante el recorrido del vector
        la estructura cambia y cambia el tamaño.
        ya sea agregando, quitando, modificando.
        */


        

    }