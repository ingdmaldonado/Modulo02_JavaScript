
import {cohorte01,cohorte02,cohorte03,cohorte04} from "./datos.js";

//import {cohorte02} from "./datos.js";

//import {cohorte03} from "./datos.js";

//import {cohorte04} from "./datos.js"; tambien se puede repetir, pero no es optima

import {frRecorrerCohorte} from "./modelo.js";



window.onload = () => {
    
    //Punto 1
    frRecorrerCohorte(cohorte01); //Aqui usando la funcion frRecorrerCohorteV3 vamos a aplicarla sobre el objeto que querramos recorrer
    frRecorrerCohorte(cohorte02);
    frRecorrerCohorte(cohorte03);
    frRecorrerCohorte(cohorte04);
};