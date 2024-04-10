import logo from './logo.svg';
import './App.css';
//import { useState } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/paginas/login";
import Registro from "./componentes/paginas/registro";
import Productos from "./componentes/paginas/productos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
