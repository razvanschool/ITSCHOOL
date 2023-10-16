import { addToMotoError, addToMotoSuccess } from "../store/Motos/actions";

export const addMoto = (data, dispatch) => {
  fetch("http://localhost:3002/motors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => {
      const functionOfAddSuccess = addToMotoSuccess();
      dispatch(functionOfAddSuccess);
      return;
    })
    .catch(() => {
      const functionOfAddError = addToMotoError();
      dispatch(functionOfAddError);
      return;
    });
};
