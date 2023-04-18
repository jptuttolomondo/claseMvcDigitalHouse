export function cargarUsuarios(payload) {
  return { type: "GET_USUARIOS", payload };
}

export function cargarDesdeController(payload) {
  return { type: "USER_CONTROLLER", payload };
}
