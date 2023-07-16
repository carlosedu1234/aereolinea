import types from "./types";

function miReducer2(state = [], action) {
  switch (action.type) {
    case types.vendido:
      return [
        ...state,
        { ciudad: action.payload.ciudad, precio: action.payload.precio },
      ]
      ;

    case types.cancelar:
      return state.filter(datos=>datos.ciudad!==action.payload.ciudad);
      
    default:
      return state;
  }
}

export default miReducer2;
