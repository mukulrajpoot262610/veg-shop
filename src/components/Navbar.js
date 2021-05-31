import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Panel>
        <Nav>
          <Logo>
            <img src="/images/header/logo.svg" alt="" />
          </Logo>
          <Menu>
            <h1>CLOSE</h1> <i class="fas fa-bars"></i>
          </Menu>
        </Nav>
      </Panel>
      <Logo>
        <img src="/images/header/logo.svg" alt="" />
      </Logo>
      <Menu>
        <h1>MENU</h1> <i class="fas fa-bars"></i>
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
  transition: 1s ease;

  /* &:hover {
    height: 100vh;
    width: 100%;
  } */
`;

const Panel = styled.div`
  /* padding: 3rem 4rem; */
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 2s ease;
  display: none;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
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
