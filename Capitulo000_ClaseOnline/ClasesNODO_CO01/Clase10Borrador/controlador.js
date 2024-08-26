

const fnDevolverValorAuto = (tipoAuto)=>
    {

        console.log("tipoAuto ",tipoAuto);

        let valorAuto = 0;

        switch(tipoAuto)
        {
            case 1:
                {
                    valorAuto = 25000000.00;
                    break;
                }
            case 2:
                {
                    valorAuto = 30000000.00;
                    break;
                }
            case 3:
                {
                    valorAuto = 35000000.00
                    break;
                }
            default: 
                {
                    valorAuto = 0;
                    break;
                }
        }

        return valorAuto;
    }

const fnCalcularFinanciacion = (diferenciaAFinanciar,planFinanciacion) =>
{
    let calculoDiferenciaConInteres = 0;
    let calculoCuota = 0;
    let mensajeCuota = "";
    if(planFinanciacion === 1) /* 10% de incremento en 24 cuotas */
    {
        calculoDiferenciaConInteres = diferenciaAFinanciar + (diferenciaAFinanciar * 10)/100;
        calculoCuota = calculoDiferenciaConInteres/24;
        mensajeCuota = `Financiaremos la diferencia en 24 cuotas de ${calculoCuota.toLocaleString("ES-es")}`;
    }
    if(planFinanciacion === 2)
    {
        calculoDiferenciaConInteres = diferenciaAFinanciar + (diferenciaAFinanciar * 20)/100;
        calculoCuota = calculoDiferenciaConInteres/48;
        mensajeCuota = `Financiaremos la diferencia en 48 cuotas de ${calculoCuota.toLocaleString("ES-es")}`;
    }
    if(planFinanciacion === 3)
        {
            calculoDiferenciaConInteres = diferenciaAFinanciar + (diferenciaAFinanciar * 50)/100;
            calculoCuota = calculoDiferenciaConInteres/60;
            mensajeCuota = `Financiaremos la diferencia en 60 cuotas de ${calculoCuota.toLocaleString("ES-es")}`;
        }

    return mensajeCuota;

}

window.addEventListener("load",()=>{

    
    console.log("application is running");


    const idSelectorVehiculo = document.querySelector("#idSelectorVehiculo");
    const idDineroEntregado = document.querySelector("#idDineroEntregado");
    const idBtnCotizar = document.querySelector("#idBtnCotizar");


    const idMensajeFinanciacion = document.querySelector("#idMensajeFinanciacion");
    const idDivTotalAFinanciar = document.querySelector("#idDivTotalAFinanciar");

    const idDivPlanFinanciacion = document.querySelector("#idDivPlanFinanciacion");
    const idSelectorPlanFinanciacion = document.querySelector("#idSelectorPlanFinanciacion");
    const idResultadoFinanciacion = document.querySelector("#idResultadoFinanciacion");

    console.log(idSelectorVehiculo);
    console.log(idDineroEntregado);
    console.log(idBtnCotizar);
    console.log(idMensajeFinanciacion);
    console.log(idDivTotalAFinanciar);
    console.log(idSelectorPlanFinanciacion);
    console.log(idResultadoFinanciacion);

    idDivTotalAFinanciar.style.display = 'none';
    idDivPlanFinanciacion.style.display = 'none';


    /* Declaramos Variables Globales a todos los Eventos */

    let vehiculoElegido = 0;
    let valorVehiculoElegido = 0;
    let dineroAEntregar = 0;
    let calculoDel50PorCientoValorVehiculo = 0;
    let diferenciaAFinanciar = 0;
    let planFinanciacion = 0;

    idBtnCotizar.addEventListener("click",()=>
        {
          
            vehiculoElegido = Number(idSelectorVehiculo.value);
            console.log(vehiculoElegido);

            valorVehiculoElegido = fnDevolverValorAuto(vehiculoElegido);
            console.log(valorVehiculoElegido);

            dineroAEntregar = Number(idDineroEntregado.value);
            console.log(dineroAEntregar);

            calculoDel50PorCientoValorVehiculo = valorVehiculoElegido * 50/100;

            diferenciaAFinanciar = 0;
            
            if(dineroAEntregar <= 0)
            {
                alert(`por favor, Indique el dinero a entregar`);
            }
            else
            {
                if (dineroAEntregar < calculoDel50PorCientoValorVehiculo)
                {
                    alert(`la entrega que Ud. realizará debe ser mayor al 50% del valor del vehículo por políticas de la empresa. es decir mayor a ${calculoDel50PorCientoValorVehiculo.toLocaleString('ES-es')}`);
                }
                else
                {
                    if(dineroAEntregar > valorVehiculoElegido)
                    {
                        alert(`la entrega no puede ser mayor al valor total del vehículo y su entrega es = ${dineroAEntregar.toLocaleString("ES-es")} y el valor del vehículo es = ${valorVehiculoElegido.toLocaleString("ES-es")}`);
                    }
                    else
                    {
                        console.log("calcular la cotizacion");
                        diferenciaAFinanciar = valorVehiculoElegido - dineroAEntregar;
                        idDivTotalAFinanciar.style.display = 'block';
                        idDivPlanFinanciacion.style.display = 'block';
                        idMensajeFinanciacion.textContent = `Total del vehículo ${valorVehiculoElegido.toLocaleString("Es-es")} - Dinero a entregar en efectivo ${dineroAEntregar.toLocaleString("ES-es")} - Resto a Financiar = ${diferenciaAFinanciar.toLocaleString("ES-es")}`;
                    }
                }
            }
        })

        idSelectorPlanFinanciacion.addEventListener("change",()=>
            {
                planFinanciacion = Number(idSelectorPlanFinanciacion.value);

                let mensajeFinanciacion = fnCalcularFinanciacion(diferenciaAFinanciar,planFinanciacion);

                console.log(mensajeFinanciacion);

                console.log(`Plan ${planFinanciacion} ${mensajeFinanciacion}`);
                idResultadoFinanciacion.textContent = `Plan ${planFinanciacion} ${mensajeFinanciacion}`;
            })


})