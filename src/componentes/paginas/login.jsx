import "./paginas.css";
import Menu from "../contenido/menu";

export default function Login() {

    return (
        <>
        <header id="pagina-encabezado">
          <div>
            <Menu titulo="Registro" direccion="/registro" nombre="Página login" />
          </div>
          
        </header>
        <div id="pagina-contenido">
          <div id="pagina-contenido-contenedor">

          </div>
        </div>
      </>
    );
}