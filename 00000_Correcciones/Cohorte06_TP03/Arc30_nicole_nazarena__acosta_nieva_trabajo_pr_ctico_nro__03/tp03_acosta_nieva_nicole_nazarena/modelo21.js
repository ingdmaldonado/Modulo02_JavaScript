
export const fnNotaDelAlumno = (notaPromedio) =>{


  let devolucionNota = "0";
  if ( notaPromedio <=4) {
    devolucionNota = `desaprobado`;
  }
  else if (notaPromedio > 4 && notaPromedio <= 7) {
    devolucionNota = `aprobado`;
  }
  else if ( notaPromedio > 7 && notaPromedio <= 9 ) {
    devolucionNota = `muy bueno`;
  }
  else if ( notaPromedio === 10 ) {
    devolucionNota = `excelente`;
  }
  else {
    alert (`ingrese una nota valida`)
  }

return devolucionNota;

};