import "./menu.css";
import { Link } from "react-router-dom";

export default function Menu(props) {

    return (
        <div id="contenedor-title">
            <div id="contenedor-title-text">
            <div id="title-text">
                <span style={{ color: "white", fontSize: "13px", fontWeight: "bold"}}>{props.nombre}</span>
            </div>
            <div>
                <Link to={props.direccion}>
                    <button>
                        <div id="title-text">
                            <span style={{ color: "black", fontSize: "13px", fontWeight: "bold"}}>{props.titulo}</span>
                        </div>
                    </button>
                </Link>
            </div>
            </div>
      </div>
    );
}