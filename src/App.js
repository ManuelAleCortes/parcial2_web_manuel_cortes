
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/paginas/login";
import Registro from "./componentes/paginas/registro";
import Productos from "./componentes/paginas/productos";
import NoPage from "./componentes/paginas/noPage";
function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
