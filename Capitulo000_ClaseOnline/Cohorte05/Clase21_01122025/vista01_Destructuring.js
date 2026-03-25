

window.onload = ()=>{

    console.log(`running`);

    /************************************************/
    /* Ejemplo 01 - Destructuring Basico de Objetos */
    /*************************************************/


    const Persona = {nombre:"LIONEL", edad:38,pais:"ARGENTINA"};
    console.log(Persona);

    /* mostrar los atributos del objeto */

    console.log(Persona.edad);
    console.log(Persona.nombre);
    console.log(Persona.pais);

    /* destructuring. es separar esos 
    atributos como constantes y poder
    manipularlos por a fuera */

    const {nombre,edad,pais} = Persona;

    console.log(nombre,edad,pais);

    /****************************************************/
    /* Ejemplo 02 - Destrucuring renombrando los atributos */
    /*************************************************/

    const producto = { nombre: "Coca Cola", precio: 3000 };

    const {nombre:productoNombre,precio:productoPrecio} = producto;

    console.log(productoNombre,productoPrecio);

    /*********************************************************/
    /* Ejemplo 03 - Destructuring creando valores por defecto */
    /**********************************************************/
    
    const usuario1 = { username: "carlitos tevez" };

    const usuario2 = { username: "daniel" , rol:"administrador"};

    /* cuando ustedes vean {} están trabajando 
    con objetos - destructurin de objetos */
    const {username,rol='invitado'} = usuario2;

    console.log(username,rol);

    /* aqui me estoy creando un vector y le estoy asignando los dos
    usuarios el 1 y el 2 */

    console.log("--------------------");

    const UsuariosDelSistema = [usuario1,usuario2];

    console.log(`Estaria haciendo un recorrido - sin hacer destructuring`)

    UsuariosDelSistema.forEach(usuario=>{

        console.log(usuario);
        console.log(usuario.username);
        console.log(usuario.rol);

    });

    console.log(`Estoy recorriendo - haciendo destructuring - valores por defecto`)

    UsuariosDelSistema.forEach(usuario => {

        let {username,rol='invitado'} = usuario;

        console.log(username,rol);

    });


        /* 
            Bases de Datos Relacionales => MongoDB 

            Bases de Datos No Relacionales => 
        */


    /**************************************************************/
    /* Ejemplo 04 - Destructuring en la definición de una función */
    /**************************************************************/

    console.log(`---------EJEMPLO 04 ---------`);

    const Productos = [
        {id:1,nombre:"COCA COLA",precio:3700},
        {id:2,nombre:"VAMOS MANAOS",precio:2800},
        {id:3,nombre:"FERNET BRANCA 750",precio:12500}
        ];

    // definiendo la función - sin destructuring //
    const fnMostrarProducto = (producto)=>{

        console.log(producto);

    }

    // definiendo la función y haciendo destructuring dentro //

    const fnMostrarProducto2 = (producto)=>{

        let {id,nombre} = producto; // destructuring dentro

        console.log(id,nombre);

    }

    // defino una función y hago destructuring dentro del parametro //

    const fnMostrarProducto3 = ({id,nombre})=>{

        console.log(id,nombre);

    }

    // invocarla a la función y pasarle como parametro un producto //

    fnMostrarProducto(Productos[0]);

    fnMostrarProducto2(Productos[0]);

    fnMostrarProducto3(Productos[0]);

    console.log(`------ Ejemplo de Invocación con Destructuring`);

    Productos.forEach(producto => {

        fnMostrarProducto3(producto);

    })












}