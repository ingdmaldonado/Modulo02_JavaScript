
window.addEventListener("load",function(){

    console.log("aplicacion andando");

    const idtxtPrecioVehiculo = document.querySelector("#idtxtPrecioVehiculo");

    const idtxtValorEntrega = document.querySelector("#idtxtValorEntrega");

    const idBtnFinanciar = document.querySelector("#idBtnFinanciar");

    const idResultado = document.querySelector("#idResultado");

    console.log(idtxtPrecioVehiculo,idtxtValorEntrega,idBtnFinanciar,idResultado);


    idBtnFinanciar.addEventListener("click",()=>
    {
        console.log("me estan haciendo click");

        let PrecioVehiculo = Number(idtxtPrecioVehiculo.value);

        let ValorEntrega = Number(idtxtValorEntrega.value);

        console.log(PrecioVehiculo,ValorEntrega);

        if(ValorEntrega < PrecioVehiculo)
        {
            let Diferencia = PrecioVehiculo - ValorEntrega;

            let Financiacion = Diferencia + (Diferencia * 285)/100;

            let ValorCuota =  Financiacion / 6;
            ValorCuota.toFixed();

            console.log("Diferencia:= ",Diferencia);

            console.log("Financiacion:= ",Financiacion);

            console.log("Valor de la Cuota:= ",ValorCuota.toFixed(2));

          

        }
        else
        {
            alert("El Valor de la Entrega es mayor o igual al precio vehiculo");
        }



    })

})