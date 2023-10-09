import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ContainerMoto } from "./Motos.style";
import { Link } from "react-router-dom";

const Motos = () => {
  const [motos, setMotos] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:3002/motors`)
      .then((response) => response.json())
      .then((moto) => {
        setMotos(moto);
      });
  }, []);

  return (
    <ContainerMoto>
      {motos?.map((moto) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={moto.img} />
          <Card.Body>
            <Card.Title>{moto?.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              {moto?.year}
            </Card.Text>
            <Link to={`/moto/${moto.id}`}>See Moto</Link>
          </Card.Body>
        </Card>
      ))}
    </ContainerMoto>
  );
};

export default Motos;
