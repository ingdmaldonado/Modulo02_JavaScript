
window.addEventListener("load",()=>
    {

        /* Reference Error. Errores de Referencia */

            try {

                let a = 20;
                let resultado = a + b;
                console.log(resultado);
                
            } catch (error) {
                console.log(error.message);
            }

          
            try {
                let c = Cuadrado(2);
            } catch (error) {
                console.log(error.message);
            }

        /*TypeError:
            Ocurre cuando intentas realizar una operación en un valor que no es del tipo esperado, como tratar de acceder a una propiedad de null.
        */
           
            try {
                let valor = null;
                console.log(valor.propiedadInexistente);  // Acceder a una propiedad de null
            } catch (error) {
                console.log(error.message);  // Captura el TypeError
            }
            

        /* SyntaxError */
        
            try 
            {
                iff(2>1)
                {
                    console.log("esto no pasara nunca");
                }
                
            } catch (error) {
                console.log(error.message);
            }

            

            /*
                let x = 5;
                let expresion = "2*x ++ 1";
                let resultado = eval(expresion);
            */
    

            /* SyntaxError: JSON malformado */

            try {
                let jsonMalformado = '{"nombre": "Juan", "edad": 30';  // Falta cerrar el JSON correctamente
                let datos = JSON.parse(jsonMalformado);  // Esto lanza un SyntaxError
            } catch (error) {
                console.log(error.message);  // Captura el SyntaxError
            }




        /* Range Error */

            try 
            {
                let importeGrande = 2457.7899292929292;
                console.log(importeGrande.toFixed(-3));    
            } catch (error) 
            {
                console.log(error.message);   
            }
           

            try
            {
                let importeGrande2 = 28929292902.299292929292929;
                console.log(importeGrande2.toFixed(101));
            }
            catch(error)
            {
                console.log(error.message);
            }
            

          
    })
