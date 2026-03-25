

window.addEventListener("load",function()
{

    console.log("aqui se cargo la pagina");

    /* aqui me vincule para controlar los botones y elementos HTML */
    const idCamion = document.querySelector("#idCamion");
    const idCantidadCamion = document.querySelector("#idCantidadCamion");
    const idTotalCamion = document.querySelector("#idTotalCamion");
    console.log(idCamion,idCantidadCamion,idTotalCamion);

    /* aqui vamos a declarar los precios como constantes */
    const precioCamion = 22000;
    const precioCamioneta = 12000;
    const precioAuto = 4000;
    const precioMoto = 1500;

     // declarar las variables contabilizadoras y totabilizadoras //
     let cantidadCamion = 0;
     let totalCamion = 0;
     let cantidadCamioneta = 0;
     let totalCamioneta = 0;
     let cantidadAuto = 0;
     let totalAuto = 0;
     let cantidadMoto = 0;
     let totalMoto = 0;

    // cuando presiona click en el boton camion //
    idCamion.addEventListener("click",function()
    {
        cantidadCamion++;
        totalCamion = totalCamion + precioCamion;
        console.log(`Cantidad Camion ${cantidadCamion} y Total ${totalCamion}`); 
        
        idCantidadCamion.textContent = `Cantidad Camiones ${cantidadCamion}`;
        idTotalCamion.textContent = `Total Camiones ${totalCamion}`;
        
    })



})