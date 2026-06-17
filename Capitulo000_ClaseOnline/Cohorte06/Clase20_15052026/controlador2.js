
    const Empleados = [
        {
            dni:45789232,
            apellido:"lopez",
            nombrecompleto:"fernanda",
            antiguedadLaboral:15,
            sueldo:12500000.25
       },
        {
            dni:2929828282,
            apellido:"cano",
            nombrecompleto:"juan andres",
            antiguedadLaboral:22,
            sueldo:7500000.77
       }

    
    ];

       
       const empleado1 = {
            dni:45789232,
            apellido:"lopez",
            nombrecompleto:"fernanda",
            antiguedadLaboral:15,
            sueldo:12500000.25
       }

    /* 
        aqui la estoy definiendo a la función 
        y estoy haciendo destructuring en el cuerpo
        de la función.    
    */

    const fnCalculeAumentoSueldo = (empleado)=>{

        // aqui estoy haciendo destructuring en el cuerpo de la funcion
        const {antiguedadLaboral,sueldo} = empleado;

        console.log(antiguedadLaboral);

        console.log(sueldo);

        let aumento = sueldo + sueldo * (antiguedadLaboral * 3)/100;

        return aumento;

    };

    /* Estoy definiendo una función y estoy haciendo destructuring
    en el Encabezado de la función */

    const fnCalcularAumentoSueldo2 = ({antiguedadLaboral,sueldo})=>{

        console.log(antiguedadLaboral);

        console.log(sueldo);

        let aumento = sueldo + sueldo * (antiguedadLaboral * 3)/100;

        return aumento;

    };


    // aqui la estoy invocando a la función //

   // let sueldo1 = fnCalculeAumentoSueldo(empleado1);

    //console.log(sueldo1);

   // let sueldo2 = fnCalcularAumentoSueldo2(empleado1);
    
    //console.log(sueldo2);

    /* Invocar a una de esas funciones dentro de un forEach */

    console.log("--------------------------------");

    Empleados.forEach(item => {
    
        let aumento = fnCalcularAumentoSueldo2(item);
        console.log(aumento);
    
    });



{

    const MisDatos = {

        dni:22882982,
        apellido:"MALDONADO",
        nombre:"DANIEL",
        hijos:[{dni:1,nombre:"AGUSTIN"},{dni:2,nombre:"ROCIO"},{},{}]

    };


}