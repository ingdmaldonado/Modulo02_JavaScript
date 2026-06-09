import {useState} from "react";
import {fnCalcularIva} from "../utils/utilidades.js";

const Ejercicio03 = ()=>{

    const [importeBase,setImporteBase] = useState(0);
    
    const [importeConIva,setImporteConIva] = useState(0);

    const handleOnInput = (e)=>{

      const valorIngresado = Number(e.target.value);

      setImporteBase(valorIngresado);

      setImporteConIva(fnCalcularIva(valorIngresado));

    };

    return (<>
      <label>Ingrese el Importe Base</label>
      <input onChange={handleOnInput}></input>

      <h1>Importe Base: {importeBase}</h1>

      <h2>Importe con Iva: {importeConIva}</h2>

    </>);

};

export default Ejercicio03