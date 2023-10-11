import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { ruteAdmin } from "../../constants/rute";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Button, Card, Modal } from "react-bootstrap";
import { ContainerMoto } from "./Motos.style";

const Moto = () => {
  const { id } = useParams();
  const [moto, setMoto] = useState();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3002/motors/${id}`)
        .then((response) => response.json())
        .then((moto) => {
          setMoto(moto);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, [id]);

  const deleteMoto = () => {
    fetch(`http://localhost:3002/motors/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        window.location.href = "/home";
        setShowModal(false);
      })
      .catch((error) => {
        setShowModal(false);
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Navbar
        logo="https://static.vecteezy.com/system/resources/thumbnails/011/161/739/small/motorcycles-logo-design-template-vector.jpg"
        rute={ruteAdmin}
      />
      <ContainerMoto>
        <Card style={{ width: "40rem" }}>
          <Card.Img variant="top" style={{ width: "200px" }} src={moto?.img} />
          <Card.Body>
            <Card.Title>{moto?.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              {moto?.year}
            </Card.Text>
          </Card.Body>

          <Link to={`/moto/edit/${id}`}>Edit Moto</Link>
          <Button onClick={() => setShowModal(true)} variant="danger">
            Delete
          </Button>
        </Card>
      </ContainerMoto>
      <Footer />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteMoto}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Moto;
