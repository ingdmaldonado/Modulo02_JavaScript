
window.addEventListener("load",()=>{

    console.log("running");

    /* Ejemplo de Spread Operator con VECTORES */

    const NumerosPares = [0,2,4,6,8,10];

    const NumerosImpares = [1,3,5,7,9];

    const Numeros = [...NumerosPares,...NumerosImpares];

    console.log(NumerosPares);
    console.log(NumerosImpares);
    console.log(Numeros);

    /* 
        productos en la sucursal1
        productos en la sucursal2    
    */

    const padronCatamarca = 
        [
            {
                dni:37489888,
                apellido:"HEREDIA",
                nombre:"ANTONELLA",
                provincia:"CATAMARCA"
            },
            {
                dni:3989299,
                apellido:"BARRIONUEVO",
                nombre:"MARIO",
                provincia:"CATAMARCA"
            }
        ]

    const padronRioja = 
        [
            {
                dni:374895223,
                apellido:"HEREDIA RIOJA",
                nombre:"ANTONELLA RIOJA",
                provincia:"RIOJA"
            },
            {
                dni:3989299,
                apellido:"BARRIONUEVO r",
                nombre:"MARIO R",
                provincia:"RIOJA"
            }
        ]

    const vectorEjemplo = [2,4,6,8]

    const PadronUnico1SinSpread = [padronCatamarca,padronRioja];

    const PadronUnico2ConSpread = [...padronCatamarca,...padronRioja];

    console.log(PadronUnico1SinSpread); // no use spread

    console.log(PadronUnico2ConSpread); // si use spread

    /* 
        Destructuring => objetos y de Vectores

        Spread Operator => Vectores y Objetos

    */

    const jugador1 = 
        {
            dni:22333888,
            apellido:"MESSI LIONEL ANDRES"
        }

    const premios =
        {
            titulo1:"CAMPEON DEL MUNDO",
            titulo2:"CAMPEON DE AMERICA",
            titulo3:"CAMPEON DE LA CHAMPION"
        }

    const objetoFusionado = {...jugador1,...premios};

    console.log(objetoFusionado);

    /* 
    
        clientesDeRivero = [
            {
                dni:28888999,
                apellido:"ROBERTO CARLOS"
            },
            {},
            {}
        ];

        {
            dni:28888999,
            apellido:"ROBERTO CARLOS",
            situacionSF:5,


        }

        VERAZ (1,2,3,4,5)

    */

})