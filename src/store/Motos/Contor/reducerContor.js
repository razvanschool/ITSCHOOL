export const initialStateContor = {
  defaultValue: "test",
  contorValue: 0,
};

export function contorReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "CONTOR_PLUS": {
      const numar = state.contorValue + action.payload;
      return { ...state, contorValue: numar };
    }
    case "CONTOR_MINUS": {
      let newState = {
        ...state,
        contorValue: state.contorValue - action.payload,
      };
      return newState;
    }
    case "RETURN_TO_DEFAULT": {
      return {
        defaultValue: "test",
        contorValue: 0,
      };
    }
    default:
      return state;
  }
}
