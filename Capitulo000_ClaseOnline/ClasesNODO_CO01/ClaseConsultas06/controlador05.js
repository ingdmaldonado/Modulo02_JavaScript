

/* creo la función que recibe
como parametro un texto, evalua
y determina si corresponde a un
mes del calendario en mayúsculas */

const fnValidarMes = (texto)=>
    {
        let elMesEsValido = false;
       switch(texto)
       {
            case "ENERO":
                {
                    elMesEsValido = true;
                    break;

                }

            case "FEBRERO":
                {
                    elMesEsValido = true;
                    break;
                }
            default:
                {
                    elMesEsValido = false;
                    break;
                }
       }
       return elMesEsValido;
    }


window.addEventListener("load",()=>
    {

        console.log("esto esta funcionando");

        /* en lugar de cargarlo a mano 
        debería ingresarlo desde un input */
        let textoDelMes = "feBreRO";

        let resultado = fnValidarMes(textoDelMes.toUpperCase());

        if(resultado)
        {
            console.log("el mes ingresado corresponde a un mes del calendario")
        }
        else
        {
            console.log("el mes NO corresponde a un mes ingresado");
        }

        console.log(resultado);


    })