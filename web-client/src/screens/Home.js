import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  padding: 5px 5px;
  background-color: lightblue;
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
    <>
      {data.laptops.map(laptop => (
        <Box key={laptop.model}>
          <p>Model: {laptop.model}</p>
          <p>CPU: {laptop.cpu.model}</p>
          <p>CPU Base Clock: {laptop.cpu.baseClock} GHz</p>
        </Box>
      ))}
    </>
  );
};

export default Home;
