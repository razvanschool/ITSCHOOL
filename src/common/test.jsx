import React, { useContext } from "react";

import { ruteAdmin } from "../constants/rute";
import Navbar from "./Navbar/Navbar";
import { Button } from "react-bootstrap";
import { ContorContext } from "../store/Motos/Contor/contextContor";
import { contorMinus, contorPlus } from "../store/Motos/Contor/actionsContor";

const Test = () => {
  //const [contorValue, setContorValue] = useState(0);
  const { stateGlobalContor, dispatchContor } = useContext(ContorContext);
  console.log(stateGlobalContor);
  const handlePlus = () => {
    const actionPlus = contorPlus(4);
    dispatchContor(actionPlus); // ispatchContor(contorPlus());
    console.log("plus");
  };
  const handleMinus = () => {
    const actionMinus = contorMinus();
    dispatchContor(actionMinus);
    console.log("minus");
  };

  const { contorValue } = stateGlobalContor;

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
    </div>
  );
};

export default Test;
