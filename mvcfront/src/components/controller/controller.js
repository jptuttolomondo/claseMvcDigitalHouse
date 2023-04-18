import { Usuario, modeloUsuarios } from "../model/model";
import { vistaUsuarios } from "../view/view";

export const controladorUsuarios = {
  agregarUsuario: function (nombre, email) {
    const nuevoUsuario = new Usuario(nombre, email);
    modeloUsuarios.agregarUsuario(nuevoUsuario);
  },
  mostrarTodo: () => {
    return vistaUsuarios.mostrarUsuarios(modeloUsuarios.obtenerUsuarios());
  },
};
