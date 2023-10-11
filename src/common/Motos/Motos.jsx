import React, { useEffect, useState } from "react";
import { Alert, Card, Button } from "react-bootstrap";
import { ContainerMoto } from "./Motos.style";
import { Link } from "react-router-dom";

const Motos = () => {
  const [motos, setMotos] = useState(undefined);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3002/motors`)
      .then((response) => response.json())
      .then((moto) => {
        setMotos(moto);
      })
      .catch((error) => {
        setError(true);
        console.log("Error", error);
      });
  }, []);

  return (
    <ContainerMoto>
      <Alert show={error} variant="danger">
        <Alert.Heading>My Alert</Alert.Heading>
        <p style={{ width: "300px" }}>Failed to load motos</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setError(false)} variant="outline-danger">
            Close
          </Button>
        </div>
      </Alert>

      {motos?.map((moto, index) => (
        <Card key={index} style={{ width: "18rem" }}>
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
