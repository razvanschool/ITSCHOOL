import { useState } from "react";
import "./Navbar.css";
import style from "./Navbar.module.css";
import { Title } from "./Navbar.style";
import { Link } from "react-router-dom";

function Navbar({ isGuest, logo, rute }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={style.nav + ` ${isGuest ? "nav-guest" : "nav-admin"}`}>
      <img src={logo} alt="Logo" className="nav-logo" />
      <Title>TEST</Title>
      {showDropdown && (
        <div className="nav-rute nav-rute-mobile">
          {rute?.map((ruta, index) => (
            <Link
              to={ruta.ruta}
              className="nav-ruta nav-ruta-mobile"
              key={ruta + index}
            >
              {ruta.name}
            </Link>
          ))}
          <img src={logo} alt="Logo" className="nav-logo-dropdown" />
        </div>
      )}

      <div className="nav-rute nav-rute-desktop">
        {rute?.map((ruta, index) => (
          <Link to={ruta.ruta} className="nav-ruta-desktop" key={ruta + index}>
            {ruta.name}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="nav-dropdown"
      >
        &#9776;
      </button>
    </div>
  );
}

export default Navbar;
