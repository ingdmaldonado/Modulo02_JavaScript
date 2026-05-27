export const calcularGastos = (cantidadMetros) => {
    let importe = 0;
    if (cantidadMetros <= 0){
        alert('Los valores deben ser mayores a 0');
        return null;

    }
    else if (cantidadMetros <= 50){
        importe = 50 * 350;
    }
    else if (cantidadMetros > 50 && cantidadMetros <= 70){
        importe = ((cantidadMetros - 50) * 555.2) + 50 *350;
    }
    else if (cantidadMetros > 70){
        importe = ((cantidadMetros - 70) * 1552.2) + 20 * 555.2 + 50 *350;
    }
    return importe;
}

export const fnTasaDeSubsuelo = (importe)=>{
    let tasaSubsuelo = 0;
    tasaSubsuelo = importe + (importe *3)/100;
    return tasaSubsuelo;

};

export const fnTasaFiscalizacion = (importe)=>{
    let tasaFiscalizacion = 0;
    tasaFiscalizacion = importe + (importe *1.2)/100;
    return tasaFiscalizacion;
};