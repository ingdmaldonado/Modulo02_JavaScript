
import {calcularPrecioVenta} from './modelo.js';
import {calcularPromedioDeTresNotas} from './modelo.js';
import {condicionDelAlumno} from './modelo.js';
import {aplicarImpuestoSobreTasa} from './modelo.js';
import {calcularImporteAgua} from './modelo.js';
import {calcularTasaDeSubsuelo} from './modelo.js';
import {calcularTasaDeFiscalizacionENRE} from './modelo.js';
import {calcularDosisDeInsulinaRecomendada} from './modelo.js';
import {cantidadDeVocalesDeUnaCadena} from './modelo.js';
import {cantidadDeConsonantesDeUnaCadena} from './modelo.js';
import {contieneAlMenosDosLetrasS} from './modelo.js';
import {contieneAlMenosTresEspaciosEnBlanco} from './modelo.js';
import {noContieneNumeros} from './modelo.js';

window.onload = () => {
    
    /**********************************************************
      Ejemplo Invocación Ejercicio Nro. 13 - con manejo de DOM
    ***********************************************************/


    console.log('Runnign controlador.js');
    // 1ro- Accedo a los elementos html que se quiere controlar
    const inputImporteDeCompra = document.getElementById('inputImporteDeCompra');
    const inputMargenDeGanancia = document.getElementById('inputMargenDeGanancia');
    const btnCalcularPrecioVenta = document.getElementById('btnCalcularPrecioVenta');
    const idCajaResultado = document.getElementById('idCajaResultado'); 
    const idResultado = document.getElementById('idResultado'); 

    btnCalcularPrecioVenta.onclick = () => {
        // 2do- Obtengo los valores ingresados por el usuario
        let valorImporteDeCompra = Number(inputImporteDeCompra.value);
        let valorMargenDeGanancia = Number(inputMargenDeGanancia.value);
        let resultado;
        // 3ro- Llamo a la funcion del modelo para calcular el precio de venta y controlo los valores
        if(valorImporteDeCompra>0){
            if(valorMargenDeGanancia>0 && valorMargenDeGanancia<=100){
                resultado = calcularPrecioVenta(valorImporteDeCompra,valorMargenDeGanancia);
            }else{
                alert("Por favor, ingrese un margen de ganancia válido (entre 0 y 100).");
            }
        }else{
            alert("Por favor, ingrese un importe de compra válido (mayor a 0).");
        }
        // 4to - Muestro Resultados a traves del html
        // console.log('***********Ejercicio Nro. 13***********' + valorImporteDeCompra);
        // console.log('El precio de venta es: ' + resultado);
        idCajaResultado.classList.remove('hidden');
        idResultado.textContent = `El precio de venta es: $${resultado.toFixed(2)}`;
    }


        
    /*********************************************************
     Ejemplo Invocación Ejercicio Nro. 13 - sin manejo de DOM
     *********************************************************/
    let ej13_importeDeCompra = 1000;
    let ej13_margenDeGanancia = 30;
    let ej13_resultado = calcularPrecioVenta(ej13_importeDeCompra, ej13_margenDeGanancia);
    console.log('***********Ejercicio Nro. 13***********');
    console.log(`Para un importe de = $${ej13_importeDeCompra} y un margen de ganancia = ${ej13_margenDeGanancia}%, el precio de venta es = $${ej13_resultado.toFixed(2)}`);



     /*************************************
     Ejemplo Invocación Ejercicio Nro. 14
     **************************************/
    let nota1 = 9;
    let nota2 = 8;
    let nota3 = 7;
    let ej14_resultado = calcularPromedioDeTresNotas(nota1,nota2,nota3);
    console.log('***********Ejercicio Nro. 14***********');
    console.log(`El promedio de las notas (${nota1}, ${nota2}, ${nota3}) es: ${ej14_resultado.toFixed(2)}`);

     /*************************************
     Ejemplo Invocación Ejercicio Nro. 15
     **************************************/
    let ej15_notaPromedio1 = 3;
    let ej15_resultado1 = condicionDelAlumno(ej15_notaPromedio1);
    let ej15_notaPromedio2 = 7;
    let ej15_resultado2 = condicionDelAlumno(ej15_notaPromedio2);
    let ej15_notaPromedio3 = 8;
    let ej15_resultado3 = condicionDelAlumno(ej15_notaPromedio3);
    let ej15_notaPromedio4 = 10;
    let ej15_resultado4 = condicionDelAlumno(ej15_notaPromedio4);
    let ej15_notaPromedio5 = 12;
    let ej15_resultado5 = condicionDelAlumno(ej15_notaPromedio5);
    console.log('***********Ejercicio Nro. 15***********');
    console.log(`La condición del alumno con nota promedio (${ej15_notaPromedio1}) es: ${ej15_resultado1}`);
    console.log(`La condición del alumno con nota promedio (${ej15_notaPromedio2}) es: ${ej15_resultado2}`);
    console.log(`La condición del alumno con nota promedio (${ej15_notaPromedio3}) es: ${ej15_resultado3}`);
    console.log(`La condición del alumno con nota promedio (${ej15_notaPromedio4}) es: ${ej15_resultado4}`);
    console.log(`La condición del alumno con nota promedio (${ej15_notaPromedio5}) es: ${ej15_resultado5}`);


     /*************************************
     Ejemplo Invocación Ejercicio Nro. 16
     **************************************/
    let importeBase = 250000000;

    console.log('***********Ejercicio Nro. 16***********');
    for (let tipoBebida = 1; tipoBebida <= 5; tipoBebida++) {
        let ej16_resultado = aplicarImpuestoSobreTasa(tipoBebida, importeBase);
        console.log(`Para el importe "${importeBase}" - La sobre tasa para el tipo de bebida (${tipoBebida}) es: $${ej16_resultado.toFixed(2)}`);
    }



     /*************************************
     Ejemplo Invocación Ejercicio Nro. 17
     **************************************/

    console.log('***********Ejercicio Nro. 17***********');
    let ej17_metrosCubicos1 = 30;
    let ej17_metrosCubicos2 = 55;
    let ej17_metrosCubicos3 = 85;
    let ej17_metrosCubicos4 = 99;
    let ej17_importeFinal1 = calcularImporteAgua(ej17_metrosCubicos1);
    let ej17_importeFinal2 = calcularImporteAgua(ej17_metrosCubicos2);
    let ej17_importeFinal3 = calcularImporteAgua(ej17_metrosCubicos3);
    let ej17_importeFinal4 = calcularImporteAgua(ej17_metrosCubicos4);
    console.log(`Para ${ej17_metrosCubicos1} mts. cúbicos, el importe base de agua es: $${ej17_importeFinal1.toFixed(2)}`);
    console.log(`Para ${ej17_metrosCubicos2} mts. cúbicos, el importe base de agua es: $${ej17_importeFinal2.toFixed(2)}`);
    console.log(`Para ${ej17_metrosCubicos3} mts. cúbicos, el importe base de agua es: $${ej17_importeFinal3.toFixed(2)}`);
    console.log(`Para ${ej17_metrosCubicos4} mts. cúbicos, el importe base de agua es: $${ej17_importeFinal4.toFixed(2)}`);


    /*************************************
     Ejemplo Invocación Ejercicio Nro. 18
     **************************************/

    console.log('***********Ejercicio Nro. 18***********');
    // tomo el importe base de factura del ejercicio anterior
    let ej18_tasa1 = calcularTasaDeSubsuelo(ej17_importeFinal1); //50*350 = 17500.00
    let ej18_tasa2 = calcularTasaDeSubsuelo(ej17_importeFinal2); // (50*350) + (5*555.20) = 20276.00

    console.log(`Importe Base de una factura =  $${ej17_importeFinal1}, la "tasa de subsuelo" aplicada es: $${ej18_tasa1.toFixed(2)}`);
    console.log(`Importe Base de una factura = $${ej17_importeFinal2}, la "tasa de subsuelo" aplicada es: $${ej18_tasa2.toFixed(2)}`);



    /*************************************
     Ejemplo Invocación Ejercicio Nro. 19
     **************************************/
    console.log('***********Ejercicio Nro. 19***********');
    // para variar tomo otros importes base de factura
    let ej19_importeBase1 = 200000;
    let ej19_importeBase2 = 350000;
    let ej19_tasaFiscalizacion1 = calcularTasaDeFiscalizacionENRE(ej19_importeBase1);
    let ej19_tasaFiscalizacion2 = calcularTasaDeFiscalizacionENRE(ej19_importeBase2);
    console.log(`Importe Base de una factura = $${ej19_importeBase1}, la "tasa de fiscalización ENRE" aplicada es: $${ej19_tasaFiscalizacion1.toFixed(2)}`);
    console.log(`Importe Base de una factura = $${ej19_importeBase2}, la "tasa de fiscalización ENRE" aplicada es: $${ej19_tasaFiscalizacion2.toFixed(2)}`);



    /*************************************
     Ejemplo Invocación Ejercicio Nro. 20
     **************************************/

    console.log('***********Ejercicio Nro. 20***********');
    let ej20_nivelDeGlucosa1 = 120;
    let ej20_pesoCorporal1 = 75;
    let ej20_tipoDiabetes1 = 1; // Tipo 1
    let ej20_nivelDeGlucosa2 = 200;
    let ej20_pesoCorporal2 = 63;
    let ej20_tipoDiabetes2 = 2; // Tipo 2
    let ej20_dosisRecomendada1 = calcularDosisDeInsulinaRecomendada(ej20_nivelDeGlucosa1, ej20_pesoCorporal1, ej20_tipoDiabetes1);
    let ej20_dosisRecomendada2 = calcularDosisDeInsulinaRecomendada(ej20_nivelDeGlucosa2, ej20_pesoCorporal2, ej20_tipoDiabetes2);
    // Resultados
    console.log(`Para una persona que pesa ${ej20_pesoCorporal1} kg y tiene un nivel de glucosa en sangre de ${ej20_nivelDeGlucosa1}, la dosis de insulina recomendada es: ${ej20_dosisRecomendada1.toFixed(2)}`);
    console.log(`Para una persona que pesa ${ej20_pesoCorporal2} kg y tiene un nivel de glucosa en sangre de ${ej20_nivelDeGlucosa2}, la dosis de insulina recomendada es: ${ej20_dosisRecomendada2.toFixed(2)}`);
    

    /*************************************
     Ejemplo Invocación Ejercicio Nro. 21
     **************************************/
    console.log('***********Ejercicio Nro. 21***********');
    let ej21_cadena1 = "Holaaa soy sergio";
    let ej21_cadena2 = "Desarrollo Full Stack - 5ta Cohorte";
    let ej21_cantidadVocales1 = cantidadDeVocalesDeUnaCadena(ej21_cadena1);
    let ej21_cantidadVocales2 = cantidadDeVocalesDeUnaCadena(ej21_cadena2);
    console.log(`La cadena --> "${ej21_cadena1}" tiene "${ej21_cantidadVocales1}" vocales.`);
    console.log(`La cadena --> "${ej21_cadena2}" tiene "${ej21_cantidadVocales2}" vocales.`);

    /*************************************
     Ejemplo Invocación Ejercicio Nro. 22
     **************************************/
    console.log('***********Ejercicio Nro. 22***********');
    let ej22_cadena1 = "Holaaa soy sergio";
    let ej22_cadena2 = "Desarrollo Full Stack - 5ta Cohorte";
    let ej22_cantidadConsonantes1 = cantidadDeConsonantesDeUnaCadena(ej22_cadena1);
    let ej22_cantidadConsonantes2 = cantidadDeConsonantesDeUnaCadena(ej22_cadena2);
    console.log(`La cadena --> "${ej22_cadena1}" tiene "${ej22_cantidadConsonantes1}" consonantes.`);
    console.log(`La cadena --> "${ej22_cadena2}" tiene "${ej22_cantidadConsonantes2}" consonantes.`);
    


    /*************************************
     Ejemplo Invocación Ejercicio Nro. 23
     **************************************/
    console.log('***********Ejercicio Nro. 23***********');
    let ej23_cadena1 = "Full Stack";
    let ej23_cadena2 = "Sistemas";
    let ej23_cadena3 = "Salsa";
    let ej23_resultado1 = contieneAlMenosDosLetrasS(ej23_cadena1);
    let ej23_resultado2 = contieneAlMenosDosLetrasS(ej23_cadena2);
    let ej23_resultado3 = contieneAlMenosDosLetrasS(ej23_cadena3);
    console.log(`La cadena --> "${ej23_cadena1}" contiene al menos dos letras 's': "${ej23_resultado1}"`);
    console.log(`La cadena --> "${ej23_cadena2}" contiene al menos dos letras 's': "${ej23_resultado2}"`);
    console.log(`La cadena --> "${ej23_cadena3}" contiene al menos dos letras 's': "${ej23_resultado3}"`);



    /*************************************
     Ejemplo Invocación Ejercicio Nro. 24
     **************************************/
    console.log('***********Ejercicio Nro. 24***********');
    let ej24_cadena1 = "Esta es una cadena de prueba";
    let ej24_cadena2 = "Probando espacios";
    let ej24_cadena3 = "   ";
    let ej24_resultado1 = contieneAlMenosTresEspaciosEnBlanco(ej24_cadena1);
    let ej24_resultado2 = contieneAlMenosTresEspaciosEnBlanco(ej24_cadena2);
    let ej24_resultado3 = contieneAlMenosTresEspaciosEnBlanco(ej24_cadena3);
    console.log(`La cadena --> "${ej24_cadena1}" contiene al menos tres espacios en blanco: "${ej24_resultado1}"`);
    console.log(`La cadena --> "${ej24_cadena2}" contiene al menos tres espacios en blanco: "${ej24_resultado2}"`);
    console.log(`La cadena --> "${ej24_cadena3}" contiene al menos tres espacios en blanco: "${ej24_resultado3}"`);
    

    
    /*************************************
     Ejemplo Invocación Ejercicio Nro. 24
     **************************************/
    console.log('***********Ejercicio Nro. 25***********');
    let ej25_cadena1 = "Desarrollo";
    let ej25_cadena2 = "Full Stack 2025";
    let ej25_cadena3 = "TP sin números";
    let ej25_resultado1 = noContieneNumeros(ej25_cadena1);
    let ej25_resultado2 = noContieneNumeros(ej25_cadena2);
    let ej25_resultado3 = noContieneNumeros(ej25_cadena3);
    console.log(`La cadena --> "${ej25_cadena1}" no contiene números: "${ej25_resultado1}"`);
    console.log(`La cadena --> "${ej25_cadena2}" no contiene números: "${ej25_resultado2}"`);
    console.log(`La cadena --> "${ej25_cadena3}" no contiene números: "${ej25_resultado3}"`);

}






