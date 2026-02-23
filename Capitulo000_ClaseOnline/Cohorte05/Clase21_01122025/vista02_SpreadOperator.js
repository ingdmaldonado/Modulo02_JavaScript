

window.onload = ()=>{

    console.log(`aqui veremos Spread Operator`);

    /* Ejemplo 01 - Spread Operator en Objetos */

    const datosPersonaDeAFIP = 
    {
        cuit:"23240106639",
        nombre:"DANIEL MALDONADO",
        domiciliofiscal:"LA BOMBONERA 281",
        dni:2233
    }

    const datosNaranjaX = 
    {
        dniNaranja:2233,
        nombre:"MALDONADO ENRIQUE DANIEL",
        dineroEnCta:2,
        limiteDisponible:35000000

    }

    const PersonaUnificada = {...datosPersonaDeAFIP,...datosNaranjaX};

    console.log(datosPersonaDeAFIP);
    console.log(datosNaranjaX);

    console.log("ejemplo 01 ---")
    console.log(PersonaUnificada);

    /* ... significan Spread Operator = Operador
    de propagacion */


    /* renaper => REGISTRO NACIONAL DE LAS PERSONAS */

    /* Ejemplo 02 - Spread Operator con Vectores */


    const numerosPares = [0,2,4,6,8,10];

    const numerosImpares = [1,3,5,7,9];

    const numeros = [...numerosImpares,...numerosPares];

    console.log("ejemplo 02 ---")
    console.log(numeros);

}