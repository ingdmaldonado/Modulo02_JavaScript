

const endPoint = 'http://localhost:3000/cliente/';
const endPointgetClientePorCuit = 'http://localhost:3000/cliente/porcuit/';

    // Función para obtener la lista de clientes
    export async function getCliente() {
        try {
            // realizo la consulta al end point correspondiente //
            const respuestaEndPoint = await fetch(endPoint);

            // convierto los datos de la respuesta a formato JSON //
            const datosEnFormatoJSON = await respuestaEndPoint.json();

            // Si todo salió bien. retorno los datos
            return datosEnFormatoJSON;

        } catch (error) {
        
            console.log(error);

            return { result_estado: 'error', result_message: error.message };
        }
    }

    // Función para obtener la lista de clientes por cliente id
    export async function getClientePorId(clienteid) {
        try {
            // realizo la consulta al end point correspondiente //
            const respuestaEndPoint = await fetch(endPoint+clienteid);

            // convierto los datos de la respuesta a formato JSON //
            const datosEnFormatoJSON = await respuestaEndPoint.json();

            // Si todo salió bien. retorno los datos
            return datosEnFormatoJSON;

        } catch (error) {
        
            console.log(error);

            return { result_estado: 'error', result_message: error.message };
        }
    }

    // Función para obtener la lista de clientes
    export async function getClientePorCuit(clientecuit) {
        try {
            // realizo la consulta al end point correspondiente //
            const respuestaEndPoint = await fetch(endPointgetClientePorCuit+clientecuit);

            // convierto los datos de la respuesta a formato JSON //
            const datosEnFormatoJSON = await respuestaEndPoint.json();

            // Si todo salió bien. retorno los datos
            return datosEnFormatoJSON;

        } catch (error) {
            
            console.log(error);

            return { result_estado: 'error', result_message: error.message };
        }
    }

    // Función para agregar un cliente
    export async function postCliente(cliente) {
        try {
            const respuestaEndPoint = await fetch(endPoint, {
            method: 'POST', // Especificamos el método POST
            headers: {
                'Content-Type': 'application/json' // Indicamos que los datos enviados son JSON
            },
            body: (cliente) //
        });

            // Convertimos la respuesta a JSON
            const datosEnFormatoJSON = await respuestaEndPoint.json();

            // Si todo salió bien, retornamos el objeto de respuesta
            return datosEnFormatoJSON;

        } catch (error) {
            console.log(error);
            return { result_estado: 'error', result_message: error.message };
    }
    }


     // Función para modificar un cliente

     export async function putCliente(cliente){
        try {
            const respuestaEndPoint = await fetch(endPoint+cliente.clienteid, {
            method: 'PUT', // Especificamos el método POST
            headers: {
                'Content-Type': 'application/json' // Indicamos que los datos enviados son JSON
            },
            body: (cliente) //
        });

        // Convertimos la respuesta a JSON
        const datosEnFormatoJSON = await respuestaEndPoint.json();

        // Si todo salió bien, retornamos el objeto de respuesta
        return datosEnFormatoJSON;

        } catch (error) {
            console.log(error);
            return { result_estado: 'error', result_message: error.message };
        }
    }

