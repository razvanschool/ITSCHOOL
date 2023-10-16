export function closeMessage() {
  return {
    type: "CLOSE_MESSAGE",
  };
}

export function addToMoto(moto, dispatch) {
  return {
    type: "ADD_TO_MOTO",
    payload: moto,
    otherValue: dispatch,
  };
}

export function addToMotoSuccess() {
  return {
    type: "ADD_TO_MOTO_SUCCESS",
  };
}

export function addToMotoError() {
  return {
    type: "ADD_TO_MOTO_ERROR",
  };
}

export function deleteMotoAction(id, dispatch) {
  return {
    type: "DELETE_MOTO",
    payload: id,
    otherFunctionThatINeedOnDelete: dispatch,
  };
}

export function deleteMotoActionSuccess() {
  return {
    type: "DELETE_MOTO_SUCCESS",
  };
}

export function deleteMotoActionFailed() {
  return {
    type: "DELETE_MOTO_FAILED",
  };
}

export function deleteReset() {
  return {
    type: "RESET_DELETE",
  };
}
