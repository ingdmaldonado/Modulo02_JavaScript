
/*
Ejercicio Nro. 11: 
El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en 
STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta  
y el precio de los mismos es el siguiente: 
1) Amarok V6 (Oferta: 65.000.000) 
2) TAOS 53.000.000 
3) Polo Nuevo 47.000.000 
El Gerente nos indica se debería realizar una aplicación debe permitir a los interesados (clientes) 
1ro) Selecciona el Vehículo de interés 
2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo, sabiendo que el 
dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo. 
3ro) El Sistema debe calcular la financiación del dinero restante a pagar, sabiendo que la diferencia a 
pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; esa diferencia será 
financiada de la siguiente forma: 
12 cuotas - 9.9 % ANUAL 
Diplomatura Universitaria en Desarrollo Web 
Full Stack con JavaScript  
Módulo: JavaScript 
24 cuotas - 22 % ANUAL 
36 cuotas - 33 % ANUAL 
*/

import {vehiculos} from "./datos.js";

window.addEventListener("load",()=>
    {
        console.log("la aplicacion corriendo");

        const idVehiculo = document.querySelector("#idVehiculo");
        const idEntrega = document.querySelector("#idEntrega");
        const idBtnAceptar = document.querySelector("#idBtnAceptar");

        //console.log(vehiculos);

        /* (1ra Parte) - Convertir los Vehiculos en Opciones */
        const opcionesDeVehiculos = vehiculos.map(vehiculo =>{

            let opcionDinamica = `<option value='${vehiculo.id}'>${vehiculo.nombre} - ${vehiculo.precio}</option>`;

            return opcionDinamica;

        });

        console.log(opcionesDeVehiculos);

        /* (2da Parte) - Inyectar esas opciones al DOM */        
        opcionesDeVehiculos.forEach(opcion => {

            idVehiculo.innerHTML = idVehiculo.innerHTML + opcion;

        })

        /* 
            vehiculos => es 1 vehiculo

            opciones => es 1 opcion

        */
        
        idBtnAceptar.addEventListener("click",()=>{

            // aqui estoy obteniendo desde el selector el id del vehiculo que eligio
            let idVehiculoSeleccionado = Number(idVehiculo.value);

            let vehiculoSeleccionado = vehiculos.find(vehiculo => vehiculo.id === idVehiculoSeleccionado);

            // aqui estoy obteniendo el valor de la entrega que realizara el cliente            
            let valorDeEntrega = Number(idEntrega.value);

            console.log(idVehiculoSeleccionado);
            console.log(valorDeEntrega);
            console.log(vehiculoSeleccionado);


            // validacion 1 => no puede entregar mas que el valor del auto
            if(valorDeEntrega > vehiculoSeleccionado.precio)
            {
                alert(`Se ve que tiene plata. esta entregando ${valorDeEntrega} mas que el valor del vehiculo ${vehiculoSeleccionado.precio}`);
            }

            // validacion 2 => no puede entregar menos del 30% del valor del vehiculo

            let topeMinimo = (vehiculoSeleccionado.precio * 30)/100;

            if(valorDeEntrega < topeMinimo)
            {
                alert(`Segun la Gerente. Antonella Anastasia Rocuzzo la entrega ${valorDeEntrega} no puede ser menor al 30% del vehiculo ${topeMinimo}`);
            }



        });

        /* ()=>{}

            parametro => {}

            parametro => 1 intrucion; => deducir que vos estas queriendo hacer un return implicito
        */
        
    })