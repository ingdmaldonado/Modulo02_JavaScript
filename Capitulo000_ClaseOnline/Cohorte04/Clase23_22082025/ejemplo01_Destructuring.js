
/* agrupacion.

    objetos literales const persona = {atributos,valores}


        ejemploObjeto = {atributo1:valor1,atributo2:valor2};

        const {atributo1,atributo2} = ejemploObjeto;


    vectores => arrays



*/


window.addEventListener("load",()=>{

    console.log("pagina andando");

    //-----------------------------------------------------------//
    /********** Ejemplo 01: Como Desestructurar un Objeto  ******/

    const persona = {nombre:"Ana",edad:25,ciudad:"Catamarca"};

    console.log(persona);

    // Desestructuracion del objeto a manos (no es destructuring) //
    
    /*
    const nombre = persona.nombre;
    const edad = persona.edad;
    const ciudad = persona.ciudad;
    */

    const {nombre,edad,ciudad} = persona;

    console.log(nombre,edad,ciudad);

    //-----------------------------------------------------------//
    /********** Ejemplo 02: Como Desestructurar un Objeto. pero voy a renombrar el nombre
     * de esos atributos  ******/

    const producto = {
        id:5000,
        precio:22500,
        descripcion:"Auricular marca xxxyyzz"
    };

    console.log(producto);

    // creame tres constantes, aisladas que tengan los datos del objeto //
    const {id:codigoBarras,precio:precioVenta,descripcion} = producto;

    console.log(codigoBarras,precioVenta,descripcion);


    /* ESTO ES MUY BUENO CUANDO ESTOY FUSIONANDO DATOS
    QUE PROVIENEN DESDE DISFERENTES FUENTES */

    /* API => Paises => 
    
        ARGENTINA,
        BRASIL,
        URUGUAY,
        
    */

    const pais1 = {id:"ARG",nombreCompleto:"REPUBLICA ARGENTINA",capital:"BUENOS AIRES"};

    const paisesDeLatinoAmerica = {id:"ARG",inflacionMes:1.4,precioDolar:1340.40};


    /* DATOS DE FACTURACION EMPRESA DE SERVICIOS */


    const alumno1 = {dni:223344,nombre:"DANIEL MALDONADO"};

    const tp1_alumno1 = {dni:223344,nota:10};



    //-----------------------------------------------------------//
    /********** Ejemplo 03: Destructuring de un Vector 
     * de esos atributos  ******/

    const colores = ["rojo","azul","verde"];
    console.log(colores);

    const [x1,x2,x3] = colores;

    console.log(x1,x2,x3);
    
    //-----------------------------------------------------------//
    /********** Ejemplo 04: Destructuring de un Vector 
     * de objetos  ******/

    const usuarios = [
        { idx: 1, nombrex: "Juan" },
        { idx: 2, nombrex: "Lucía" }
    ];

    // le hice destructuring al vector al vector y me quede con objetos //

    const [usuario1,usuario2] = usuarios;

    console.log(usuarios);

    console.log(usuario1,usuario2);

    // ahora le hare descomposicion a los datos del usuario1 //

    const {idx,nombrex} = usuario1;

    console.log(idx,nombrex);




})