import {precioDeVenta, promedioDeTres, notaExamen, calcularSobretasa, calcularImporteBaseAgua, tasaSubsuelo, tasaEnre, dosisInsulina, cantidadVocales, cantidadConsonantes, dosLetraS, funcionEspaciosEnBlanco, funcionNingunDigitoNumerico} from "./funciones.js"
window.onload = () => {
    console.log(`La pagina esta cargada`);

    /* ejemplo invocacion ejercicio numero 13 */
    let resultado1 = precioDeVenta(700, 100);
    console.log(resultado1);

    /* ejemplo invocacion ejercicio numero 14 */
    let resultado2 = promedioDeTres(10, 8, 7);
    console.log(resultado2);

    /* ejemplo invocacion ejercicio numero 15 */
    let resultado3 = notaExamen(10);
    console.log(resultado3)

    /* ejemplo invocacion ejercicio numero 16 */
    let resultado4 = calcularSobretasa(3, 72000000);
    console.log(resultado4);

    /* ejemplo invocacion ejercicio numero 17 */
    let resultado5 = calcularImporteBaseAgua(20)
    console.log(`Para 20 metros cubicos ${resultado5}`)
    
    let resultado6 = calcularImporteBaseAgua(49)
    console.log(`Para 49 metros cubicos ${resultado6}`)

    let resultado7 = calcularImporteBaseAgua(68)
    console.log(`Para 68 metros cubicos ${resultado7}`)

    let resultado8 = calcularImporteBaseAgua(99)
    console.log(`para 99 metros cubicos ${resultado8}`)

    /* ejemplo invocacion ejercicio numero 18 */
    let resultado9 = tasaSubsuelo(50000)
    console.log(`Tasa subsuelo: ${resultado9}`)

    /* ejemplo invocacion ejercicio numero 19 */
    let resultado10 = tasaEnre(73617.80)
    console.log(`Tasa ENRE: ${resultado10}`)

    /* ejemplo invocacion ejercicio numero 20 */
    let resultado11 = dosisInsulina(190, 95, 1)
    console.log(resultado11)
    let resultado12 = dosisInsulina(220, 95, 2)
    console.log(resultado12)
    let resultado13 = dosisInsulina(95, 90, 1)
    console.log(resultado13)
    let resultado14 = dosisInsulina(200, 70, 1)
    console.log(resultado14)
    let resultado15 = dosisInsulina(140, 90, 2)
    console.log(resultado15)

    /* ejemplo invocacion ejercicio numero 21 */ 
    console.log(cantidadVocales(`Probando ejercicio numero 21 del trabajo practico 3`));  
    
    /* ejemplo invocacion ejercicio numero 22 */
    console.log(cantidadConsonantes(`Probando ejercicio numero 22 del trabajo practico 3`))

    /* ejemplo invocacion ejercicio numero 23 */
    let resultado16 = dosLetraS(`Salas`)
    console.log(resultado16)
    let resultado17 = dosLetraS(`Sospechoso`)
    console.log(resultado17)
    let resultado18 = dosLetraS(`Sabado`)
    console.log(resultado18)
    let resultado19 = dosLetraS(`Botella`)
    console.log(resultado19)

    /* ejemplo invocacion ejercicio numero 24 */
    let resultado20 = funcionEspaciosEnBlanco(`Hola     Hola`)
    console.log(resultado20)
    let resultado21 = funcionEspaciosEnBlanco(`UNO DOS TRES CUATRO`)
    console.log(resultado21)
    let resultado22 = funcionEspaciosEnBlanco(`esto  dosEspaciosEnBlanco`)
    console.log(resultado22)
    let resultado23 = funcionEspaciosEnBlanco(`espacio  doble`)
    console.log(resultado23)
    
    /* ejemplo invocacion ejercicio numero 25 */
    let resultado24 = funcionNingunDigitoNumerico("sin numeros")
    console.log(resultado24)
    let resultado25 = funcionNingunDigitoNumerico("NUMERO 5")
    console.log(resultado25)
    let resultado26 = funcionNingunDigitoNumerico("esto tiene numeros")
    console.log(resultado26)
    let resultado27 = funcionNingunDigitoNumerico("esto tiene el numero 10")
    console.log(resultado27)
}
