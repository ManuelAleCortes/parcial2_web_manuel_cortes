import "./paginas.css";
import Menu from "../contenido/menu";

//import { useState } from "react";
export default function Registro() {

    return (
        <>
        <header id="pagina-encabezado">
          <div>
            <Menu titulo="Login" direccion="/login" nombre="Página registro" />
          </div>
          
        </header>
        <div id="pagina-contenido">
          <div id="pagina-contenido-contenedor">

          </div>
        </div>
      </>
    );
}