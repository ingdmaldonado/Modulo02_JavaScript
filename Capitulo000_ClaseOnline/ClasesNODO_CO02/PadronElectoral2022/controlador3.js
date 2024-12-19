
import PadronElectoral from "./PadronParte07.js";

window.addEventListener("load",()=>
    {
        console.log("running");

        /* reduce */

        const vectorComun = [10,12,8,0,4];


        let resultado1 = vectorComun.reduce((acumulador,element)=>
            {

                acumulador = acumulador + element;

                return acumulador;

            },0);

        console.log(resultado1);


        /* Respuesta a Felipe */

        const distanciasEnMetros = [1000,2000,3000];

        let resultado2 = distanciasEnMetros.reduce((totalKilometros,element)=>
            {

                let auxiliar = 0;
                auxiliar = element/1000;

                totalKilometros = totalKilometros + auxiliar;

                return totalKilometros;


            },0);


        console.log(resultado2);

        /* la Idea es Contar la Cantidad de Mujeres */

        let cantidadDeMujeres = PadronElectoral.reduce((contador,element)=>
            {
                if(element.SEXO === 'F')
                {
                    contador = contador + 1;
                }

                return contador;

            },0)
       

        let cantidadDeHombres = PadronElectoral.reduce((contador,element)=>
                {
                    if(element.SEXO === 'M')
                    {
                        contador = contador + 1;
                    }
    
                    return contador;
    
                },0)

        let cantidadDeX = PadronElectoral.reduce((contador,element)=>
                    {
                        if(element.SEXO === 'X')
                        {
                            contador = contador + 1;
                        }
        
                        return contador;
        
                    },0)

        console.log(cantidadDeMujeres);

        console.log(cantidadDeHombres);

        console.log(cantidadDeX);

        /* como creo un objeto literal acumulador de cosas */

        let objetoAcumulador = 
            {
                cantidadVarones:0,
                cantidadMujeres:0,
            }

        console.log(objetoAcumulador);

        objetoAcumulador.cantidadVarones = objetoAcumulador.cantidadVarones + 1;
        objetoAcumulador.cantidadMujeres = objetoAcumulador.cantidadMujeres + 10;

        console.log(objetoAcumulador);

        /* VAMOS A HACER UN PROCESO UNICO
        QUE TOMA UN VECTOR, LO RECORRE
        POR UNICA VEZ, Y CUENTA VARONES
        Y MUJERES EN UN SOLO RECORRIDO */

        let resultadoCompleto = PadronElectoral.reduce((objetoAcumulador,element)=>{

            if(element.SEXO === 'F')
            {
                objetoAcumulador.cantidadMujeres = objetoAcumulador.cantidadMujeres + 1;
            }
            else
            {
                objetoAcumulador.cantidadVarones =   objetoAcumulador.cantidadVarones + 1;
            }

            return objetoAcumulador;

        },{ // esto sería 
            cantidadVarones:0,
            cantidadMujeres:0,
        });

        console.log(resultadoCompleto);

    })