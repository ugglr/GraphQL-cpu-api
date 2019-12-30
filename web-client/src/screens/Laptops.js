import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 16px 16px;
  background-color: burlywood;
`;
const Box = styled.div`
  width: 50%;
  padding: 8px 8px;
  background-color: lightblue;
  border-radius: 4px;
  border-color: black;
  border-width: 2;
  border-style: solid;
  margin-bottom: 1rem;
`;

const LAPTOPS = gql`
  {
    laptops {
      model
      cpu {
        model
        baseClock
        cores
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(LAPTOPS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      {data.laptops.map(laptop => (
        <Box key={laptop.model}>
          <h3>{laptop.model}</h3>
          <p>CPU: {laptop.cpu.model}</p>
          <p>CPU Base Clock: {laptop.cpu.baseClock} GHz</p>
        </Box>
      ))}
    </Container>
  );
};

export default Home;
