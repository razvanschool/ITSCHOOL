import {
  deleteMotoActionSuccess,
  deleteMotoActionFailed,
} from "../store/Motos/actions";

export const deleteMotoApi = (id, dispatch) => {
  fetch(`http://localhost:3002/motors/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => {
      const deleteActionSucces = deleteMotoActionSuccess();
      dispatch(deleteActionSucces);
    })
    .catch(() => {
      const deleteActionFail = deleteMotoActionFailed();
      dispatch(deleteActionFail);
    });
};
