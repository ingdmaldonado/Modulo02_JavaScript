

export const determinarTasa = (tipoBebida, importeBase) => {
  let tasa = 0;

  switch (tipoBebida) {
    case 1:
      tasa = (importeBase*5)/ 1000;
      break;

    case 2:
      tasa = (importeBase*1)/ 1000;
      break;

    case 3:
      tasa = (importeBase*7)/ 1000;
      break;

     case 4:
      tasa = (importeBase*2)/ 1000;
      break;

     case 5:
      tasa = (importeBase*15)/ 1000;
      break;

     case 6:
      tasa = (importeBase*1)/ 1000;
      break;








    default:
      tasa = 0; 
      break;
  }

  return tasa;
};


     





