import React from "react";
import { Nav, NavItem, Bars, NavMenu } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <NavMenu>
          <NavItem className="menu-item" to="projects">
            Projects
          </NavItem>
          <NavItem className="menu-item" to="about">
            About
          </NavItem>
          <NavItem className="menu-item" to="contact">
            Contact
          </NavItem>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
