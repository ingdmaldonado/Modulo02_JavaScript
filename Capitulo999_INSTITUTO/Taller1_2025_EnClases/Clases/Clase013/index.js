

{
    console.log("aplication is running");


    let email = "dmaldonadogmail.com";

    /*

    - no debe existir espacios en blanco

    - 1 un caracter arroba

    - dominio => es lo que esta despues del arroba

    - nombre usuario => lo que esta antes del arroba

    - que en la parte del dominio tiene que haber un .

    */


    /* PRIMERA PARTE. vamos a controlar
    que no tenga espacios en blanco */

    let tieneEspaciosEnBlanco = false;

    let espacioBlanco = ' ';

    for(let i=0;i < email.length;i = i +1)
    {
        caracter = email.charAt(i);
        console.log(i," ",caracter);
        if(caracter === espacioBlanco)
        {
            tieneEspaciosEnBlanco = true;
            break;
        }
    }

    console.log(tieneEspaciosEnBlanco);


    /* SEGUNDA PARTE: verificar
    que tenga una sola arroba */

    let tieneUnArroba = false;
    let contadorArrobas = 0;

    for(let j = 0; j < email.length;j=j+1)
    {
        caracter = email.charAt(j);
        console.log(j," ",caracter);
        if(caracter === '@')
        {
            contadorArrobas = contadorArrobas + 1;

            if(contadorArrobas === 1)
            {
                tieneUnArroba = true;
            }
            else
            {
                tieneUnArroba = false;
            }

        }
    }

    console.log(tieneUnArroba);

}