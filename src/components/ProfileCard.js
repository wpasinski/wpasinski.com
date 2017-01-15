import React from 'react';
import styled from 'styled-components';
import { Image, Mailto, SocialIcon, Subtitle, Title } from '../common';

const StyledImage = styled(Image)`
  border-radius: 50%;
  margin-bottom: 30px;
  overflow: hidden;
`;

const StyledSubtitle = styled(Subtitle)`
  margin-top: 10px;
`;

const SocialIconContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

const EmailSocialIcon = styled.div`
  line-height: 20px;
`;

const ProfileCard = ({ photoSrc, photoSrc2x, photoAlt, title, subtitle, githubHref, linkedinHref }) => (
  <div>
    <StyledImage src={photoSrc} src2x={photoSrc2x} alt={photoAlt} />
    <Title>{title}</Title>
    <StyledSubtitle>{subtitle}</StyledSubtitle>
    <SocialIconContainer>
      <SocialIcon service="github" href={githubHref} />
      <SocialIcon service="linkedin" href={linkedinHref} />
      <EmailSocialIcon>or <Mailto email="wpasinski@gmail.com">send me an e-mail</Mailto></EmailSocialIcon>
    </SocialIconContainer>
  </div>
);

export default ProfileCard;
