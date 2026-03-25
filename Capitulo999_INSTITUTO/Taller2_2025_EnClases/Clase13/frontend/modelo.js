
export const fnRecuperarClientes = async ()=>
    {
        let datos = null;

        try {

            const URL = `http://localhost:3000/clientes`;
        
            const response = await fetch(URL);

            datos = await response.json();
 
        } catch (error) {
            console.log(error);
        }

        return datos;
       
    }