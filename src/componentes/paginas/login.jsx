import "./paginas.css";
import Menu from "../contenido/menu";
import React from "react";
import { app, auth, db } from '../paginas/fb';
//import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();



    const submitHandler = (e) => {
        e.preventDefault();
        const correo = e.target.emailField.value;
        const password = e.target.passwordField.value;
        console.log(correo,password);
        
        //app.auth().createUserWithEmailAndPassword(correo,password).then((usuarioFirebase)=>{console.log("usuario creado: ", usuarioFirebase)});
        //<Link to={"/productos"}></Link>
        history.push("/productos");
    };


    return (
        <>
        <header id="pagina-encabezado">
          <div>
            <Menu titulo="Registro" direccion="/registro" nombre="Página login" />
          </div>
          
        </header>
        <div id="pagina-contenido">
          <div id="pagina-contenido-contenedor">
            <h1> Inicio sesion</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="emailField">Correo</label>
                <input type="email" id="emailField"/>
                <label htmlFor="passwordField">contraseña</label>
                <input type="password" id="passwordField"/>
                <button type="submit">Iniciar sesion</button>
                
            </form>
          </div>
        </div>
      </>
    );
}