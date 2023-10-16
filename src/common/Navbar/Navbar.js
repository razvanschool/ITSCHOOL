import { useState } from "react";

import {
  DropdownBurger,
  LinkCostumDesktop,
  Logo,
  NavContainerRuteDesktop,
  NavbarContainer,
  Title,
} from "./Navbar.style";

import Rute from "./RuteMobile";

function Navbar({ logo, rute, numeUser }) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" />

      <Title>MotoIT</Title>

      {showDropdown && <Rute numeUser={numeUser} rute={rute} logo={logo} />}

      <NavContainerRuteDesktop>
        {rute?.map((ruta, index) => (
          <LinkCostumDesktop to={ruta.ruta} key={ruta + index}>
            {ruta.name}
          </LinkCostumDesktop>
        ))}
      </NavContainerRuteDesktop>

      <DropdownBurger onClick={() => setShowDropdown(!showDropdown)}>
        &#9776;
      </DropdownBurger>
    </NavbarContainer>
  );
}

export default Navbar;
