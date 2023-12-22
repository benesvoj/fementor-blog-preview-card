import React from 'react';
import styled from "styled-components";

export const App = () => {
  return (
    <StyledContainer>
      <CardContainer>

      </CardContainer>
    </StyledContainer>
  );
}

const CardContainer = styled.div`
  //margin: 0 auto;
  width: 400px;
  height: 400px;
  border: 1px solid black;
`

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`