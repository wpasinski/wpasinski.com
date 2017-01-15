import React from 'react';
import { ProfileCard, Wrapper } from '../common';

const HomePage = () => (
  <Wrapper>
    <ProfileCard>
      <ProfileCard.Title>Wojciech Pasiński</ProfileCard.Title>
      <ProfileCard.Subtitle>Front End Engineer at Syncano</ProfileCard.Subtitle>
    </ProfileCard>
  </Wrapper>
);

export default HomePage;
