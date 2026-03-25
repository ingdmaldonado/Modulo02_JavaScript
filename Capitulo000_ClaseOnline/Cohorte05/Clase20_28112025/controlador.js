
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

    const idBtnEvery = document.querySelector("#idBtnEvery");

    const idBtnSome = document.querySelector("#idBtnSome");

    const idBtnFilter = document.querySelector("#idBtnFilter");

    const idBtnMap = document.querySelector("#idBtnMap");

    const idBtnReduce = document.querySelector("#idBtnReduce");

    //console.log(paisesAmerica);

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

    idBtnEvery.onclick = ()=>{

        console.log(paisesAmerica);

        /* Every, es para saber si todos los objetos
        que recorro del Vector, cumplen con una condición. */

        /* aqui estoy tratando de descubrir con every si todos los paises
        tienen mas de un millon de habitantes */

        let salida = paisesAmerica.every(pais => pais.poblacion > 40000);

        console.log(salida);

        /* Cuales serán los paises que tienen menos de
        1 millon de habitantes y por lo tanto no 
        me hacen cumplir la condición del every */

        const PaisesChicos = paisesAmerica.filter(pais => pais.poblacion <= 40000);

        console.log(PaisesChicos);

    }

    idBtnSome.onclick = ()=>{

        let anioBuscado = 1950;

        let salida = paisesAmerica.some(pais => pais.añoIndependencia > anioBuscado);

        console.log(salida);

        const paisesFundados = paisesAmerica.filter(pais => pais.añoIndependencia > anioBuscado);

        console.log(paisesFundados);

    }

    idBtnFilter.onclick = ()=>{

        const paisesBuscados = paisesAmerica.filter(pais => pais.añoIndependencia > 1800 && pais.poblacion >= 45000000);

        console.log(paisesBuscados);
        
    };

    idBtnMap.onclick = ()=>{

        /* Es el metodo como la columna vertebral */

        const sueldosOctubre = [25000,120,2800];

        const sueldosNoviembre = sueldosOctubre.map(sueldo => sueldo = sueldo + (sueldo * 7/100)); 

        console.log(sueldosOctubre);
        console.log(sueldosNoviembre);

        /* 
            forEach => recorre => no devuelve nada
            filter => filtra y devuelve un subVector del vector original
        
        */

        const alumnosEnVivo = [{
            dni:25,
            nombre:"DANIEL MALDONADO",
            equipo:"CABJ"
        },{
            dni:35,
            nombre:"FEDERICO MOYETA",
            equipo:"CARP"
        },{
            dni:45,
            nombre:"EVER MARTIN ROMAY",
            equipo:"CABJ"
        }];

        console.log(alumnosEnVivo);

        const LosQueNoDescendimos = alumnosEnVivo.filter(alumno => alumno.equipo === 'CABJ');

        console.log(LosQueNoDescendimos);

        LosQueNoDescendimos.forEach(alumno => alumno.dni = alumno.dni + 1000);


        /* Se entiende que estos dos console.log
        se están haciendo despues de hacer el filtro
        y despues de haberles cambiado el dni sobre
        el filtro aplicado */

        console.log(LosQueNoDescendimos);

        console.log(alumnosEnVivo);


        /* Construir objetos literales
        a partir de variables o constantes */

        const productoCodigo = 1000;
        const productoDescripcion = `FERNET DE 750`;
        const productoPrecio = 14000;

        /* short hand - construir un objeto - constructuring */

        const producto = {productoCodigo,productoDescripcion,productoPrecio};

        console.log(producto);

        /* Destructuring - Desestructurar - Deconstruir */

        const alumno = {dni:5672929,nombre:"MESSI LIONEL",domicilio:"LA CHACARITA - SFVC",anioNacimiento:1999};
        
        console.log(alumno);

        /* Destructuring */

        const {dni,nombre,domicilio,anioNacimiento} = alumno;

        console.log(dni,nombre,domicilio,anioNacimiento);

        console.log(`------------------------`);

        const VectorNuevo = alumnosEnVivo.map(alumno => {

            // mostrando el alumno completo //
            console.log(alumno);

            // destructuring del alumno //
            const {equipo,dni,nombre} = alumno;

            // estoy mostrando las variables o constantes que saq. del destructuring //
            console.log(dni,nombre,equipo);

            let nacionalidad = `ARGENTINO`;

            const alumnoNuevo = {dni,nombre,equipo,nacionalidad};

            return alumnoNuevo;// palabra clave del map.

        });

        /* con MAP puedo lograr 
        crear una copia TOTALMENTE INDPENDIENTE
        DE OTRA */

        console.log(VectorNuevo);

    };


    idBtnReduce.onclick = ()=>{

        console.log(paisesAmerica);

        /* Reduce => reduccion. es un metodo
        que tiene los vectores que me permiten
        realizar contabilizacion, acumulación
        de valores a partir de vectores. sacar
        cantidades, sacar promedios */


        /* Vamos a hacer de la forma 
        clasica con forEach */

        let contadorAmericaCentral = 0;
        paisesAmerica.forEach(pais => pais.region === 'América Central' ? contadorAmericaCentral = contadorAmericaCentral + 1:contadorAmericaCentral);

        const AmericaCentral = paisesAmerica.filter(pais => pais.region === 'América Central');

        console.log(AmericaCentral);
        console.log(contadorAmericaCentral);

        /* Contar la cantidad de Paises de America Central */

        let contadorDePaises = paisesAmerica.reduce((contador,pais)=>{

            if(pais.region === 'América Central')
            {
                contador = contador + 1;
            }

            return contador;// si o si tiene que existir un return 

        },0);

        console.log(contadorDePaises);


        /* Contar los Paises de America del Sur
        que tienen más de 20 millones de habitantes */

        const paisesGrandesDeAS = paisesAmerica.reduce((contador,pais)=>{

            if((pais.region === 'América del Sur') && (pais.poblacion > 20000000))
            {
                contador = contador + 1;
            }    

            return contador;

        },0);

        const paisesAS = paisesAmerica.filter(pais => (pais.region === 'América del Sur') && (pais.poblacion > 20000000));

        // este es el resultado del filter //
        console.log(paisesAS);

        // este es el resultado del reduce //
        console.log(paisesGrandesDeAS);



    }

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