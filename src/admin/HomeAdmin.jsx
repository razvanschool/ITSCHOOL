import React from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import { ruteAdmin } from "../constants/rute";
import { useState } from "react";
import Motos from "../common/Motos/Motos";

const HomeAdmin = ({ children }) => {
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
        isGuest={false}
        logo="https://static.vecteezy.com/system/resources/thumbnails/011/161/739/small/motorcycles-logo-design-template-vector.jpg"
        rute={ruteAdmin}
      />

      <Motos />

      <Footer numeUser={numeUser} setNumeUser={setNumeUser} />
    </div>
  );
};

export default HomeAdmin;
