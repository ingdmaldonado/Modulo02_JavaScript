{
    /* Ejercicio 13 */
    
    let precioCosto = 10000
    let porcentajeGanancia = 30
    
    console.log(`De un artículo cuyo precio de costo es: $${precioCosto} y el porcentaje de ganancia es: ${porcentajeGanancia}%. El precio de venta es: $${precioDeVenta(precioCosto, porcentajeGanancia)}`)

    /* Ejercicio 14 */
    
    let notaPrimera = 7
    let notaSegunda = 5
    let notaTercera = 9    
    
    console.log(`Obtengo el promedio de las siguientes notas, ${notaPrimera}, ${notaSegunda}, ${notaTercera}. El promedio es ${calculoPromedio(notaPrimera, notaSegunda, notaTercera)}`)


    /*Ejercicio 15 
    
    • Si la nota <= 4 debe devolver “Desaprobado” 
    • Si la nota > 4 y nota <= 7 debe devolver “Aprobado” 
    • Si la nota >7 y nota <=9 debe devolver “Muy Bueno” 
    • Si la nota = 10 debe devolver “Excelente” */

    let notaPromedio = 2
    
    console.log(`Para la siguiente nota, ${notaPromedio}. Usted se encuentra ${condicionAlumno(notaPromedio)}`)


    /*Ejercicio 16: 

    1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil) 
    2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil) 
    3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil) 
    4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil) 
    5 – Bebidas Energéticas = 15 ‰ (quince por mil) 
    6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).*/ 

    let importeBase = 1800
    let tipoBebida = 11
    
    const impuestoTasa = impuestoSobreTasa(importeBase, tipoBebida)
    console.log(`Para la siguiente bebida, ${impuestoTasa.nombreBebida}. El impuesto sobre tasa es de $${impuestoTasa.importeTotal}`)

    /* Ejercicio 17 
    
    El primer bloque corresponde a los primeros 50 metros 
    cúbicos, que se facturan a razón de 350 pesos por metro cúbico.
    El segundo bloque comprende los siguientes 20 
    metros cúbicos, es decir desde el metro cúbico número 51 hasta el 70, los cuales se facturan a un valor de 555,20 
    pesos por metro cúbico.
    Finalmente, todo consumo que supere los 70 metros cúbicos se considera dentro del 
    bloque excedente o de castigo, y se factura a razón de 1.552,20 pesos por metro cúbico.
    Cabe aclarar que los clientes cuyo consumo mensual sea inferior a 50 metros cúbicos igualmente abonan 
    un mínimo de 50 metros cúbicos, de modo que ese sea el valor base de cálculo. 
    La tarea consiste en definir una arrow function llamada calcularImporteAgua que reciba como parámetro 
    el total de metros cúbicos leídos y devuelva el importe base a pagar por el cliente según el esquema tarifario antes 
    descripto. 
    Consumo (m³) Cálculo aplicado  Importe final ($)
    30 (50 × 350,00) 17.500,00
    55 (50 × 350,00) + (5 × 555,20) 20.276,00   
    85 (50 × 350,00) + (20 × 555,20) + (15 × 1.552,20) 57.214,00 */

   let metrosCubicos = 95
   
   console.log(`La cantidad de metros cúbicos es de: ${metrosCubicos}. El importe base a pagar es de: $${calcularImporteAgua(metrosCubicos)}`)
    
   
   /* Ejercicio 18

    Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios 
    Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es 
    un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function */
    
    let montoBase = 2500

    console.log(`Para el importe Base de la Factura de Aguas de Catamarca es:${montoBase}. El importe tasa de subsuelo es de: $${calculoTasaSubsuelo(montoBase)}`)

    /* Ejercicio Nro. 19 
    Reciba como parámetro el Importe Base de una factura de “Servicios 
    Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE que corresponde al 1,2 % del importe Base ingresado como parámetro de la arrow function*/
    
    let valorBase = 5000

    console.log(`Para el importe Base de Factura de Aguas de Catamarca es: ${valorBase}. El importe tasa de fiscalizacion ENRE es de: $${calculoTasaEnre(valorBase)}`)

    /* Ejercicio Nro. 20 
    datos importantes para el cálculo. 
    1) Nivel de glucosa en sangre 
    2) Peso Corporal (en kilogramos)
    3) Tipo de diabetes
    a. Tipo 1
    b. Tipo 2
    Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, este último término solamente si la glucosa es mayor a 180. 
    Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, este último término solamente si la glucosa es mayor a  180 */

    let nivelGlucosa = 181
    let pesoCorporal = 89
    let tipoDiabetes = 2

    console.log(`El nivel de glucosa en sangre es de: ${nivelGlucosa}, el peso corporal es de: ${pesoCorporal}, el tipo de diabetes es: ${tipoDiabetes}. La dosis de insulina es de: $${calculoDosisIns(nivelGlucosa, pesoCorporal, tipoDiabetes)}`)


    /* Ejercicio 21 */
   
   let cadenaTexto = 'Nadie ama el dolor'

   console.log(`La cantidad de vocales para el siguiente texto: " ${cadenaTexto} " ,son ${contarVocales(cadenaTexto)} vocales`)

   
   /* Ejercicio 22 */
   
   let cadenaTextoSegunda = 'El uso de Lorem'
    
   console.log(`La cantidad de consonantes para el siguiente texto: " ${cadenaTextoSegunda} " ,son ${contarConsonantes(cadenaTextoSegunda)} consonantes`)

   /* Ejercicio 23 */
    
   let cadenaTextoTercera = 'Es un hecho establecido solo'
    
    console.log(`En el siguiente texto: "${cadenaTextoTercera}", si la cantidad de letras "s" sean mayusculas o minusculas es mayor a 2 apariciones, devuelve (true), caso contrario devuelve (false): ${contarLetrasS(cadenaTextoTercera)}`)

    /* Ejercicio 24 */

    let cadenaTextoCuarta = 'Existen muchas variaciones de los'
    
    console.log(`En el siguiente texto: "${cadenaTextoCuarta}", si la cantidad de espacios en la cadena es al menos de 3, devuelve (true), caso contrario devuelve (false): ${contarEspacios(cadenaTextoCuarta)}`)

    /* Ejercicio 25 */

    let cadenaTextoQuinta = 'EL arbol de la vida muchas v3ces de los'
    
    console.log(`En el siguiente texto: "${cadenaTextoQuinta}", si contiene algun digito del 0 al 9 devuelve "false": ${contarDigitoNumerico(cadenaTextoQuinta)}`)

}