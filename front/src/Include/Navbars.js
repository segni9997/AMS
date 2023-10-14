import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

export const Navbars = ({ children }) => {
  return (
    <>
      <Nav className="p-5">
        <NavLink to="/">
          <img alt="logo" className="" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/trainings" activeStyle>
            Trainings
          </NavLink>
          <NavLink to="/Posts" activeStyle>
            Posts
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin" className="outline-white">
            Sign In
          </NavBtnLink>
          <NavBtnLink to="/signup">Sign up</NavBtnLink>
        </NavBtn>
      </Nav>
      {children}
    </>
  );
};
