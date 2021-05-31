import React from "react";
import styled from "styled-components";
import SHOP_DATA from "../shop.data";
import Product from "./Product";

const ProductsList = () => {
  return (
    <Page>
      <Head1>Vegetables</Head1>
      <Data>
        {SHOP_DATA.map((veg) => (
          <Product name={veg.name} image={veg.image} price={veg.price} />
        ))}
      </Data>
    </Page>
  );
};

const Page = styled.div`
  min-height: 100vh;
  background: url("/images/pattern.svg");
  background-repeat: repeat;
`;

const Head1 = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 6.5rem;
  font-weight: 600;
  line-height: 9.7rem;
  color: #105f36;
  text-shadow: 3px 2px 0.2rem rgba(0, 0, 0, 0.4);
`;

const Data = styled.div`
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default ProductsList;
