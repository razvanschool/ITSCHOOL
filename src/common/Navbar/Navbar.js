import { useState } from "react";
import "./Navbar.css";
import style from "./Navbar.module.css";
import { Title } from "./Navbar.style";

function Navbar({ isGuest, logo, rute }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={style.nav + ` ${isGuest ? "nav-guest" : "nav-admin"}`}>
      <img src={logo} alt="Logo" className="nav-logo" />
      <Title>TEST</Title>
      {showDropdown && (
        <div className="nav-rute nav-rute-mobile">
          {rute?.map((ruta, index) => (
            <div className="nav-ruta nav-ruta-mobile" key={ruta + index}>
              {ruta}
            </div>
          ))}
          <img src={logo} alt="Logo" className="nav-logo-dropdown" />
        </div>
      )}

      <div className="nav-rute nav-rute-desktop">
        {rute?.map((ruta, index) => (
          <div className="nav-ruta-desktop" key={ruta + index}>
            {ruta}
          </div>
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
