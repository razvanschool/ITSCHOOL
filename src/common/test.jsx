import React, { useContext, useState, useEffect } from "react";

import { ruteAdmin } from "../constants/rute";
import Navbar from "./Navbar/Navbar";
import { Button } from "react-bootstrap";
import { ContorContext } from "../store/Motos/Contor/contextContor";
import { contorMinus, contorPlus } from "../store/Motos/Contor/actionsContor";

const Test = () => {
  //const [contorValue, setContorValue] = useState(0);
  const { stateGlobalContor, dispatchContor } = useContext(ContorContext);

  const handlePlus = () => {
    const actionPlus = contorPlus(4);
    dispatchContor(actionPlus); // ispatchContor(contorPlus());
    console.log("plus");
  };
  const handleMinus = () => {
    const actionMinus = contorMinus(7);
    dispatchContor(actionMinus);
    console.log("minus");
  };

  const handlePlusLocal = () => {
    setContorul(contorul + 1);
  };
  const handleMinusLocal = () => {
    setContorul(contorul - 1);
  };

  const { contorValue } = stateGlobalContor; // const  contorValue  = stateGlobalContor.contorValue;

  const [contorul, setContorul] = useState(0);

  useEffect(() => {
    console.log(contorul);
  }, [contorul]);

  return (
    <div>
      <Navbar
        logo="https://static.vecteezy.com/system/resources/thumbnails/011/161/739/small/motorcycles-logo-design-template-vector.jpg"
        rute={ruteAdmin}
      />
      <div style={{ background: "#5d0303", color: "#fff", padding: "50px" }}>
        <Button onClick={handleMinus}>-</Button>
        {"  "} Produse adaugate in cos: {contorValue}
        {"  "}
        <Button onClick={handlePlus}>+</Button>
      </div>

      <div style={{ background: "#5d0303", color: "#fff", padding: "50px" }}>
        <Button onClick={handleMinusLocal}>-</Button>
        {"  "} Produse adaugate in cos: {contorul}
        {"  "}
        <Button onClick={handlePlusLocal}>+</Button>
      </div>
    </div>
  );
};

export default Test;
