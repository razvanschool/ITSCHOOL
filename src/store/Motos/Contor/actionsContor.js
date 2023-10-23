export function contorPlus(numbertoPlus) {
  return {
    type: "CONTOR_PLUS",
    payload: numbertoPlus,
  };
}

export function contorMinus(numbertoMinus) {
  return {
    type: "CONTOR_MINUS",
    payload: numbertoMinus,
  };
}

export function returnToDefault() {
  return {
    type: "RETURN_TO_DEFAULT",
  };
}
