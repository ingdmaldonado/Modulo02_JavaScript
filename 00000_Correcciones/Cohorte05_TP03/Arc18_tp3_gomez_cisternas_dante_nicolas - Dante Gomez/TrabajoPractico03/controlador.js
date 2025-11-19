import {
    precioDeVenta,
    promedioDeNotas,
    notaATexto,
    calcularSobreTasa,
    calcularImporteAgua,
    calcularTasaDeSubsuelo,
    calcularTasaFiscalizacionENRE,
    calcularDosisInsulina,
    contarVocales,
    contarConsonantes,
    contieneDosS,
    contieneTresEspacios,
    noContieneDigitos
} from "./funciones.js";

window.onload = ()=>{

    console.log(`la pagina esta cargada`);

    // Ejercicio nro 13
    let resultado1 = precioDeVenta(700,500);
    console.log(resultado1);

    // Ejercicio nro 14
    let resultado2 = promedioDeNotas(10,8,7);
    console.log(resultado2);

    // Ejercicio nro 15
    let resultado3 = notaATexto(5);
    console.log(resultado3);

    // Ejercicio nro 16 
    let resultado4 = calcularSobreTasa(23000,3);
    console.log(resultado4);

    // Ejercicio nro 17
    let resultado5 = calcularImporteAgua(50);
    console.log(resultado5);

    // Ejercicio nro 18
    let resultado6 = calcularTasaDeSubsuelo(2500);
    console.log(resultado6);

    // Ejercicio nro 19
    let resultado7 = calcularTasaFiscalizacionENRE(3000);
    console.log(resultado7);

    // Ejercicio nro 20
    let resultado8 = calcularDosisInsulina(180,70,1);
    console.log(resultado8);

    // Ejercicio nro 21 
    let resultado9 = contarVocales("Hola Mundo");
    console.log(resultado9);

    // Ejercicio nro 22
    let resultado10 = contarConsonantes("Hola Mundo");
    console.log(resultado10)

    // Ejercicio nro 23
    let resultado11 = contieneDosS("Sistemas");
    console.log(resultado11);

    // Ejercicio nro 24
    let resultado12 = contieneTresEspacios("Hola Mundo");
    console.log(resultado12)

    // Ejercicio nro 25
    let resultado13 = noContieneDigitos("Hola mundo");
    console.log(resultado13);

}