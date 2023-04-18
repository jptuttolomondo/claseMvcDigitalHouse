import "./App.css";
import React, { useState } from "react";
import { controladorUsuarios } from "../controller/controller";
import { cargarUsuarios, cargarDesdeController } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  var usuarios = useSelector((state) => state.usuarios);
  var usuariosController = useSelector((state) => state.usuarios);
  const [input, setInput] = useState({
    nombre: "",
    email: "",
  });
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleInputChange(e) {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleClick(e) {
    e.preventDefault();
    //setInput({ ...input, [e.target.name]: e.target.value })//uso suscripcion
    controladorUsuarios.agregarUsuario(input.nombre, input.email); //uso controller

    setInput({ ...input, [e.target.name]: controladorUsuarios.mostrarTodo() }); //uso controller

   // dispatch(cargarUsuarios(input)) //uso suscripcion
    dispatch(cargarDesdeController(input)); //uso controller
  }

  return (
    <div className="App">
      <h1>Ejemplo de MVC</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Ingresa tu nombre:</h2>
        <input
          type="text"
          name="nombre"
          value={input.nombre}
          id="nombre"
          onChange={(e) => handleInputChange(e)}
        />
        <h2>Ingresa tu email:</h2>
        <input
          type="text"
          name="email"
          value={input.email}
          id="email"
          onChange={(e) => handleInputChange(e)}
        />
        <button type="button" onClick={(e) => handleClick(e)}>
          ingresar datos
        </button>
      </form>

      {/*----------------------------------------------------------------*/}
      <div>
        {" "}
        {usuariosController.map((e) => {//uso controller
         // usuarios.map(e=>{  //uso suscripcion
          return <div key={e.nombre}>{e.nombre + " " + e.email}</div>;
        })}
      </div>
      {/*----------------------------------------------------------------*/}
    </div>
  );
}

export default App;
