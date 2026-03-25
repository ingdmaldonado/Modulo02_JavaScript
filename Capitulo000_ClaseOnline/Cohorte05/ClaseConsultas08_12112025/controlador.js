
const fnAnalizarEspacios = (texto)=>{

    let contadorDeEspacios = 0;

    let salida = false;

    for(let i = 0; i < texto.length;i++)
    {
        let caracter = texto[i];

        if(caracter === ' ')
        {
            contadorDeEspacios = contadorDeEspacios + 1;

            if(contadorDeEspacios === 3)
            {
               salida = true;
               break;
            }
        }
        console.log(`caracter ${i} - ${caracter}`);
    }

    console.log(`La cadena ingresada tiene ${contadorDeEspacios}`);

    return salida;

    

}

/* 
    programador junior  (1 a 3)

    programador semi-junior (4 - 6)

    senior (20 - 30)

    super-senior (40)


*/


window.onload = ()=>{

    const idEdad = document.querySelector("#idEdad");
    const idBtnAceptar = document.querySelector("#idBtnAceptar");

    idBtnAceptar.onclick = ()=>{

        let edadIngresada = idEdad.value;

        /*
        isNan => Si no es un numero

        is Not a Number => si no es un Numero

        a partir de una cadena de texto
        la función evalua si lo que está
        a dentro es un numero o no ?.

        es una función boolean => devuelve true o false

        */

        /* 
        
        Si tengo un numero => me devuelve false
        
        Si no tengo un numero => me devuelve true
        
        */

        /* La función isNan Sirve para
        asegurarme que cuando yo intente
        pasar un string a numero. esa
        operación se pueda realizar */

        console.log(isNaN(edadIngresada));

        console.log(!isNaN(edadIngresada));

        console.log(Number(edadIngresada));

        console.log(`La edad es ${edadIngresada}`);

        let domicilioSuministro1 = `Chacabuco 881- SFVC - CP: 4709`;
        let domicilioSuministro2 = `Prado 552`;

        let domicilioReal = `Zurita 425`;

        fnAnalizarEspacios(domicilioSuministro1);

        console.log("--------------------");

        fnAnalizarEspacios(domicilioSuministro2);


    };


}