/* 
    Estructuras de datos:

        - variables
            * enteras
            * string => concatenación de caracteres
        - constantes

        - objeto literal

*/

window.onload = ()=>{

    /* Es muy comun, que un objeto de la vida
    real, tenga un conjunto de atributos que lo
    identifiquen. 
    
        DNI *
        APELLIDO
        NOMBRE
        DOMICILIO
        FECHA NACIMIENTO

        RENAPER => REGISTRO NACIONAL DE LAS PERSONAS

        Es una estructura ideal para almacenar los datos
        que caracterizan a los objetos de la vida real

        objeto vida real (atributos) => estructura datos

        VEHICULO:

            Marca
            Patente *
            AñoFabricacion
            color

        SIEMPRE, EXISTE UN ATRIBUTO EN TODOS LOS OBJETOS DE LA VIDA
        REAL QUE LO IDENTIFICA DE MANERA ÚNICA E UNÍVOCA.

        REGISTRO NACIONAL DE LA PROPIEDAD DEL AUTOMOTOR



        TERRENOS
        
            MATRICULA CATASTRAL => 07-25-16-3855
            SUPERFICIE
            MATRICULA-OESTE
            MATRICULA-ESTE

        DIRECCIÓN PROVINCIAL DE CATASTRO 

        NÚMERO DE PASAPORTE => 

    */

    /* 
    
        CODIGO DE BARRAS
        DESCRIPCION
        PRECIO
    
    */

    const Persona1 = {dni:44777888,apellido:"MALDONADO",nombres:"ENRIQUE DANIEL"};

    const Persona2 = {dni:88999777,apellido:"BATALLAN",nombres:"MARCOS ESTEBAN"};


    console.log(Persona1);

    console.log(Persona2);

    // aqui estoy mostrando el apellido de la persona 1
    console.log(Persona1.apellido);
    console.log(Persona1["apellido"]);

    // aqui estoy mostrando los nombres de la persona 2
    console.log(Persona2.nombres);
    console.log(Persona2["nombres"]);

    // podría modificar datos de esos dos objetos //
    Persona1.apellido = `MESSI`;
    console.log(Persona1);


    /*************************
     * 
     * LAS CONSTANTES NO SE PUEDEN MODIFICAR.
     * 
     * A EXCEPCIÓN DE LOS OBJETOS LITERALES Y DE LOS
     * VECTORES QUE ESTÁN ALMACENADOS EN CONSTANTES
     */



    // VECTORES - O ARRAYS //

    const Vector1 = [10,15,25,40,-3,8,81,99];

    console.log(Vector1);

    console.log(Vector1.length);

    /* METODOS BÁSICOS DE MANIPULACIÓN DE DATOS EN 
    VECTORES */

    // puedo agregar un elemento al final del vector //
    Vector1.push(-77);

    console.log(Vector1);

    // puedo agregar al principio de un vector //
    Vector1.unshift(-44);
    console.log(Vector1);

    // voy a quitar elementos desde el final //

    let ultimoElemento = Vector1.pop();

    console.log(ultimoElemento);

    console.log(Vector1);

    // shift - permite quitar desde el principio //

    let primerElemento = Vector1.shift();

    console.log(primerElemento);

    console.log(Vector1);


    /* puedo quitar un segmento completo de un vector
        para eso existe un metodo que se llama splice
        que me permite indicarle desde la posicion
        donde comenzará a quitar los elementos,
        es la cantidad de elementos que va a quitar
    */

    Vector1.splice(2,2);

    console.log(Vector1);


};