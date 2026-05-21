

export const fnCantidadVocales = (cadenaDeTexto)=>{

    let cantidadDeVocales = 0 ;
    
    
    

    for (let i=0; i< cadenaDeTexto.length ;i++)
        {

            let caracter= cadenaDeTexto.chartA(i).toUpperCase();
            console.log(caracter);

            if((caracter===`A`)||(caracter===`E`)||(caracter===`I`)||(caracter===`O`)||(caracter===`U`))
                cantidadDeVocales = cantidadDeVocales + 1;
        }

        console.log(`la cantidad de vocales es:${cantidadDeVocales}`);

       return cantidadDeVocales;



};


