import React from "react";
import styled from "styled-components";

const Product = ({ name, image, price }) => {
  return (
    <Prod>
      <h1>{name}</h1>
      <img src={image} alt="" />
      <span>{`₹${price}`}</span>
    </Prod>
  );
};

const Prod = styled.div`
  position: relative;
  height: 40rem;
  width: 40rem;
  background-color: #105f36;
  margin: 8rem;
  border-top-left-radius: 20rem;
  border-top-right-radius: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    position: absolute;
    bottom: 20%;
    left: 0;
    color: #fff;
    transform: rotate(-90deg);
    z-index: 20;
  }

  & > img {
    position: absolute;
    height: 30rem;
    bottom: -20%;
    right: -20%;
    z-index: 10;
  }

  & > span {
    position: absolute;
    color: #fff;
    font-size: 8rem;
    opacity: 0;
    transform: translateX(20rem);
    transition: all 1s ease;
    z-index: 0;
  }

  &:hover span {
    opacity: 1;
    transform: translateX(0rem);
  }
`;

export default Product;
