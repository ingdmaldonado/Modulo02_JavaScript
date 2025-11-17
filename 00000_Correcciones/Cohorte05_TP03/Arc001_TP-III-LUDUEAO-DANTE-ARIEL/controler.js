window.onload = () =>{
    /**Recargar Pagina */
    const idRecargar = document.getElementById("idRecargar")
    idRecargar.onclick = () =>{
          location.reload();
    }
    /*Ejercicio Nro. 13:*/
    const texto1Eje13 = 'El importe de la compra es $'
    const texto2Eje13 = 'El porcentaje de ganancia es $'
    const texto3Eje13 = 'El importe total es de $'
    const idImporteCompra = document.getElementById("idImporteCompra")
    const porcentajeDeGanancia = document.getElementById("porcentajeDeGanancia")
    const enviarValores = document.getElementById("enviarValores")
    const idh3Ejer13 = document.getElementById("idh3Ejer13")

    enviarValores.onclick = () =>{
        let impTotal = 0
        impTotal = calculoDePorcentajeDeGanancia(Number(idImporteCompra.value), Number(porcentajeDeGanancia.value))
        idh3Ejer13.textContent = texto1Eje13 + " " + `${idImporteCompra.value}`+ " " + texto2Eje13 + " " + `${porcentajeDeGanancia.value}` + " " + texto3Eje13 + " " + `${impTotal}`
    } 
    /*
    Ejercicio Nro. 14:      
    Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas 
    Nota: Debe devolver un número 
    */
    const texto1Eje14 = 'EL promedio para las notas ingresadas es de '
    const idnotaUno = document.getElementById("idnotaUno")
    const idnotaDos = document.getElementById("idnotaDos")
    const idnotaTres = document.getElementById("idnotaTres")
    const idenviarNotas = document.getElementById("idenviarNotas")
    const idh3Ejer14 = document.getElementById("idh3Ejer14")
    idenviarNotas.onclick = () =>{
        idh3Ejer14.textContent = texto1Eje14+ " " +`${calculoPromedioNota(Number(idnotaUno.value), Number(idnotaDos.value), Number(idnotaTres.value))}`
    }    

    /*
    Ejercicio Nro. 15: 
    Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida como parámetro devuelva un texto que diga los siguientes mensajes. 
    Si la nota <= 4 debe devolver “Desaprobado” 
    Si la nota > 4 y nota <= 7 debe devolver “Aprobado” 
    Si la nota >7 y nota <=9 debe devolver “Muy Bueno” 
    Si la nota = 10 debe devolver “Excelente” 
    Nota: Debe Devolver un Texto 
    */
    const texto1Eje15 = 'La condición del alumno es :'
    const promedioNota = document.getElementById("promedioNota")
    const idenviarPromedio = document.getElementById("idenviarPromedio")
    const idh3Ejer15 = document.getElementById("idh3Ejer15")
    idenviarPromedio.onclick = () =>{
        idh3Ejer15.textContent = texto1Eje15+" "+`${calculoCondicionAlumno(Number(promedioNota.value))}`
    }   
    /*
    Ejercicio Nro. 16: 
    El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente clasificación y tipo. 
    1 Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil) 
    2 Bebidas Agua en envases retornables = 1 ‰ (uno por mil) 
    3 Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil) 
    4 Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil) 
    5 Bebidas Energéticas = 15 ‰ (quince por mil) 
    6 Cualquier otra bebida no clasificada = 1 ‰ (uno por mil). 
    La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la recaudación de ese impuesto tendrá destino a la protección del medio ambiente. 
    Nota: Debe devolver un número 
    */
    const texto1Eje16 = 'El porcentaje sobre tasa es de $ '
    const idImporteBebida = document.getElementById('idImporteBebida')
    const idtipoBebida = document.getElementById('idtipoBebida')
    const idh3Ejer16 = document.getElementById('idh3Ejer16')

    idtipoBebida.addEventListener('change', function() {
        idh3Ejer16.textContent = texto1Eje16 + " "+ `${calculoSobreTasa(Number(idImporteBebida.value), Number(idtipoBebida.value))}`;
    });

    /*
    Ejercicio Nro. 17: 
    Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM"  utiliza un esquema de facturación por bloques de consumo, donde el precio por metro cúbico aumenta a medida que el usuario consume más. Este tipo de sistema se aplica con el objetivo de promover el uso responsable del recurso  y penalizar el consumo excesivo. 
    El cálculo del importe base se realiza a partir de los metros cúbicos leídos en el medidor del cliente. Para ello, la empresa define tres bloques de facturación. El primer bloque corresponde a los primeros 50 metros cúbicos, que se facturan a razón de 350 pesos por metro cúbico. El segundo bloque comprende los siguientes 20 metros cúbicos, es decir desde el metro cúbico número 51 hasta el 70, los cuales se facturan a un valor de 555,20 pesos  por metro cúbico. Finalmente, todo consumo que supere los 70 metros cúbicos se considera dentro del bloque excedente o de castigo, y se factura a razón de 1.552,20 pesos por metro cúbico.
    Cabe aclarar que los clientes cuyo consumo mensual sea inferior a 50 metros cúbicos igualmente abonan un mínimo de 50 metros cúbicos, de modo que ese sea el valor base de cálculo. 
    La tarea consiste en definir una arrow function llamada calcularImporteAgua que reciba como parámetro el total de metros cúbicos leídos y devuelva el importe base a pagar por el cliente según el esquema tarifario antes descripto. 
    Consumo (m³) Cálculo aplicado Importe final ($) 
    30  (50 * 350.00)                   17500.00 
    55  (50 * 350.00) + (5 * 555.20)    20276.00 
    85  (50 * 350.00) + (20 * 555.20) + (15 * 1552.20)  57214.00 
    
    Nota: Debe devolver un número    
    */
    const texto1Eje17 = 'El impuesto es de $ '
    const idmetrosCubicos = document.getElementById("idmetrosCubicos")
    const idenviarMetrosCubicos = document.getElementById("idenviarMetrosCubicos")
    const idh3Ejer17 = document.getElementById("idh3Ejer17")

    idenviarMetrosCubicos.onclick = () =>{
        idh3Ejer17.textContent = texto1Eje17 + " "+ `${calcularImporteAgua(Number(idmetrosCubicos.value))}`
    }

    /* 
    Ejercicio Nro. 18: 
    Realizar una arrow function que reciba como parámetro el Importe Base de una factura de Servicios Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function. 
    Nota: Debe devolver un número
    */
    const texto1Eje18 = "El valor de la Tasa Subsuelo es de "
    const idimporteBase = document.getElementById("idimporteBase")
    const idenviarImporteBase = document.getElementById("idenviarImporteBase")
    const idh3Ejer18 = document.getElementById("idh3Ejer18")

    idenviarImporteBase.onclick = () =>{
        idh3Ejer18.textContent = texto1Eje18+ " " +` ${calcularTasaSubsuelo(Number(idimporteBase.value))}`
    }

    /*
    Ejercicio Nro. 19: 
    Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE (Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de la arrow function. 
    Nota: Debe devolver un número  
    */
    const texto1Eje19 = "El valor de la Tasa de Fiscalizacion es de "
    const idimporteImpuesto = document.getElementById("idimporteImpuesto")
    const idenviarImporteImpuesto = document.getElementById("idenviarImporteImpuesto")
    const idh3Ejer19 = document.getElementById("idh3Ejer19")

    idenviarImporteImpuesto.onclick = () =>{
        idh3Ejer19.textContent = texto1Eje19 + " " + ` ${calcularTasaFiscalizcion(Number(idimporteImpuesto.value))}`
    }

    /*
    Ejercicio Nro. 20: 
    Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un paciente diabético; Basada en tres datos importantes para el cálculo. 
    1) Nivel de glucosa en sangre 
    2) Peso Corporal (en kilogramos) 
    3) Tipo de diabetes 
    a. Tipo 1
    b. Tipo 2 
    Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, este último término solamente si la glucosa es mayor a 180.
    Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, este último término solamente si la glucosa es mayor a  180. 
    La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada 
    (argumentos) nivel de glucosa, peso corporal y tipo de diabetes.  
 
    Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente
    */
    const texto1Eje20 = "El valor de Insulina recomendada es de "
    const nivelGlucosa = document.getElementById("idnivelGlucosa")
    const pesoCorporal = document.getElementById("idpesoCorporal")
    const tipoDiabetes = document.getElementById("idtipoDiabetes")
    const enviarDatosDiabetes = document.getElementById("idenviarDatosDiabetes")
    const idh3Ejer20 = document.getElementById("idh3Ejer20")

    enviarDatosDiabetes.onclick = () =>{
        idh3Ejer20.textContent = texto1Eje20 + " " + ` ${calcularCantidadInsulina(Number(nivelGlucosa.value),Number(pesoCorporal.value), Number(tipoDiabetes.value ))}`
    }

    /*
    Ejercicio Nro. 21: 
    Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad de vocales “mayúsculas y/o minúsculas” que tiene la misma.  
    Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o expresiones regulares. 
    Nota: Debe devolver un número
    */
    const texto1Eje21 = "La cantidad de vocales mayusculas o minusculas es de "
    const idCadenaTextoUno = document.getElementById("idCadenaTextoUno")
    const idEnviarCadenaTextoUno = document.getElementById("idEnviarCadenaTextoUno")
    const idh3Ejer21 = document.getElementById("idh3Ejer21")

    idEnviarCadenaTextoUno.onclick = () =>{
        idh3Ejer21.textContent = texto1Eje21 + " " + ` ${determinaCantVocales(idCadenaTextoUno.value)}`
    }   

    /*
    Ejercicio Nro. 22: 
    Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO SEA VOCAL. 
    Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal. 
    No debe utilizar métodos de strings como replace(), split() o expresiones regulares. 
    Nota: Debe devolver un número.
    */
    const texto1Eje22 = "La cantidad de consonantes mayusculas o minusculas es de "
    const idCadenaTextoDos = document.getElementById("idCadenaTextoDos")
    const idEnviarCadenaTextoDos = document.getElementById("idEnviarCadenaTextoDos")
    const idh3Ejer22 = document.getElementById("idh3Ejer22")

    idEnviarCadenaTextoDos.onclick = () =>{
        idh3Ejer22.textContent = texto1Eje22 + " " + ` ${determinaCantConsonantes(idCadenaTextoDos.value)}`
    }   

    /*
    Ejercicio Nro. 23: 
    Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s” (mayúsculas o minúsculas). 
    La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana. 
    Debe devolver true si se cumplen las dos apariciones y false en caso contrario. 
    No puede utilizar métodos como includes() o indexOf(). 
    Nota: Debe devolver un boolean (true ó false).
    */
    const texto1Eje23 = "Hay al menos dos letras (s - true)"
    const idCadenaTextoTres = document.getElementById("idCadenaTextoTres")
    const idEnviarCadenaTextoTres = document.getElementById("idEnviarCadenaTextoTres")
    const idh3Ejer23 = document.getElementById("idh3Ejer23")

    idEnviarCadenaTextoTres.onclick = () =>{
        idh3Ejer23.textContent = texto1Eje23 + " " + ` ${determinaCantS(idCadenaTextoTres.value)}`
    }   
    /*
    Ejercicio Nro. 24: 
    Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma contiene al menos tres espacios en blanco. 
    La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. 
    Durante el recorrido, deberá contar la cantidad de espacios que se encuentren. 
    En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el ciclo mediante la instrucción break y devolver el valor lógico true. 
    Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false. 
    Nota: Debe devolver un boolean (true ó false). 
    */
    const texto1Eje24 = "Existe al menos 3 espacios en blanco (true)"
    const idCadenaTextoCuatro = document.getElementById("idCadenaTextoCuatro")
    const idEnviarCadenaTextoCuatro = document.getElementById("idEnviarCadenaTextoCuatro")
    const idh3Ejer24 = document.getElementById("idh3Ejer24")

    idEnviarCadenaTextoCuatro.onclick = () =>{
        idh3Ejer24.textContent = texto1Eje24 + " " + ` ${determinaCantEspacios(idCadenaTextoCuatro.value)}`
    }   

    /*
    Ejercicio Nro. 25: 
    Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no contiene ningún dígito numérico (del 0 al 9). 
    La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'. 
    Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor lógico false, ya que la cadena deja de cumplir la condición “no contiene números”. 
    En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true. 
    Nota: Debe devolver un boolean (true ó false).
    */
    const texto1Eje25 = "Existe al menos un valor numerico (true)"
    const idCadenaTextoCinco = document.getElementById("idCadenaTextoCinco")
    const idEnviarCadenaTextoCinco = document.getElementById("idEnviarCadenaTextoCinco")
    const idh3Ejer25 = document.getElementById("idh3Ejer25")

    idEnviarCadenaTextoCinco.onclick = () =>{
        idh3Ejer25.textContent = texto1Eje25 + " " + ` ${determinaNumeros(idCadenaTextoCinco.value)}`
    }   
}
