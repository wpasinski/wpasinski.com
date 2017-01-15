import React from 'react';
import { Wrapper } from '../../common';
import { ProfileCard } from '../../components';

const HomePage = () => (
  <Wrapper>
    <ProfileCard
      photoSrc={require('./assets/wpasinski.jpg')}
      photoSrc2x={require('./assets/wpasinski@2x.jpg')}
      photoAlt="photo of Wojciech Pasiński"
      title="Wojciech Pasiński"
      subtitle="Front End Engineer at Syncano"
      githubHref="https://github.com/wpasinski"
      linkedinHref="https://www.linkedin.com/in/wpasinski"
    />
  </Wrapper>
);

export default HomePage;
