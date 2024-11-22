
/* esta función recibe como parametro una edad y 
determina si está dentro de un rango válido */

export const fnValidarEdad = (edad)=>
    {
        let edadValida = false;

       // edad > 0 && edad < 100 ? edadValida=true:edadValida=false;

        return (edad > 0 && edad < 100 ? true:false);

      //  return edadValida;

    }