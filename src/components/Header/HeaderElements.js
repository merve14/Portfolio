import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

const baseFontSize = "1.2rem";
const baseColor = "#fff";

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
`;

export const NavItem = styled(ScrollLink)`
  display: flex;
  font-size: ${baseFontSize};
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #f6f6f6;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${baseColor};
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const commonMobileHidden = `
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }

  ${commonMobileHidden}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  ${commonMobileHidden}
`;
