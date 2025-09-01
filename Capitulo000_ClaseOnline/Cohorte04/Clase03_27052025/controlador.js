
let totalFacturado = 56000;

// bloque de codigo => bloque principal
{
    let totalFacturado = 0; // declaro e inicializo en cero
    totalFacturado = 25000;
    console.log(totalFacturado);

}

/* una variable, vive. (instancia y se le asigna un valor)
dentro de su bloque de codigo */

// bloque secundario
{
    let totalFacturado = -45000 //
    console.log(totalFacturado);

    {

    }
}

/* LOGICA DE NEGOCIOS => DUEÑO DEL COMERCIO
    sea un programa que en función del total facturado
    nos otorgue un descuento 

    una compra 

        0 y 10.000 => un 5%
        >10.000 y <= 50.000 => 7%
        >50.000 => 9%
*/
{
    let totalFacturado = 0;
    totalFacturado = Number(prompt(`Sr. Ing. el Total Facturado`));

    let descuentoCalculado = 0;// declaro e inicializo en cero
    let totalAPagar = 0;

    /* condicional if. permite evaluar
    condiciones complejas. o de variables
    que son continuas 

        continua => puede asumir infinitos valores dentro de un rango

            10.285,33


        discreta => puede asumir valores pre-establecidos

            dia =>
                    1 = lunes
                    2 = martes
                    3 = miercoles

            mes => 1 = enero
                    2 = febrero
                    ...

            cantidad de cuotas => 
                1
                2
                3
                6
                9
                12

    */

    if((totalFacturado > 0) && (totalFacturado <= 10000))
    {   /* 
        tiene un bloque de codigos propio 
        aqui puedo hacer cientos de instrucciones
        dentro de este bloque
        */
        descuentoCalculado = (totalFacturado * 5)/100;

        


    }
    else
    { 
        if((totalFacturado > 10000) && (totalFacturado <= 50000))
        {
            descuentoCalculado = (totalFacturado * 7)/100;
        }
        else
        { // por descarte => es la ultima opción = 9%
            descuentoCalculado = (totalFacturado * 9)/100;
        }
    }

    /* a la salida de este condicional grande 
    la variable descuento se calculo 
    dependiendo de las reglas de negocio
    que establecio el dueño del comercio
    */

    totalAPagar = totalFacturado - descuentoCalculado; // operación matematica basica
    

    console.log(`El importe de la compra es: ${totalFacturado} y el descuento es ${descuentoCalculado} el total a pagar ${totalAPagar}`);

    /* 
        - tienen que aprender a usar la lógica de programación
        - tienen que hacer el esfuerzo mental para lograr
        el pensamiento crítico en la profesión.
        - la IA => programadores / ingenieros

            ESTANCAR => 

    */

}


//console.log(totalFacturado);



