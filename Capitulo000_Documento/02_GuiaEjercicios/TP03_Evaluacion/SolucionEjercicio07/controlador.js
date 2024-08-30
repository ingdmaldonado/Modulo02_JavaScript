

    /* Función expresada como arrow function que recibe como parametro
    el capital y devuelve la rentabilidad */

    const fnCalcularRentabilidadPlazoFijo = (Capital)=>
        {
            if((Capital >= 500000) && (Capital <= 1500000))
            {
                return (Capital * 6)/100;
            }
            if((Capital > 1500000) && (Capital <= 5000000))
            {
                return (Capital * 7.5)/100;
            }
            if((Capital > 5000000) && (Capital <= 25000000))
            {
                return (Capital * 8.5)/100;
            }
            if(Capital > 25000000)
            {
                return (Capital * 9.5)/100;
            }
            return 0;
        }

    /* Función expresada como arrow function que recibe como parametro 
    la rentabilidad y una variable que indica si es cliente del banco
    y en función de ello devuelve un adicional sobre la rentabilidad del
    0,7% */

    const fnCalcularTasaAdicionalClientesDelBanco = (rentabilidad,esClienteDelBanco)=>
        {
            if(esClienteDelBanco)
            {
                return (rentabilidad * 0.7/100);
            }
            else
            {
                return 0;
            }
        }

    /* Función expresada como arrow function que recibe como parametro
    la rentabilidad y una variable que indica si el plazo fijo será 
    autorenovable cada tres meses y en función de ello devuelve sobre la
    rentabilidad un 0,9% adicional */

    const fnCalcularAdicionalParaPlazosFijosAutorenovables = (rentabilidad,esPlazoFijoAutoRenovable)=>
        {
            if(esPlazoFijoAutoRenovable)
            {
                return (rentabilidad * 0.9/100);
            }
            else
            {
                return 0;
            }
        }


window.addEventListener("load",()=>{

    /* capturamos los elementos/objetos HTML de la interfaz con los
    que queremos interactuar */

    const idCapitalAInvertir = document.querySelector("#idCapitalAInvertir");
    const idBtnCalcularRentabilidad = document.querySelector("#idBtnCalcularRentabilidad");

    const idEsClienteDelBanco = document.querySelector("#idEsClienteDelBanco");
    const idEsAutorenovable = document.querySelector("#idEsAutorenovable");

    const idCapitalInvertido = document.querySelector("#idCapitalInvertido");
    const idRentabilidadSalida = document.querySelector("#idRentabilidadSalida");
    const idRentabilidadAdicionalPorClienteDelBanco = document.querySelector("#idRentabilidadAdicionalPorClienteDelBanco");
	const idRentabilidadAdicionalPorPlazoFijoAutorenovable = document.querySelector("#idRentabilidadAdicionalPorPlazoFijoAutorenovable");
	const idRentabilidadTotal = document.querySelector("#idRentabilidadTotal");

    /* Mostramos los elementos capturados por pantalla */
    console.log(idCapitalAInvertir);
    console.log(idBtnCalcularRentabilidad);
    console.log(idEsClienteDelBanco);
    console.log(idEsAutorenovable);


    console.log(idCapitalInvertido);
    console.log(idRentabilidadSalida);
    console.log(idRentabilidadAdicionalPorClienteDelBanco);
    console.log(idRentabilidadAdicionalPorPlazoFijoAutorenovable);
    console.log(idRentabilidadTotal);


    /* Creamos variables globales a los eventos para realizar los cálculos */

    let capitalAInvertir = 0; // guardaremos el capital a invertir


    let rentabilidadPlazoFijo = 0; // guardaremos 
    let rentabilidadAdicionalPorClienteDelBanco = 0; // guardaremos la rentabilidad adicional para clientes del banco 
    let rentabilidadAdicionalPorPlazoFijoAutoRenovable = 0; // guardaremos la rentabilidad adicional para plazos fijos autorenovables de 3 meses
    let rentabilidadTotal = 0; // calcularemos la rentabilidad total

    /* Capturamos el evento load de la página */
    idBtnCalcularRentabilidad.addEventListener("click",()=>{

        /* aqui obtenemos el valor ingresado del capital a invertir */
        capitalAInvertir = Number(idCapitalAInvertir.value);

        /* aqui calculamos la rentabilidad por medio de una función que recibe como parametro el capital 
        a invertir */
        rentabilidadPlazoFijo = fnCalcularRentabilidadPlazoFijo(capitalAInvertir);

        /* En caso de ser cliente del banco tendrá un adicional del 0.7% que lo devuelve la función */
        rentabilidadAdicionalPorClienteDelBanco = fnCalcularTasaAdicionalClientesDelBanco(rentabilidadPlazoFijo,idEsClienteDelBanco.checked);

        /* En caso de aceptar un plazo fijo autorenovable de 3 meses tendrá un adicional del 0.9% que lo devuelve la función */
        rentabilidadAdicionalPorPlazoFijoAutoRenovable = fnCalcularAdicionalParaPlazosFijosAutorenovables(rentabilidadPlazoFijo,idEsAutorenovable.checked);

        /* la rentabilidad total es igual a la rentabilidad del plazo fijo + los adicionales */
        rentabilidadTotal = rentabilidadPlazoFijo + rentabilidadAdicionalPorClienteDelBanco + rentabilidadAdicionalPorPlazoFijoAutoRenovable;

        
	    idCapitalInvertido.textContent = `Capital Invertido ${capitalAInvertir.toLocaleString("ES-es")}`;
	    idRentabilidadSalida.textContent = `Rentabilidad Plazo Fijo ${rentabilidadPlazoFijo.toLocaleString("ES-es")}`;
	    idRentabilidadAdicionalPorClienteDelBanco.textContent = `Adicional por Cliente del Banco ${rentabilidadAdicionalPorClienteDelBanco.toLocaleString("ES-es")}`;
	    idRentabilidadAdicionalPorPlazoFijoAutorenovable.textContent = `Adicional por Plazo Fijo Auto Renovable (3 meses) ${rentabilidadAdicionalPorPlazoFijoAutoRenovable.toLocaleString("ES-es")}`;
	    idRentabilidadTotal.textContent = `Rentabilidad Total ${rentabilidadTotal.toLocaleString("ES-es")}`;

    })
})