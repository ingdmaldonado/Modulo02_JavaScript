
window.addEventListener("load",()=>
    {
        console.log("funcionando");

        /************************************************************************/
        /***************** SPREAD OPERATOR - VECTORES ***************************/
        /************************************************************************/
       
        const clientesSucursal1 = [
            {
                cuit: '20-12345678-9',
                nombre: 'Juan Pérez',
                email: 'juan.perez@example.com'
            },
            {
                cuit: '27-98765432-1',
                nombre: 'María Gómez',
                email: 'maria.gomez@example.com'
            },
            {
                cuit: '23-65432198-7',
                nombre: 'Carlos López',
                email: 'carlos.lopez@example.com'
            }
        ];
        
        const clientesSucursal2 = [
            {
                cuit: '24-13579246-8',
                nombre: 'Ana Martínez',
                email: 'ana.martinez@example.com'
            },
            {
                cuit: '21-24681357-9',
                nombre: 'Lucía Fernández',
                email: 'lucia.fernandez@example.com'
            },
            {
                cuit: '25-19283746-5',
                nombre: 'Roberto Sánchez',
                email: 'roberto.sanchez@example.com'
            },
            {
                cuit: '26-34567890-1',
                nombre: 'Gabriela Torres',
                email: 'gabriela.torres@example.com'
            },
            {
                cuit: '23-56789012-3',
                nombre: 'Pablo Díaz',
                email: 'pablo.diaz@example.com'
            },
            {
                cuit: '22-67890123-4',
                nombre: 'Carolina Vargas',
                email: 'carolina.vargas@example.com'
            },
            {
                cuit: '27-89012345-6',
                nombre: 'Martín Ruiz',
                email: 'martin.ruiz@example.com'
            }
        ];
        
        
        console.log(clientesSucursal1);
        console.log(clientesSucursal2);

        const todosLosClientes = [...clientesSucursal1,...clientesSucursal2];

        console.log(todosLosClientes);


        /**********************************************/
        /*** SPREAD OPERATOR - CON OBJETOS LITERALES */
        /*********************************************/

        const persona1 = {
            id: 1,
            cuit: '20-12345678-9',
            apellido: 'Pérez',
            nombre: 'Juan',
            domicilio: 'Calle Falsa 123'
        };
        
        const cuentaCorriente = {
            cuit: '20-12345678-9',  // Repite el cuit
            email: 'juan.perez@example.com',
            saldo: 1500
        };
        
        const clienteUnificado = {
            ...persona1,
            ...cuentaCorriente
        };
        
        console.log(persona1);
        console.log(cuentaCorriente);

        console.log(clienteUnificado);
        

        /***********************************************/
        /* REST OPERATOR CON PARAMETROS DE UNA FUNCIÓN */
        /***********************************************/

            const fnCalcularPromedio = (...valores)=>
                {
                    let acumulador = 0;
                    let contador = 0;
                    valores.forEach(element =>
                        {
                            contador = contador + 1;
                            acumulador = acumulador + element;
                        });

                    return contador > 0 ? acumulador/contador:0;  
                }

            console.log(fnCalcularPromedio(2,5,7,9,10,11,15));

        /**************************** **/
        /* REST OPERATOR CON UN OBJETO */
        /*******************************/
    



        /* FUNCIONALIDAD REDUCE DE LOS VECTORES */

        const productos = [
            { 
                id: 1, 
                nombre: 'Laptop', 
                codigo: 'A123', 
                stock: 5, 
                cantidadDeVendidos: 50, 
                cantidadDeDevoluciones: 3 
            },
            { 
                id: 2, 
                nombre: 'Teclado', 
                codigo: 'B456', 
                stock: 12, 
                cantidadDeVendidos: 120, 
                cantidadDeDevoluciones: 5 
            },
            { 
                id: 3, 
                nombre: 'Mouse', 
                codigo: 'C789', 
                stock: 8, 
                cantidadDeVendidos: 75, 
                cantidadDeDevoluciones: 2 
            },
            { 
                id: 4, 
                nombre: 'Monitor', 
                codigo: 'D101', 
                stock: 3, 
                cantidadDeVendidos: 40, 
                cantidadDeDevoluciones: 1 
            },
            { 
                id: 5, 
                nombre: 'Impresora', 
                codigo: 'E202', 
                stock: 15, 
                cantidadDeVendidos: 30, 
                cantidadDeDevoluciones: 0 
            }
        ];
        
        /***************************************/
        /* EJEMPLO CON UN FOR EACH TRADICIONAL */
        /***************************************/

        let contadorProductosEnPuntoDeReposicion = 0;
        productos.forEach(element => 
            {
                if(element.stock < 10)
                {
                    contadorProductosEnPuntoDeReposicion++;
                }
            })

        console.log(contadorProductosEnPuntoDeReposicion);

        /***********************************************/
        /* EJEMPLO CON LA FUNCIÓN REDUCE DE JAVASCRIPT */
        /***********************************************/

        let contadorProductosEnPuntoDeReposicion2 = productos.reduce((contador,element)=>{

            return element.stock < 10 ? contador+1:contador;

        },0);

        console.log(contadorProductosEnPuntoDeReposicion2);

        /***********************************************/
        /* EJEMPLO CON LA FUNCIÓN REDUCE DE JAVASCRIPT */
        /***********************************************/

        let resultado = productos.reduce((objeto,element)=>{

            if(element.stock < 10)
            {
                objeto.contador = objeto.contador + 1;
                objeto.acumulador = objeto.acumulador + element.cantidadDeVendidos;
            }
            return objeto;

        },{contador:0,acumulador:0});

        console.log(resultado);

    })