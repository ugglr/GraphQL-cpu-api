import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 16px 16px;
  background-color: burlywood;
`;

const Home = () => {
  return (
    <Container>
      <h1>Oh, Hi. What would you like to see?</h1>
      <h3>
        <Link to="/laptops">Laptops</Link>
      </h3>
      <h3>
        <Link to="/cpus">CPUs</Link>
      </h3>
    </Container>
  );
};

export default Home;
