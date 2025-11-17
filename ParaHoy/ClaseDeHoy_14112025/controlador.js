
import {Pabellones,TipoDeStand} from "./datos.js";


console.log(Pabellones);

console.log(TipoDeStand);

const capturarValor = (elementoDOM) => {
  const nombre = elementoDOM.target.name;
  const valor = elementoDOM.target.value;

  console.log(nombre);
  console.log(valor);
};

window.onload = () => {
  const idApellido = document.querySelector("#idApellido");
  const idNombre = document.querySelector("#idNombre");

  console.log(idApellido);
  console.log(idNombre);

  idApellido.oninput = (e) => {
    capturarValor(e);
  };

  idNombre.oninput = (e) => {
    capturarValor(e);
  };
};
