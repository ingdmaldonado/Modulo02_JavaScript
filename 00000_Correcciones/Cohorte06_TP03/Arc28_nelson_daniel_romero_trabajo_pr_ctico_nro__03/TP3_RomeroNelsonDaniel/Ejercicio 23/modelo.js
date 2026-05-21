export const calcularImporteAgua = (consumo) => {
    //PB es PrimerBloque, SB SegundoBloque y TB TercerBloque
    const volumenPB = 50;
    const volumenSB = 70;
    const montoPB = 350;
    const montoSB = 555.20
    const montoTB = 1552.20
    
    if(consumo <= volumenPB){
        return volumenPB * montoPB;
    }
    if(consumo > volumenPB && consumo <= volumenSB){
        let importe = volumenPB * montoPB;
        consumo -= volumenPB;
        importe += consumo * montoSB;
        return importe;
    }
    if(consumo > 70){
        let importe = volumenPB * montoPB + (volumenSB - volumenPB) * montoSB;
        consumo -= volumenSB;
        importe += consumo * montoTB;
        return importe;
    }
}