

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

window.addEventListener("load",()=>{

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



    idBtnCotizar.addEventListener("click",()=>
        {
          
            let vehiculoElegido = Number(idSelectorVehiculo.value);
            console.log(vehiculoElegido);

            let valorVehiculoElegido = fnDevolverValorAuto(vehiculoElegido);
            console.log(valorVehiculoElegido);

            let dineroAEntregar = Number(idDineroEntregado.value);
            console.log(dineroAEntregar);

            let calculoDel50PorCientoValorVehiculo = valorVehiculoElegido * 50/100;

            let diferenciaAFinanciar = 0;
            
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
                console.log("estan cambiando el selector de planes de financiacion");
                idResultadoFinanciacion.textContent = `El Total Financiado es de 18.500.000`;
            })
    

    console.log("application is running");



})