import React from "react";
import styled from "styled-components";
import SHOP_DATA from "../shop.data";

const Products = () => {
  return (
    <Page>
      {SHOP_DATA.map((veg) => {
        return (
          <>
            <div>
              <h1>{veg.name}</h1>
              <img src={veg.image} alt="" />
            </div>
          </>
        );
      })}
    </Page>
  );
};

const Page = styled.div`
  min-height: 100vh;
  background: url("/images/pattern.svg");
  background-repeat: repeat;
  display: flex;
  flex-wrap: wrap;
`;

export default Products;
