import React from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import { ruteAdmin } from "../constants/rute";

const HomeAdmin = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Navbar
        isGuest={false}
        logo="https://static.vecteezy.com/system/resources/thumbnails/011/161/739/small/motorcycles-logo-design-template-vector.jpg"
        rute={ruteAdmin}
      />
      <div>ADMIN{children}</div>
      <Footer />
    </div>
  );
};

export default HomeAdmin;
