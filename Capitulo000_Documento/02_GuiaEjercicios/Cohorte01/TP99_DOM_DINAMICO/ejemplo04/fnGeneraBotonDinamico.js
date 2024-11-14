

const fnGeneraBotonDinamico = (item,getTOTAL_GLOBAL,setTOTAL_GLOBAL,getCONTADOR_GLOBAL,setCONTADOR_GLOBAL,idTotalCobrado,idCantidadVehiculos)=>
    {
        let boton = document.createElement("input");
        boton.type = "button";
        boton.value = item.nombre;
        boton.addEventListener("click",()=>
            {             

                let total = 0;
                let contador = 0;

                total = getTOTAL_GLOBAL() + item.precio;
                contador = getCONTADOR_GLOBAL() + 1;

                setTOTAL_GLOBAL(total);
                setCONTADOR_GLOBAL(contador);

                console.log(total,contador);

                /*
                idTotalCobrado.textContent = total.localString('es-ES');
                idCantidadVehiculos.textContent = contador.localString('es-ES');
                */

            });    

        return boton;

    }

export default fnGeneraBotonDinamico;


    