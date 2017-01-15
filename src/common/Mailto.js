import React from 'react';
import styled from 'styled-components';

const StyledA = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #000000;
  }
`;

const Mailto = ({ email, children }) => (
  <StyledA href={`mailto:${email}`}>{children}</StyledA>
);

export default Mailto;
