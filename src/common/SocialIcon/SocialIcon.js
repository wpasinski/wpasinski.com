import React from 'react';
import styled from 'styled-components';

const StyledA = styled.a`
  display: block;
  margin-right: 16px;

  &:hover {
    opacity: .75;
  }
`;

const StyledImg = styled.img`
  display: block;
`;

const SocialIcon = ({ service, href }) => (
  <StyledA href={href} target="_blank" rel="noopener noreferrer">
    <StyledImg
      src={require(`./assets/${service}.svg`)}
      alt={service}
    />
  </StyledA>
);

export default SocialIcon;
