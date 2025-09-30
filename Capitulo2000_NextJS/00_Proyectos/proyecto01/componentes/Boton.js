export default function Boton({ texto, fnClick }) {
  return <button onClick={fnClick}>{texto}</button>;
}
