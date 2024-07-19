

window.onload = function()
{

    /* (01) - Definimos un objeto literal */

    const Persona1 = {Nombre:"MESSI LIONEL ANDRES",Domicilio:"MIAMI 824"};
    console.log(Persona1);

    /* (02) - Definimos otro objeto literal */

    const Persona2 = {Nombre:"RIQUELME JUAN ROMAN",Domicilio:"CIUDAD AUTONOMA DE BS.AS."};
    console.log(Persona2);

    /* (03) - Definimos un objeto literal con un método a dentro */

    const Factura1 = {FechaCompra:"21/03/2020",CantidadProductos:5,PrecioUnitario:2500.20,getTotal(){return this.CantidadProductos * this.PrecioUnitario}};
    console.log(Factura1);
    console.log(Factura1.getTotal()); // invocamos el método que está dentro del objeto 

    /* (04) - Convertimos el OBJETO JAVASCRIPT A JSON => que quiere decir JAVASCRIPT OBJET NOTATION  */

    console.log(JSON.stringify(Persona1));
    console.log(JSON.stringify(Persona2));
    
    /* cuando convierte un objeto a JSON no transforma la función interna ó método */
    console.log(JSON.stringify(Factura1));
    

}