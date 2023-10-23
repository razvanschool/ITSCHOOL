import React, { useContext, useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { ruteAdmin } from "../../constants/rute";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Button, Card, Modal, Spinner } from "react-bootstrap";
import { ContainerMoto } from "./Motos.style";

import { MotoContext } from "../../store/Motos/context";
import { deleteMotoAction, deleteReset } from "../../store/Motos/actions";
import useFetchMotos from "../../customHooks/useFetchMotos";

const Moto = () => {
  const { id } = useParams();
  const { motos: moto, loading } = useFetchMotos(`/${id}`);

  const [showModal, setShowModal] = useState(false);

  const { stateGlobal, dispatch } = useContext(MotoContext);

  useEffect(() => {
    const actionOfreset = deleteReset(id, dispatch);
    dispatch(actionOfreset);
  }, [id, dispatch]);

  const deleteMoto = () => {
    const actionOfDelete = deleteMotoAction(id, dispatch);
    dispatch(actionOfDelete);
  };
  console.log(moto);
  return (
    <div>
      <Navbar
        logo="https://static.vecteezy.com/system/resources/thumbnails/011/161/739/small/motorcycles-logo-design-template-vector.jpg"
        rute={ruteAdmin}
      />

      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {moto && (
        <ContainerMoto>
          <Card style={{ width: "40rem" }}>
            <Card.Img
              variant="top"
              style={{ width: "200px" }}
              src={moto?.img}
              alt="moto.img"
            />
            <Card.Body>
              <Card.Title>{moto?.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                {moto?.year}
              </Card.Text>
            </Card.Body>

            <Link to={`/moto/edit/${id}`}>Edit Moto</Link>
            <Button onClick={() => setShowModal(true)} variant="danger">
              Delete
            </Button>
          </Card>
        </ContainerMoto>
      )}

      <Footer />

      <Modal
        show={showModal && !stateGlobal.isDeleted}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?!</Modal.Body>
        {stateGlobal.deleteMessageFail && (
          <Modal.Body>{stateGlobal.deleteMessageFail}</Modal.Body>
        )}
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
