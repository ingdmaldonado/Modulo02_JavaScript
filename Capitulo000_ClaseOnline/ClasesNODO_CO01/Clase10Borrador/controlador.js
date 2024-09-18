

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


    console.log(idSelectorVehiculo);
    console.log(idDineroEntregado);
    console.log(idBtnCotizar);

    idBtnCotizar.addEventListener("click",()=>
        {
            console.log("calcular la cotizacion");

            let vehiculoElegido = Number(idSelectorVehiculo.value);
            console.log(vehiculoElegido);

            let valorVehiculoElegido = fnDevolverValorAuto(vehiculoElegido);
            console.log(valorVehiculoElegido);

            let dineroAEntregar = Number(idDineroEntregado.value);
            console.log(dineroAEntregar);


        })


    console.log("application is running");



})