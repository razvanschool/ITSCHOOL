export const initialStateContor = {
  defaultValue: "test",
  contorValue: 0,
};

export function contorReducer(state, action) {
  switch (action.type) {
    case "CONTOR_PLUS": {
      const numar = state.contorValue + action.payload;
      return { ...state, contorValue: numar };
    }
    case "CONTOR_MINUS": {
      let newState = { ...state, contorValue: state.contorValue - 1 };
      return newState;
    }
    default:  
      return state;
  }
}
