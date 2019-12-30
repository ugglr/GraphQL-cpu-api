import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  overflow: hidden;
`;
const Nav = styled.div``;

const Template = props => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cpus">CPUs</Link>
          </li>
          <li>
            <Link to="/laptops">Laptops</Link>
          </li>
        </ul>
      </nav>
      <ContentContainer>{props.children}</ContentContainer>
    </>
  );
};

export default Template;
