

    window.addEventListener("load",()=>{

        //  obtengo un vínculo o referencia hacia los botones //
        const idBtnAuto = document.querySelector("#idBtnAuto");
        const idBtnCamion = document.querySelector("#idBtnCamion");
        const idBtnCamioneta = document.querySelector("#idBtnCamioneta");
        const idBtnMoto = document.querySelector("#idBtnMoto");

        // muestro los botones por consola //
        console.log(idBtnAuto);
        console.log(idBtnCamion);
        console.log(idBtnCamioneta);
        console.log(idBtnMoto);
  
        // obtengo vínculo o referencia hacia los totales //

        const idTotalAuto = document.querySelector("#idTotalAuto");
        const idTotalCamion = document.querySelector("#idTotalCamion");
        const idTotalCamioneta = document.querySelector("#idTotalCamioneta");
        const idTotalMoto = document.querySelector("#idTotalMoto");
        const idTotalGeneral = document.querySelector("#idTotalGeneral");

        // muestro los totales por consola //
        console.log(idTotalAuto);
        console.log(idTotalCamion);
        console.log(idTotalCamioneta);
        console.log(idTotalMoto);

        // obtengo vínculo o referencia hacia las cantidades //

        const idCantidadAuto = document.querySelector("#idCantidadAuto");
        const idCantidadCamion = document.querySelector("#idCantidadCamion");
        const idCantidadCamioneta = document.querySelector("#idCantidadCamioneta");
        const idCantidadMoto = document.querySelector("#idCantidadMoto");

        const idBtnAnalizar = document.querySelector("#idBtnAnalizar");
        
        // muestro las cantidades por consola //

        console.log(idCantidadAuto);
        console.log(idCantidadCamion);
        console.log(idCantidadCamioneta);
        console.log(idCantidadMoto);

        /* aqui establecemos los precios globales de cada vehiculo */

        const precioAuto = 4520.25;
        const precioCamion = 22550.55;
        const precioCamioneta = 13290.99;
        const precioMoto = 2770.21;

        /* voy a declarar variables que me permitan totabilizar los importes */

        let totalAuto = 0;
        let totalCamion = 0;
        let totalCamioneta = 0;
        let totalMoto = 0;
        let totalGeneral = 0;

        /* voy a declarar variables que me permitan contabilizar vehiculos */

        let cantidadAuto = 0;
        let cantidadCamion = 0;
        let cantidadCamioneta = 0;
        let cantidadMoto = 0;
      
        idBtnAuto.addEventListener("click",()=>
            {
               
                console.log(`Tengo que Registrar una AUTO`);

                /* lo que estoy haciendo aqui es haciendo un totabilizador del auto */
                totalAuto = totalAuto + precioAuto;

                totalGeneral = totalGeneral + precioAuto;

                cantidadAuto = cantidadAuto + 1;

                idTotalAuto.textContent = `Total Cobrado $ ${totalAuto}`;
                idCantidadAuto.textContent = `Cantidad Auto ${cantidadAuto}`;

                idTotalGeneral.textContent = `Total General ${totalGeneral.toLocaleString('es-ES')}`;


            })

        
        idBtnCamion.addEventListener("click",()=>
            {
                console.log(`Tengo que registrar un CAMION`);

                totalCamion = totalCamion + precioCamion;
                totalGeneral = totalGeneral + precioCamion;
                cantidadCamion++;

                idTotalCamion.textContent = `Total Cobrado $ ${totalCamion}`;
                idCantidadCamion.textContent = `Cantidad Camion ${cantidadCamion}`;

                idTotalGeneral.textContent = `Total General ${totalGeneral.toLocaleString('es-ES')}`;


            })

        idBtnCamioneta.addEventListener("click",()=>
            {
                console.log(`Tengo que registrar una CAMIONETA`);

                totalCamioneta = totalCamioneta + precioCamioneta;
                totalGeneral = totalGeneral + precioCamioneta;
                cantidadCamioneta = cantidadCamioneta + 1;

                idTotalCamioneta.textContent = `Total Cobrado $ ${totalCamioneta}`;
                idCantidadCamioneta.textContent = `Cantidad Camioneta ${cantidadCamioneta}`;

                idTotalGeneral.textContent = `Total General ${totalGeneral.toLocaleString('es-ES')}`;

            })

        idBtnMoto.addEventListener("click",()=>
            {

                totalMoto = totalMoto + precioMoto;
                totalGeneral = totalGeneral + precioMoto;
                cantidadMoto = cantidadMoto + 1;

                idTotalMoto.innerHTML = `<h1> Total Cobrado $ ${totalMoto} </h1>`;
                idCantidadMoto.innerHTML = `<h5> Cantidad Motos ${cantidadMoto} </h5>`;

                idTotalGeneral.textContent = `Total General ${totalGeneral.toLocaleString('es-ES')}`;

                console.log(`Tengo que registrar una MOTO`);
            })

        idBtnAnalizar.addEventListener("click",()=>{

            if(cantidadAuto > cantidadCamioneta)
            {
                alert("pasaron mas autos que camionetas");
            }
            else
            {
                if(cantidadCamioneta > cantidadAuto)
                {
                    alert("pasaron mas camionetas que autos");
                }
                else
                {
                    alert("pasaron la misma cantidad de autos que camionetas");
                }
                
            }

        })
        


    })