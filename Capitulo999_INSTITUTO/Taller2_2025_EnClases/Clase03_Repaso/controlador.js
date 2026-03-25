



const fnCuadrado = numero => numero * numero;

const fnCubo = numero => numero * numero * numero;

const fnDescuentoJubilados = sueldoBruto => (sueldoBruto*11)/100;

const fnIVADeFacturaDeServicios = (importeBase)=>
    {
        let auxiliar = (importeBase * 27)/100;
        return auxiliar;
    }

/* esta es una función que recibe solamente tres sueldos */
const fnPromedioDeSueldos = (sueldo1,sueldo2,sueldo3)=>
{
    return (sueldo1 + sueldo2 + sueldo3)/3;
}

/* es una función que recibe como parametro "n" sueldos */
const fnPromedioDeSueldosGenerico = (...sueldos)=>
    {
        let sumaTotal = 0;
        sueldos.forEach((sueldo)=>
            {
                sumaTotal = sumaTotal + sueldo;
            })

        return (sumaTotal/sueldos.length);
    }


/* esta función llamadora, o funcion
callBack esta pensada para llamar a otras
que devuelven un resultado
esas funciones siempre reciben un parametro
de entrada y devuelven un resultado
*/

const fnLlamadora = (fnGenerica,parametro)=>
{

    let resultado = fnGenerica(parametro);

    return resultado;

}




    const dineroDeEstudiantes = [500,5000,2000,0,-200000];

window.addEventListener("load",()=>
    {
        console.log("andando");

        console.log(dineroDeEstudiantes);

        /* como agregar al vector por atras */

        dineroDeEstudiantes.push(4050);
        console.log(dineroDeEstudiantes);

        /* removiendo el primer elemento */
        let primerElemento = dineroDeEstudiantes.shift();
        console.log(primerElemento);
        console.log(dineroDeEstudiantes);

        /* largo del vector  */
        console.log(` Largo: ${dineroDeEstudiantes.length}`);
        
        /* elimino elementos contiguos de un 
        vector. primer parametro es la posición
        desde donde comenzará a elimianr los elemntos.
        el segundo parametro es la cantidad
        de elementos que eliminará.
        Redimensiona el vector, es decir el largo
        cambia. 
        */

        console.log(dineroDeEstudiantes);
        let datosEliminados = dineroDeEstudiantes.splice(3,2);

        console.log(datosEliminados);
        console.log(dineroDeEstudiantes);

        // elimina el ultimo elemento del vector //
        let primerValor = dineroDeEstudiantes.pop();
        console.log(primerValor);
        console.log(dineroDeEstudiantes);

        dineroDeEstudiantes.unshift("esto ira al principio");
        console.log(dineroDeEstudiantes);

        /**********************************************/
        /********** RECORRIDO DE LOS VECTORES  ********/
        /**********************************************/

        for(let indice = 0;indice < dineroDeEstudiantes.length;indice++)
        {
            console.log(dineroDeEstudiantes[indice]);
        }


        /* aqui estoy haciendo REPASO DE LAS FUNCIONES
        CALLBACK */

        let resultado1 = fnLlamadora(fnCuadrado,2);
        console.log(resultado1);

        let resultado2 = fnLlamadora(fnCubo,2);
        console.log(resultado2);

        let resultado3 = fnLlamadora(fnIVADeFacturaDeServicios,10000);
        console.log(resultado3);

        let resultado4 = fnLlamadora((numero)=>{
            return numero * 15;
        },10);

        console.log(resultado4);

        let resultado5 = fnLlamadora(parametro=>parametro * 5/100,200)
        console.log(resultado5);

        /******************************************/
        /*  forEach = para cada uno hago esto     */
        /******************************************/

        /* potencia: recorre todos los elementos. 
        se asegura de que si hay transformaciones
        de largo y longitud en el vector. durante 
        el recorrido, el ciclo no se salga de INDICE */


        /* En esta variante. están presentes
        el elemento y el indice. los nombres
        de los parametros son definidos por el 
        usuario. como el desee y quiera 
        
            element,index

        */
        dineroDeEstudiantes.forEach((elemento,indice)=>
            {
                console.log(elemento);
            })

        /* aqui paso unicamente el elemento */
        dineroDeEstudiantes.forEach((elemento)=>
            {
                console.log(elemento);
            })

        /* aqui voy a pasarle una arrow function
        corta */

        dineroDeEstudiantes.forEach(element => console.log(`elemento ${element}`));
        
        
        /*
            forEach
            filter
            map
            every
            some
            reduce
        */
        
        /************ FILTER  *************/

        /* lleva una arrow function que
        debe devolver true o false dependiendo
        si quiero elegir ese elemto no 
        devuelve un sub-vector resultante
        */

        dineroDeEstudiantes.push(5500);
        dineroDeEstudiantes.push(12700);
        dineroDeEstudiantes.push(4000);


        console.log(dineroDeEstudiantes);
        const vectorResultante = dineroDeEstudiantes.filter(element => element > 5000);

        console.log(dineroDeEstudiantes);
        console.log(vectorResultante);

        vectorResultante[0] = 0;
        vectorResultante[1] = 750;

        console.log(dineroDeEstudiantes);
        console.log(vectorResultante);

        /****** MAP => RECIBE UNA ARROW FUNCTION. 
         * 
         * que si o si. tiene que tener un return 
         * de lo que yo considere. 
         *  - lo hace sobre todos los elementos
         *  - aplica una función de transformación sobre cada elemento
         *  - lo hace sobre todos
         *  - devuelve un vector paralelo
         */

        const vectorResultantePorMAP = dineroDeEstudiantes.map((element)=>
            {
                let auxiliar = `soy el elemento ${element}`;
                return auxiliar;
            })

        console.log(dineroDeEstudiantes);
        console.log(vectorResultantePorMAP);

        /************ TEMAS AISLADOS Y NECESARIOS  ********/

        /*
            objetos literales (listo)
            
            destructuring

            spread operator (listo) => spread para vectores, spread para atributos de objetos

            rest operator => generalmente se utiliza al momento de definición de funciones.
        */

        // me estoy haciendo una copia de dinero de estudiantes //
        const copiaDeDineroDeEstudiantes = dineroDeEstudiantes;

        copiaDeDineroDeEstudiantes.push(7800);
        copiaDeDineroDeEstudiantes.push(6200);
        
        /* whats sucedeitor ? */
        console.log(dineroDeEstudiantes);
        console.log(copiaDeDineroDeEstudiantes);
        
        let a = 200;
        let b = a;

        b = 400;

        console.log(a,b);

        /* Spread Operator u operador de propagación en
        javaScript . esos tres puntos
        suspensivos, le dicen
        toma todos los elementos del vector de estudiantes
        y 
        */

        let copiaDeDineroDeEstudiantesINDEPENDIENTE = [1,5,7,...dineroDeEstudiantes,-500,-2200];

        console.log(dineroDeEstudiantes);
        console.log(copiaDeDineroDeEstudiantesINDEPENDIENTE);

        /*************** INVOCACION DE FUNCIONES con parametros Rest *********/

        console.log(fnPromedioDeSueldosGenerico(25000,27000,28800,29000,50000));

      

        /************************* OBJETOS LITERALES  *********************/
        
          /* conjunto de claves/valor
        atributo:valor */

        const persona1 = 
        {
            dni:44219694,
            apellido:"NICOLAU",
            nombres:"VALENTIN HUGO RAFAEL ATILIO",
            club:"CLUB ATLETICO BOCA JUNIORS"
        }

        console.log(persona1);

        persona1.apellido = "NICOLAU DE XXX";

        console.log(persona1);


        const persona2 = persona1;

        persona2.nombres = "QUE ES ESTO MIGUEL ERNESTO ?";

        console.log(persona1);
        console.log(persona2);

        const persona3 = {...persona1,domicilio:"SAN ANTONIO - FRAN MAMERTO ESQUIU"};

        persona3.apellido = "MALDONADO";
        persona3.nombres = "ENRIQUE DANIEL";

        console.log(persona1);
        console.log(persona2);
        console.log(persona3);

        /******************* DESTRUCTURING DE OBJETOS  *************/

        /* Descomponer un objeto, o un vector */

        const fnSaludarPersona = (persona) =>
        {
            console.log(`Hola ${persona.nombres}`);
        }

        // Desestructo el objeto persona y lo paso como parametro de la funcion //
        const fnSaludarPersonaConDestructuring = ({nombres})=>
            {
                console.log(`Hola ${nombres}`);
            }

        fnSaludarPersona(persona1);
        fnSaludarPersona(persona2);
        fnSaludarPersona(persona3);

        const club = {nombres:"BOCA JUNIORS",cantidadCopas:6};

        fnSaludarPersonaConDestructuring(persona1);
        fnSaludarPersonaConDestructuring(persona2);
        fnSaludarPersonaConDestructuring(persona3);
        fnSaludarPersonaConDestructuring(club);








    })