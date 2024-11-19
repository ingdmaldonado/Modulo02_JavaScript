
/*
window.onload = function()
{

}*/


    const fnNombreDelPais = (numeroDePais) =>
        {
            let nombreDePais = "";
            switch(numeroDePais)
            {
                case 0:
                    {
                        nombreDePais = "";
                        break;
                    }
                case 1:
                    {
                        nombreDePais = "ARGENTINA";
                        break;
                    }
                case 2:
                    {
                        nombreDePais = "BOLIVIA";
                        break;
                    }
                case 3:
                    {
                        nombreDePais = "ITALIA";
                        break;
                    }
                case 4:
                    {
                        nombreDePais = "BRASIL";
                        break;
                    }
                case 5:
                    {
                        nombreDePais = "PARAGUAY";
                        break;
                    }
                default:
                    {
                        nombreDePais = "";
                        break;
                    }

            }

            return nombreDePais;

        }

    /* Esta funcion. es una arrow function
    que recibe como parametro un importe y también
    recibe como parametro el estado del checkbox.
    si el checkbox esta encendido devolverá el 5%
    caso contrario no devolvera nada. */

    const fnDevuelveSeguro = (importe,estadoDelCheckBox)=>
        {
            if(estadoDelCheckBox)
            {
                return (importe * 5/100);
            }
            else
            {
                return 0;
            }
        }

    const fnDevuelveEnvio = (estadoDelCheckBox)=>
        {
            if(estadoDelCheckBox)
            {
                return 2000;
            }
            else
            {
                return 0;
            }

        }

    

window.addEventListener("load",()=>{

    console.log("esto esta corriendo");

    const idBtn1 = document.querySelector("#idBtn1");
    const idBtn2 = document.querySelector("#idBtn2");
    const idPaisDeOrigen = document.querySelector("#idPaisDeOrigen");
    const idBtnPaisElegido = document.querySelector("#idBtnPaisElegido");

    const idPrecioProducto = document.querySelector("#idPrecioProducto");
    const idPagaSeguro = document.querySelector("#idPagaSeguro");
    const idPagaEnvio = document.querySelector("#idPagaEnvio");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idCostototal = document.querySelector("#idCostototal");

    console.log(idBtn1);
    console.log(idBtn2);
    console.log(idPaisDeOrigen);
    console.log(idBtnPaisElegido);

    console.log(idPrecioProducto);
    console.log(idPagaSeguro);
    console.log(idPagaEnvio);
    console.log(idBtnCalcular);
    console.log(idCostototal);


    idBtn1.addEventListener("click",()=>{
        alert("me estan presionando click en el boton 1");
    })

    idBtn1.addEventListener("click",()=>{
        console.log("esto tiene que salir por consola");
    })

    idBtn2.addEventListener("click",()=>{
        alert("click en el boton 2");
    })

    idBtnPaisElegido.addEventListener("click",()=>
        {
            console.log("aqui tengo que mostrar el Pais Elegido");

            let paisSeleccionado = Number(idPaisDeOrigen.value);

            console.log(paisSeleccionado);

            console.log(fnNombreDelPais(paisSeleccionado));

        })

    /* aqui vamos a mostrar como calcular
    y capturar los valores de los input */

    

    idBtnCalcular.addEventListener("dbclick",()=>
        {
          
            // estoy capturando el valor del input //
            let precioDelProducto = Number(idPrecioProducto.value);

            let costoSeguro = 0;
            let costoEnvio = 0;

          

            /* aqui estoy evaluando si el checkbox de
            paga seguro esta encendido o no */

            if(idPagaSeguro.checked)
            {
                console.log("el señor quiere pagar seguro");
                costoSeguro = (precioDelProducto * 5)/100;
            }
            else
            {
                console.log("no quiere pagar seguro");
            }

            /* aqui estoy evaluando si el checkbox
            de paga envio esta encendido o no */
            if(idPagaEnvio.checked)
            {
                console.log("si paga envio");
                costoEnvio = 2000;
            }
            else
            {
                console.log("no paga envio");
            }
           
            precioDelProducto = precioDelProducto + costoSeguro + costoEnvio;

              // aqui lo estoy mostrando
              console.log(`precio ${precioDelProducto}`);


        })

    /* forma corta de encarar este ejemplo. 
    usando funciones */

    idBtnCalcular.addEventListener("click",()=>
        {
            // estoy capturando el valor del input //
            let precioDelProducto = Number(idPrecioProducto.value);

            let resultadoSeguro = fnDevuelveSeguro(precioDelProducto,idPagaSeguro.checked);

            let resultadoEnvio = fnDevuelveEnvio(idPagaEnvio.checked);

            let costoTotal = precioDelProducto + resultadoSeguro + resultadoEnvio;

            console.log(costoTotal);

        //    idCostototal.textContent =  idCostototal.textContent + 'bla bla';

            idCostototal.textContent = `Costo Total a pagar: ${costoTotal}`;

        })

})