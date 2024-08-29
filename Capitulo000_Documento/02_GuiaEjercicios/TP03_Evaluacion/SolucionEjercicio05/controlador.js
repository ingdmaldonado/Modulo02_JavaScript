

const fnValidarNombreMes = (nombreMes)=>
    {
        switch(nombreMes)
        {
            case 'ENERO':
                {
                    return true;
                    break;
                }
            case 'FEBRERO':
            {
                return true;
                break;
            }
            case 'MARZO':
                {
                    return true;
                    break;
                }
            case 'ABRIL':
                {
                    return true;
                    break;
                }
            case 'MAYO':
                {
                    return true;
                    break;
                }
            case 'JUNIO':
                {
                    return true;
                    break;
                }
            case 'JULIO':
                {
                    return true;
                    break;
                }
            case 'AGOSTO':
                {
                    return true;
                    break;
                }
            case 'SEPTIEMBRE':
                {
                    return true;
                    break;
                }
            case 'OCTUBRE':
                {
                    return true;
                    break;
                }
            case 'NOVIEMBRE':
                {
                    return true;
                    break;
                }
            case 'DICIEMBRE':
                {
                    return true;
                    break;
                }
            default:
                {
                    return false;
                    break;
                }
        }

    }

window.addEventListener("load",()=>
    {

        const idNombreMesIngresado = document.querySelector("#idNombreMesIngresado");
        const btnValidarMes = document.querySelector("#btnValidarMes");
        const idResultado = document.querySelector("#idResultado");

        let nombreIngresado = "";

        btnValidarMes.addEventListener("click",()=>
            {

                nombreIngresado = idNombreMesIngresado.value;

                console.log(fnValidarNombreMes(nombreIngresado.toUpperCase()));

                if(fnValidarNombreMes(nombreIngresado.toUpperCase()))
                {
                    idResultado.textContent = `El dato ingresado ${nombreIngresado} corresponde a un nombre de mes válido`;
                }
                else
                {
                    idResultado.textContent = `El dato ingresado ${nombreIngresado} NO corresponde a un nombre de mes válido`;
                }

            })

    })