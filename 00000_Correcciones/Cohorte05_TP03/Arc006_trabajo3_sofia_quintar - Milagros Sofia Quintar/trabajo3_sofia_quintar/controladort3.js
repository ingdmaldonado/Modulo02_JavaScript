import {promedioAlumn,precioVenta,puntaje,impuestoTasa,calcularImporteAgua,servicioAgua,servicioAguaENRE,dosisInsulina,FnCantidadConsonantes,FnletrasS,FnEspacios,mayusMins,numerosTxt} from "./modulot3.js"

    window.onload = ()=>{

        // ejercicio 13 
        console.log(`la app esta corriendo`);

        let resultado1 = precioVenta(4000,90);

        console.log(`EJERCICIO 13: ${resultado1}`);

        // ejercicio 14

        let resultado2 = promedioAlumn(5,7,10)

        console.log(`EJERCICIO 14: ${resultado2}`);

        // ejercicio 15

        let resultado3 = puntaje(6.6)

        console.log(`EJERCICIO 15: ${resultado3}`);

        // ejercicio 16

        let resultado4 = impuestoTasa(1,1400)

        console.log(`EJERCICIO 16: ${resultado4}`);

        // ejercicio 17

        let resultado5 = calcularImporteAgua(30)

        console.log(`EJERCICIO 17: ${resultado5}`)

        /// ejercicio 18
        
        let resultado6 = servicioAgua(40000)

        console.log(`EJERCICIO 18: ${resultado6}`)

        /// ejercicio 19

        let resultado7 = servicioAguaENRE(60000)

        console.log(`EJERCICIO 19: ${resultado7}`)

        /// ejercicio 20
        
        let resultado8 = dosisInsulina(100,75,1);

        console.log(`EJERCICIO 20: NIVEL INSULINA RECOMENDADO PARA EL PACIENTE: ${resultado8}`);

        /// ejercicio 21

        let resultado9 = FnCantidadConsonantes("Pastaflora")

        console.log(`EJERCICIO 21: La palabra tiene ${resultado9} consonantes`)

        /// ejercicio 22
        
        let resultado10  = FnletrasS("Serpiente")

        console.log(`EJERCICIO 22: ¿La palabra tiene 2 o mas "s"? = ${resultado10}`)

        /// ejercicio 23

        let resultado11 = FnEspacios("pepito juega a la pelota por la mañana")

        console.log(`EJERCICIO 23: ¿La cadena de texto 3 o mas espacios en blanco? = ${resultado11}`)

        /// ejercicio 24 (21 EN LA GUIA)
         
        let resultado12 = mayusMins("LONdres")

        console.log(`la cantidad de vocales en minusculas y mayusculas son = ${resultado12.mayus} ${resultado12.minus}`) // PERDONE NO LO ENTIENDO A ESTE EJERCICIO, ES EL 21 DE LA GUIA 

        /// ejercicio 25

        let resultado13 = numerosTxt("prado2")

        console.log(`¿la cadena de texto carece de numeros? ${resultado13}`)

    }

