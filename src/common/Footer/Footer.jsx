import React from "react";

const Footer = ({ setNumeUser, numeUser }) => {
  return (
    <div
      onClick={() => setNumeUser("Mihai")}
      className="footer"
      style={{
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        position: "fixed",
        bottom: "0",
        width: "100%",
        zIndex: 100,
      }}
    >
      {numeUser}
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/011/161/739/small/motorcycles-logo-design-template-vector.jpg"
        alt="MotoProject Logo"
        style={{
          height: "50px",
          borderRadius: "50%",
          padding: "2px",
          marginTop: "8px",
        }}
      />
      <h4 style={{ height: "50px", borderRadius: "50%", padding: "2px" }}>
        MotoProject
      </h4>
      <p>&copy; {new Date().getFullYear()} MotoProject. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
