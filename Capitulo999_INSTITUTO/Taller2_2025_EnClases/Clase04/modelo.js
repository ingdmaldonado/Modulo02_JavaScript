

 export const fnCalcularPromedioDeServicios = (...servicios)=>
    {
        let sumaTotalDeServicios = 0;
        
        servicios.forEach(servicio =>
            {
                sumaTotalDeServicios = sumaTotalDeServicios + servicio;
            })

        // aqui retorno la suma total de todos los servicios dividido en la cantidad
        return sumaTotalDeServicios/servicios.length;

    }

    /* tiene que recibir 1 solo parametro ()
        tiene que tener una sola linea para ahorrar el {}
        tiene que tener una sola instrucción en el cuerpo para 
        ahorrar el return 
    */

export const fnCuadrado = numero => numero * numero;
