import React from "react";
import { Alert, Card, Button, Spinner } from "react-bootstrap";
import { ContainerMoto } from "./Motos.style";
import { Link } from "react-router-dom";
import useFetchMotos from "../../customHooks/useFetchMotos";

const Motos = () => {
  const { motos, loading, error, setError } = useFetchMotos();

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

      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {motos &&
        motos?.map((moto, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={moto.img} />
            <Card.Body>
              <Card.Title>{moto?.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
