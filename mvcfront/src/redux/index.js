const initialState = {
  usuarios: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USUARIOS":
      state.usuarios.push(action.payload);

      return { ...state, usuarios: state.usuarios };

    case "USER_CONTROLLER":
      state.usuarios.push(action.payload);
      return { ...state, usuarios: state.usuarios };

    default:
      return state;
  }
}

export default rootReducer;
