export const requestAPI = async ( URL) => {
    let request = "";
    let datos = "";
 try{
   request = await fetch(URL);
   if(!request.ok) 
   {
       throw new Error("se produjo un error en el intento de recuperar datos");
   }
   datos = await request.json();
   return datos;
 } catch(error){
   throw new Error (`error en Api.js ${error.message}`);
 }

}