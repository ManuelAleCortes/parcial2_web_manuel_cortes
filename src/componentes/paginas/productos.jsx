import "./paginas.css";
import Menu from "../contenido/menu";
export default function Productos() {

    return (
        <>
        <header id="pagina-encabezado">
          <div>
            <Menu titulo="Login" direccion="/login" nombre="Página productos"/>
          </div>
          
        </header>
        <div id="pagina-contenido">
          <div id="pagina-contenido-contenedor">

          </div>
        </div>
      </>
    );
}