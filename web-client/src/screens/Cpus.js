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

const CPUS = gql`
  {
    cpus {
      model
      baseClock
      cores
      socket {
        socket
        cpuSupport {
          model
        }
      }
    }
  }
`;

const Cpus = () => {
  const { loading, error, data } = useQuery(CPUS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(data);

  return (
    <Container>
      {data.cpus.map(cpu => {
        return (
          <Box key={cpu.model}>
            <h3>Core {cpu.model}</h3>
            <p>Cores: {cpu.cores}</p>
            <p>Base Clock: {cpu.baseClock} GHz</p>
            <p>Socket: {cpu.socket.socket}</p>
            <p>This socket also supports:</p>
            <ul>
              {cpu.socket.cpuSupport.map(model => {
                return <li key={model.model}>{model.model}</li>;
              })}
            </ul>
          </Box>
        );
      })}
    </Container>
  );
};

export default Cpus;
