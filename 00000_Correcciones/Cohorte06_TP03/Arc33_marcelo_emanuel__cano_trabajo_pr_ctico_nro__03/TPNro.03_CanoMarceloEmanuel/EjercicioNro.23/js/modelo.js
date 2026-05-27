export function calcularImporteAgua(metros3)  {

        let subTotal = 0;

        if (metros3 <= 50) {
            subTotal = metros3 * 350;         
        } 

        if (metros3 > 50 && metros3 <= 70) {
            subTotal = (50 * 350) + ((metros3 - 50) * 555.20);            
        }

        if (metros3 > 70) {
            subTotal = (50 * 350) + (20 * 555.20) + ((metros3 - 70) * 1552.20);           
        }
        return subTotal;
    }