
/* 
    forEach(arrow function)
    map(arrow function)
    filter(arrow function)


	find (x) // findIndex - buscar
	sort (x) - ordenar
	every (x) - todos
	some (X) - alguno
	reduce(x) - totalizador => bastante.

*/

window.addEventListener("load",()=>{

    console.log("running la clase 22");

    /******* FIND => BUSCAR O ENCONTRAR  ********/

    const importeDeFacturas = [2000,65000,75000,34600];

    console.log(importeDeFacturas);

    /* ejemplo 01 */
    let facturaDe75000 = importeDeFacturas.find((factura)=>
        {
            if(factura === 75000)
            {
                return true;
            }
            else
            {
                return false;
            }
           
        })

        console.log(facturaDe75000);

     /* ejemplo 02 */

     let facturaMayor40000 = importeDeFacturas.find((factura)=>
        {
            if(factura > 40000)
            {
                return true;
            }
            else
            {
                return false;
            }
           
        })

        console.log(facturaMayor40000);

     /* ejemplo 02 */

     let facturaMayor100000 = importeDeFacturas.find((factura)=>
        {
            if(factura > 100000)
            {
                return true;
            }
            else
            {
                return false;
            }
           
        })

        console.log(facturaMayor100000);

        if(facturaMayor100000)
        {
            console.log("encontre lo que buscabas");
        }
        else
        {
            console.log("no encontre lo que buscabas");
        }

        /* ejemplo 04 => una arrow function corta 
        
            la que no lleva ()
            la que no lleva {}
            la que no lleva return
            y el return esta implicito

        */

        let valorBuscado = importeDeFacturas.find(factura => factura === 65000);

        if(importeDeFacturas.find(factura => factura === 65000))
        {
            console.log("lo encontre xxx");
        }
        else
        {
            console.log("no lo encontre");
        }

        console.log(valorBuscado);

        /* con un operador ternario en una sola fila */

        let facturaEncontrada = importeDeFacturas.find(factura => factura === 97500) ? "lo encontre xxxx" : "no lo encontre"; 
        console.log(facturaEncontrada);

    /* every => evalua si todos los elementos de un
    vector cumplen con una condición. que se evalua
    dentro de una arrow function */

    let resultado1 = importeDeFacturas.every(factura => factura > 3000);
    console.log(resultado1);

    /* some => evalua si alguno de todos los elementos
    cumple con una condicion */

    let resultado2 = importeDeFacturas.some(factura => factura < 0);
    console.log(resultado2);

    /* REDUCE => es un metodo que 
    que permite reducir un vector.
        
        - contabilizar elementos
        - sumarizar elementos
        - obtener promedios
    */

    const sueldosEnero = [3000,4500,1200,15000];

    /* como hariamos si queremos 
    obtener el total de los sueldos
    de enero ? */

    let sueldoTotalEnero = 0;

    sueldosEnero.forEach(sueldo => sueldoTotalEnero = sueldoTotalEnero + sueldo);
    console.log("sueldos acumulados",sueldoTotalEnero);

    /* variante con reduce */

    let sueldoTotalEneroConReduce = sueldosEnero.reduce((acumulador,sueldo)=>
        {
            return acumulador = acumulador + sueldo;
        },0);

    console.log(sueldoTotalEneroConReduce);

    /************** EJEMPLO COMPLEJO  ************/

    //sueldoTotalEnero.reduce((acumulador,sueldo)=>{},0);

    const vectorDeObjetos = 
        [
            {
                numerofactura:1,
                importe:500,
                iva:5,
                tasas:2,
                total:507
            },
            {
                numerofactura:2,
                importe:1000,
                iva:10,
                tasas:4,
                total:1014
            }
        ]

    /* con la vieja escuela - variante 1 */

    let totalBase = 0;
    let totalIVA = 0;
    let totalTasas = 0;
    let totalTotal = 0;

    vectorDeObjetos.forEach(factura => 
        {
            totalBase = totalBase + factura.importe;
            totalIVA = totalIVA + factura.iva;
            totalTasas = totalTasas + factura.tasas;
            totalTotal = totalTotal + factura.total;
        })

    console.log(totalBase);
    console.log(totalIVA);
    console.log(totalTasas);
    console.log(totalTotal);

    /* con la vieja escuela - variante 2 */

    let totales = 
        {
            totalBase:0,
            totalIVA:0,
            totalTasas:0,
            totalTotal:0
        }
    
    vectorDeObjetos.forEach(factura => 
        {
            totales.totalBase = totales.totalBase + factura.importe;
            totales.totalIVA =  totales.totalIVA + factura.iva;
            totales.totalTasas = totales.totalTasas + factura.tasas;
            totales.totalTotal = totales.totalTotal + factura.total;
        })

    console.log(totales);

    /******** COMO HAGO ESTO CON REDUCE ?  ********/

    let totales2 = vectorDeObjetos.reduce((totales,factura)=>{

        
        totales.totalBase = totales.totalBase + factura.importe;
        totales.totalIVA =  totales.totalIVA + factura.iva;
        totales.totalTasas = totales.totalTasas + factura.tasas;
        totales.totalTotal = totales.totalTotal + factura.total;
        
        return totales;

    },{totalBase:0,totalIVA:0,totalTasas:0,totalTotal:0
    })

    console.log(totales2);

    /* 
    
        find (x) // findIndex - buscar
	  
	    every (x) - todos
	    some (X) - alguno
	    reduce(x) - totalizador



        sort (x) - ordenar => ordenamiento del vector

            

    */


    

})      