export const letra = palabra =>{
    let contador = 0;

    for(let i = 0; i < palabra.length; i++){
        
        let letra = palabra.charAt(i).toLowerCase();

         if(
            letra === "s" || letra === "S"

         ){
            contador ++ ;
         }

         

       
    }
    return contador
}