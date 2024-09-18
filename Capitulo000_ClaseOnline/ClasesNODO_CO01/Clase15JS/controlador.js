
window.addEventListener("load",()=>
    {

        console.log("andando");

        /*** SPREAD OPERATOR  ***/

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


        const vectorAcumulado = [...clientesSucursal1,...clientesSucursal2];

        console.log(vectorAcumulado);


        /*** SPREAD OPERATOR PERO CON OBJTOS ***/

        const persona1 = {
            id: 1,
            cuit: '20-12345678-9',
            apellido: 'Pérez',
            nombre: 'Juan',
            domicilio: 'Calle Falsa 123',
            edad:90
        };
        
        const cuentaCorriente = {
            cuit: '20-12345678-9',  // Repite el cuit
            email: 'juan.perez@example.com',
            saldo: 1500,
            riesgoCrediticio:'bueno'
        };

        console.log(persona1);
        console.log(cuentaCorriente);

        const objetoIntegro = 
        {
            ...persona1,...cuentaCorriente
        }

        console.log(objetoIntegro);

        /***************************************************/
        /* REDUCE => Es para vectores                      */
        /***************************************************/

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


        /* para que sirve reduce ?. 
        
            reducir => contabilizar, contar, acumular elementos recorriendo 
            un vector ó array.
        */

            /* forEach => es para recorrer todos los elementos */

            /* filter => se quedaría con una porción del vector */

            /* map => recorre todos los elementos, le aplica una función de transformación
            y me devuelve los elementos nuevos. */

            /* reduce => */

        /* que quiero CONTAR, cuantos productos */


        /************************************************************/
        /* ESTA SERIA LA FORMA QUE YO VENIA USANDO ANTES DE REDUCE */
        /************************************************************/

        let contadorEnPtoReposicion = 0;

        productos.forEach(element => 
            {
                if(element.stock < 10)
                {
                    contadorEnPtoReposicion = contadorEnPtoReposicion + 1;
                }
            })

        console.log(contadorEnPtoReposicion);


        /************* REDUCE  ****************/

        let Resultado1 = productos.reduce((contador,element)=>{

            if(element.stock < 10) // si cumple la condición
            {
                contador++; // incremento
            }
            return contador; // retorno
        },0);

        console.log(Resultado1);


        /************************************************************/
        /**************** REDUCE  CON UN OPERADOR TERNARIO **********/
        /************************************************************/

        let Resultado2 = productos.reduce((contador,element)=>{

            return element.stock < 10 ? ++contador:contador;
        },0);

        console.log(Resultado2);


        /*   
        
        La razón por la que el código con contador++ no funciona como esperas está relacionada con cómo funciona el operador de incremento (++).
        El operador contador++ es un post-incremento, lo que significa que devuelve el valor actual de contador antes de incrementarlo. Por lo tanto, cuando utilizas contador++, la expresión devuelve el valor de contador antes de incrementarlo, lo que resulta en que el incremento no se refleja en el valor retornado a reduce.
        Por ejemplo, si contador es 0, la expresión contador++ devuelve 0 y luego incrementa contador a 1, pero el valor retornado es el original (0), por lo que no verás el incremento en tu acumulador.
        Para corregir esto, deberías utilizar contador + 1, como lo hiciste correctamente en el primer código, o bien cambiar a un pre-incremento (++contador), que incrementa el valor de contador antes de devolverlo.
        */

        let facturas = [
            {
                numeroFactura: "F001",
                fecha: "2024-09-17",
                importe: 150,
                cantidad: 3,
                total: 450
            },
            {
                numeroFactura: "F002",
                fecha: "2024-09-18",
                importe: 200,
                cantidad: 2,
                total: 400
            },
            {
                numeroFactura: "F003",
                fecha: "2024-09-19",
                importe: 100,
                cantidad: 5,
                total: 500
            },
            {
                numeroFactura: "F004",
                fecha: "2024-09-20",
                importe: 250,
                cantidad: 1,
                total: 250
            },
            {
                numeroFactura: "F005",
                fecha: "2024-09-21",
                importe: 300,
                cantidad: 4,
                total: 1200
            }
        ];
        
        console.log(facturas);
        
        /***************************************************** 
            reduce, con parametros con OBJETOS LITERALES. 
        *******************************************************/

        let resultado3 = facturas.reduce((objetoLiteral,element)=>{

            if(element.cantidad >= 4)
            {
                objetoLiteral.contadorFacturas = objetoLiteral.contadorFacturas + 1;
                objetoLiteral.totalFacturas = objetoLiteral.totalFacturas + element.total;
            }

            return objetoLiteral;
        },{contadorFacturas:0,totalFacturas:0});
        
        console.log(resultado3);

    })