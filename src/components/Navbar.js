import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState({
    display: "none",
    opacity: 0,
  });

  const handleOpen = () => {
    setNav({
      display: "block",
      opacity: 1,
    });
  };
  const handleClose = () => {
    setNav({
      display: "none",
      opacity: 0,
    });
  };

  return (
    <Nav>
      <Panel style={{ display: nav.display, opacity: nav.opacity }}>
        <Up>
          <Logo>
            <img src="/images/header/logo.svg" alt="" />
          </Logo>
          <Menu onClick={handleClose}>
            <h1>CLOSE</h1> <i className="fas fa-bars"></i>
          </Menu>
        </Up>
        <Links>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/product">PRODUCTS</a>
          </li>
          <li>
            <Link to="/signin">SIGN IN</Link>
          </li>
        </Links>
      </Panel>
      <Logo>
        <img src="/images/header/logo.svg" alt="" />
      </Logo>
      <Menu onClick={handleOpen}>
        <h1>MENU</h1> <i className="fas fa-bars"></i>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  z-index: 1000;
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
  transition: all 2s ease;

  /* &:hover {
    height: 100vh;
    width: 100%;
  } */
`;

const Panel = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 8rem;
  transition: all 2s ease;
  background-color: rgba(0, 0, 0, 1);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const Up = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.ul`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  & > li {
    list-style: none;

    & > a {
      text-decoration: none;
      font-size: 8rem;
      line-height: 12rem;
      color: #105f36;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }
`;

const Logo = styled.div`
  img {
    height: 10vh;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 1s ease;

  &:hover {
    background-color: #111;
  }

  & > h1 {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 400;
    font-family: Poppins, sans-serif;
    color: #fff;
    margin: 0 1rem;
  }
  & > i {
    font-size: 2rem;
    line-height: 3rem;
    color: #fff;
    margin-right: 1rem;
  }
`;

export default Navbar;
