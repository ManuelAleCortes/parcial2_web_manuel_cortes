import Menu from "../contenido/menu";
import "./paginas.css";
export default function NoPage() {
    return (
    <>
        <header id="pagina-encabezado">
          <div>
            <Menu titulo="Login" direccion="/login" nombre="Página error 404"/>
          </div>
          
        </header>
        <div id="pagina-contenido">
          <div id="pagina-contenido-contenedor">

          </div>
        </div>
      </>
      );
}