export const fnSobreTasa = (opciones, importeBase) =>{
    
    if (opciones === 1) return (importeBase * 5)/1000;
    if (opciones === 2) return (importeBase * 1)/1000;
    if (opciones === 3) return (importeBase * 7)/1000;
    if (opciones === 4) return (importeBase * 2)/1000;
    if (opciones === 5) return (importeBase * 15)/1000;
    if (opciones === 6) return (importeBase * 1)/1000;
};