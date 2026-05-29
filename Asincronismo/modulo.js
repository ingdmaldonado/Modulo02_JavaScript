

// validaciones.js

export default function validarEdad(edad) {
  if (edad < 0) throw new Error("La edad no puede ser negativa");
  if (edad > 120) throw new Error("La edad ingresada no es válida");
  return true;
}