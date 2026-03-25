
const endPointProductos = "http://localhost:3000/productos";

const endPointClientes = "http://localhost:3000/clientes";

window.addEventListener("load",()=>
    {

        console.log("aplicacion web is running");

        const idBtnConsultaClientes = document.querySelector("#idBtnConsultaClientes");
        const idBtnConsultaProductos = document.querySelector("#idBtnConsultaProductos");

        idBtnConsultaClientes.addEventListener("click",async ()=>{

            console.log("aqui deberia mostrar la consulta de clientes");

            let resultado = await fnConsultarClientes();

            console.log(resultado);

        });

        idBtnConsultaProductos.addEventListener("click",async ()=>{

            console.log("aqui deberia mostrar los productos");

            let resultado = await fnConsultarProductos();

            console.log(resultado);

        })
    })


    const fnConsultarClientes = async ()=>
    {
        let datos = null;

        try {
            
            let response = await fetch(endPointClientes);

            datos = response.json();

        } catch (error) {
            console.log("se projo un error ",error);
        }

        return datos;
    }

    const fnConsultarProductos = async()=>
    {
        let datos = null;

        try {
            let response = await fetch(endPointProductos);

            datos = response.json();
            
        } catch (error) {
            console.log("se produjo un error",error);
        }

        return datos;

    }