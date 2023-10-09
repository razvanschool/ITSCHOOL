import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { ruteGuest } from "../../constants/rute";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Card } from "react-bootstrap";
import { ContainerMoto } from "./Motos.style";

const Moto = () => {
  const { id } = useParams();
  const [moto, setMoto] = useState();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3002/motors/${id}`)
        .then((response) => response.json())
        .then((moto) => {
          setMoto(moto);
        });
    }
  }, []);

  return (
    <div>
      <Navbar
        isGuest={true}
        logo="https://static.vecteezy.com/system/resources/thumbnails/011/161/739/small/motorcycles-logo-design-template-vector.jpg"
        rute={ruteGuest}
      />
      <ContainerMoto>
        <Card style={{ width: "40rem" }}>
          <Card.Img variant="top" src={moto?.img} />
          <Card.Body>
            <Card.Title>{moto?.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              {moto?.year}
            </Card.Text>
          </Card.Body>
        </Card>
      </ContainerMoto>
      <Footer />
    </div>
  );
};

export default Moto;
