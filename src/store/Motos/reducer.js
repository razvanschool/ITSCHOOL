import { addMoto } from "../../api/Add";
import { deleteMotoApi } from "../../api/Delete";

export const initialState = {
  motos: [],
  displayAddMotoMessage: false,
  addMotoMessage: "",
  isLoading: false,
  isLoadingDelete: false,
  isDeleted: false,
  deleteMessageFail: "",
};

export function motoReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_MOTO": {
      let newState;

      addMoto(action.payload, action.otherValue);
      newState = {
        ...state,
        isLoading: true,
      };
      return newState;
    }
    case "ADD_TO_MOTO_SUCCESS": {
      let newState;

      newState = {
        ...state,
        isLoading: false,
        addMotoMessage: "POST request successful",
        displayAddMotoMessage: true,
      };

      return newState;
    }
    case "ADD_TO_MOTO_ERROR": {
      let newState;

      newState = {
        ...state,
        isLoading: false,
        addMotoMessage: "POST request failed",
        displayAddMotoMessage: true,
      };
      return newState;
    }
    case "CLOSE_MESSAGE": {
      const newState = {
        ...state,
        displayAddMotoMessage: false,
        addMotoMessage: "",
      };
      return newState;
    }
    case "DELETE_MOTO": {
      let localState;
      deleteMotoApi(action.payload, action.otherFunctionThatINeedOnDelete);
      localState = {
        ...state,
        isLoadingDelete: true,
      };

      return localState;
    }
    case "DELETE_MOTO_SUCCESS": {
      let localState;
      localState = {
        ...state,
        isLoadingDelete: false,
        isDeleted: true,
      };

      return localState;
    }
    case "DELETE_MOTO_FAILED": {
      let localState;
      localState = {
        ...state,
        isLoadingDelete: false,
        isDeleted: false,
        deleteMessageFail: "This can't be deleted",
      };

      return localState;
    }
    case "RESET_DELETE": {
      let localState;
      localState = {
        ...state,
        isDeleted: false,
        deleteMessageFail: "",
      };

      return localState;
    }

    // Nu uitam ca in cazul default sa returnam state-ul anterior, nemodificat!
    default:
      return state;
  }
}
