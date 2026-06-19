export const fnRequestAPI = async (URL) =>{

   let request ="";
   let datos ="";
   try {
    request =await fetch(URL);
    

    if (!request.ok)
        {
            throw new Error ("se produjo un error al intentar recuperar datos");
        }   
        
        datos=request.json();
        
        return datos;

   } catch (error) {
    throw new Error (`error en API.js - se produjo un error ${error.message}`);
   } 
}