
import paisesAmerica from "./paisesAmerica.js";

/*
    - construccion de objetos literales
    a partir de variables

    - destructuring de objetos literales

    - repaso de los metodos de vectores
        * forEach
        * map
        * find
        * filter
        * every
        * some
    

*/


window.onload = ()=>{

    console.log(`aplicación corriendo`);

    const idBtnForEach = document.querySelector("#idBtnForEach");

    const idCodigoPais = document.querySelector("#idCodigoPais");
    const idBtnFind = document.querySelector("#idBtnFind");

    console.log(paisesAmerica);

    idBtnForEach.onclick = ()=>{

        /* practicar el forEach con un 
        vector de paises */

        paisesAmerica.forEach((element,indice)=>{

            console.log(element,indice);

        });

        /* Ejemplo 02 => voy a hacer 
        un recorrido, pero la funcion
        callBack voy a tratar de hacerla
        lo mas corta posible
        
            - 1 tiene que recibir un solo parametro ()
            - 2 tiene que tener una sola instruccion para obviar las {} del cuerpo    
            - 3 se puede obviar la palabra return
        */

        console.log(`-------------`);

        paisesAmerica.forEach(pais=>console.log(pais));

    };

    // aqui es el boton buscar por (ID) //
    idBtnFind.onclick = ()=>{

        const codigoPais = idCodigoPais.value;
        
        console.log(codigoPais);

        /* Ejemplo de find Completo o largo */

        const paisBuscado = paisesAmerica.find((pais,indice)=>{

            if(pais.id === codigoPais)
            {
                return true;
            }
            else
            {
                return false;
            }
        });

        if(paisBuscado)
        {
            console.log(paisBuscado);
        }
        else
        {
            alert(`El pais es Inexistente`);
        }


        /* Ejemplo del Find corto */

        const paisBuscado2 = paisesAmerica.find(pais=>pais.id === codigoPais);

        if(paisBuscado2)
        {
            console.log(paisBuscado2);
        }
    };

}

 /* (01) Construir un objeto literal
    a partir de variables o constantes

    const dni = 77888999;
    const apellidos = "MALDONADO";
    const nombres = "ENRIQUE DANIEL";
    
    // construi un objeto literal con esos variables //
    const persona = {dni,apellidos,nombres};

    console.log(persona);

    */