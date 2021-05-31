import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Products from "../components/Products";

const Homepage = () => {
  const [offesetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <Quality>
        <h1>
          High Quality hand picked <br /> products from local <br /> farmers.
        </h1>
        <img src="/images/badge.svg" alt="" />
      </Quality>
      <Products />
    </div>
  );
};

const Quality = styled.section`
  height: 100vh;
  background-color: #2d3531;
  display: flex;
  padding: 0 5rem;
  position: relative;

  & > h1 {
    font-size: 6.5rem;
    font-weight: 600;
    line-height: 9.7rem;
    color: #1ca854;
    position: absolute;
    top: 20%;
  }

  & > img {
    object-fit: contain;
    height: 30rem;
    position: absolute;
    bottom: 10%;
    right: 10%;
  }
`;

export default Homepage;
