import React, { useEffect, useState } from "react";

const Motos = () => {
  const [motos, setMotos] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/motors`)
      .then((response) => response.json())
      .then((moto) => {
        setMotos(moto);
      });
  }, []);
  console.log(motos);

  return (
    <div>
      MOTOS
      {motos?.map((el) => (
        <div key={el.id}>
          <h1>{el.name}</h1>
          <h2>{el.year}</h2>
        </div>
      ))}
    </div>
  );
};

export default Motos;
