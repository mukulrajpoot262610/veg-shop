import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Quality>
        <h1>
          High Quality hand picked <br /> products from local <br /> farmers.
        </h1>
        <img src="/images/badge.svg" alt="" />
      </Quality>
      <ProductsList />
    </div>
  );
};

const Quality = styled.section`
  height: 100vh;
  background-color: #2d3531;
  display: flex;
  padding: 0 8rem;
  position: relative;

  & > h1 {
    font-size: 10.5rem;
    font-weight: 400;
    line-height: 10.7rem;
    color: #1ca854;
    position: absolute;
    top: 20%;
  }

  & > img {
    object-fit: contain;
    height: 30rem;
    position: absolute;
    bottom: 20%;
    right: 10%;
  }
`;

export default Homepage;
