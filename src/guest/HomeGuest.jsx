import React, { useState } from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import { ruteGuest } from "../constants/rute";
import Motos from "../common/Motos/Motos";

const HomeGuest = () => {
  const [numeUser, setNumeUser] = useState("Razvan");

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Navbar
        numeUser={numeUser}
        isGuest={true}
        logo="https://static.vecteezy.com/system/resources/thumbnails/011/161/739/small/motorcycles-logo-design-template-vector.jpg"
        rute={ruteGuest}
      />

      <Motos />

      <Footer />
    </div>
  );
};

export default HomeGuest;
