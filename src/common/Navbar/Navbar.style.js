import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
  background: ${(props) => (props.isGuest ? "#2f718b" : "#a19f9f")};
  font-size: 24px;
  font-weight: 500;
  position: relative;
  height: 60px;
  padding: 4px 24px;
`;

export const Logo = styled.img`
  height: 100%;
  border-radius: 50%;
  margin-left: 24px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export const NavContainerRuteDesktop = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
`;

export const RuteMobile = styled.div`
  font-size: large;
  position: absolute;
  top: 60px;
  right: 0;
  background: #a19f9f;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  z-index: 99;

  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

export const LogoDrop = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 50px auto auto auto;
  bottom: 0;
`;

export const LinkCostumMobile = styled(Link)`
  padding: 8px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

export const LinkCostumDesktop = styled(Link)`
  margin-left: 16px;
  color: white;
  text-decoration: none;
  &:hover {
    background: rgb(187, 186, 185);
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const DropdownBurger = styled.button`
  width: 100px;
  height: 40px;
  color: rgb(0, 0, 0);
  background: transparent;
  padding: 8px;
  cursor: pointer;
  border: none;

  @media only screen and (min-width: 900px) {
    display: none;
  }
`;
