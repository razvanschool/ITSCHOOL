import React from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import { ruteGuest } from "../constants/rute";
import Motos from "./Motos/Motos";

const HomeGuest = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Navbar
        isGuest={true}
        logo="https://static.vecteezy.com/system/resources/thumbnails/011/161/739/small/motorcycles-logo-design-template-vector.jpg"
        rute={ruteGuest}
      />
      <div>
        <Motos />
      </div>
      <Footer />
    </div>
  );
};

export default HomeGuest;
