export class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

export const modeloUsuarios = {
  usuarios: [],

  agregarUsuario: function (usuario) {
    this.usuarios.push(usuario);
  },

  obtenerUsuarios: function () {
    return this.usuarios;
  },
};
