import React from 'react';
import styled from 'styled-components';
import { HomePage } from '../../pages';

const StyledDiv = styled.div`
  -webkit-font-smoothing: antialiased;
  color: #9B9B9B;
  font-family: 'Rubik', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
`;

const App = () => (
  <StyledDiv>
    <HomePage />
  </StyledDiv>
);

export default App;
