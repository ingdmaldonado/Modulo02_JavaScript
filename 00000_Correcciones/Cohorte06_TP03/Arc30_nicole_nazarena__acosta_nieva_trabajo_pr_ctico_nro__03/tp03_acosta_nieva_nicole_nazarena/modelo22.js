export const impuestoBebida = (importeBase, tipoBebida) =>{

  let impuesto = 0;
  let resultado = 0;

  switch (tipoBebida)
  {
    case 1 : 
    impuesto = (importeBase * 5 )/1000;
    resultado = importeBase + impuesto;
    break;
    case 2 : 
    impuesto = (importeBase * 1 )/1000;
    resultado = importeBase + impuesto;
    break;
    case 3 : 
    impuesto = (importeBase * 7 )/1000;
    resultado = importeBase + impuesto;
    break;
    case 4 :
       impuesto = (importeBase * 2 )/1000;
    resultado = importeBase + impuesto;
    break;
    case 5 :
       impuesto = (importeBase * 15 )/1000;
    resultado = importeBase + impuesto;
    break;
    default :
     impuesto = (importeBase * 1 )/1000;
    resultado = importeBase + impuesto;
  }
  return resultado;
};