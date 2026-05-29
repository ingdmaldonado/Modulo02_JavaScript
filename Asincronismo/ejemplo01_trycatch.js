
import validarEdad from "./modulo.js";

  try {
      validarEdad(-1);
  } catch (error) {
    console.log(error);
  }
  



{

  // ── EJEMPLO 01 - ReferenceError - variable no declarada ──
  try {
    console.log("ejemplo 01 - ReferenceError - variable no declarada");
    console.log(variableX);
  } 
  catch (error) 
  {
    console.log(error.name);
    console.log(error.message);
  }

  // ── EJEMPLO 02 - ReferenceError - operar con variable no declarada ──
  try {
    console.log("ejemplo 02 - ReferenceError - operar con variable no declarada");
    let resultado = variableX * 10;
  } 
  catch (error) 
  {
    console.log(error.name);
    console.log(error.message);
  }

  // ── EJEMPLO 03 - TypeError - acceder a propiedad de undefined ──
  try {
    console.log("ejemplo 03 - TypeError - acceder a propiedad de undefined");
    let usuario;
    console.log(usuario.nombre);
  } 
  catch (error) 
  {
    console.log(error.name);
    console.log(error.message);
  }

  // ── EJEMPLO 04 - TypeError - llamar algo que no es una función ──
  try {
    console.log("ejemplo 04 - TypeError - llamar algo que no es una función");
    let texto = "hola";
    texto();
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

  // ── EJEMPLO 05 - finally - se ejecuta siempre, haya error o no ──
  try 
  {
    console.log("ejemplo 05 - finally - se ejecuta siempre");
    console.log(variableX);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  } finally {
    console.log("finally - esto se ejecuta siempre, haya error o no");
  }

  // ── EJEMPLO 06 - throw - lanzar un error propio ──
  try {
    console.log("ejemplo 06 - throw - lanzar un error propio");
    let edad = -5;
      if (edad < 0) throw new Error("La edad no puede ser negativa");
      console.log(edad);
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
}


