export function contorPlus(numbertoPlus) {
  return {
    type: "CONTOR_PLUS",
    payload: numbertoPlus,
  };
}

export function contorMinus() {
  return {
    type: "CONTOR_MINUS",
  };
}
