import React from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import { ruteGuest } from "../constants/rute";
import Motos from "./Motos/Motos";

const HomeGuest = ({ children }) => {
  //Exemplu de functie ce returneaza html
  // const functionArr = (arr) => {
  //   if (arr.length < 99) {
  //     return <p>99+</p>;
  //   } else return <p>{arr.length}</p>;
  // };

  // const arr = [1, 2, 3];

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

      {/* Exemplu de functie ce returneaza html */}
      {/* {functionArr(arr)} */}
      <Motos />
      <Footer />
    </div>
  );
};

export default HomeGuest;
