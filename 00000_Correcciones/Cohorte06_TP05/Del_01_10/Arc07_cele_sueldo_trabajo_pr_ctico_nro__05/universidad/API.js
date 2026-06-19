/* el objetivo de esta funcion es conectarme a un endoPoint de una API 
API
API => CONJUNTO DE  TODOS LOS enPoint que expone una Empresa ,organizacion ,la web 


enPoin => propia Empresa 
enPoin => entidades externas



*/

export const  finRequestAPI = async(URL) =>{

let request = " ";
let datos = " ";

try {// 1) hago el request y recibo el response //
    request= await fetch (URL);//promesa 

   //si algo  salio mal 
   if(!request.ok){

    throw new error ("se produjo un error en el intento de recuperar datos ");

  }
 //2) aqui convierto el response en un formato JSON//

 datos= await request.json();//promesa

   // si todo sale bien hago un return datos //

 return datos ;

} catch (error) {
  throw new Error (` Error en Api.js un error ${error.message}`);
    
}
}