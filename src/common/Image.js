import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  display: block;
`;

const Image = ({ src, src2x, alt, ...other }) => {
  const srcset = src2x ? `${src2x} 2x` : null;

  return (
    <StyledImg
      srcSet={srcset}
      {...other}
    />
  );
};

export default Image;
