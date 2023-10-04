import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//import { useEffect } from "react";

const Motos = () => {
  const [motos, setMotos] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3002/motors/${id}`)
      .then((response) => response.json())
      .then((moto) => {
        setMotos(moto);
      });
  }, [id]);

  console.log(motos);

  // asta ia tot obiectul de params
  // const parametrii = useParams();

  return (
    <div>
      MOTOS
      <div
        style={{
          width: "500px",
          height: "300px",
          background: "#d1d2d3",
          margin: "auto",
        }}
      >
        <h1>Nume: {motos?.name}</h1>
        <h2>An: {motos?.year}</h2>
      </div>
    </div>
  );
};

export default Motos;
