import React from 'react';
import { Email } from '../../components/Email';
import { Profile } from '../../components/Profile';
import { SocialNetwork } from '../../components/SocialNetwork';
import * as S from './styles.css';

const Home: React.FC = () => {
  return (
    <S.Container>
      <SocialNetwork />
      <Profile />
      <Email />
    </S.Container>
  );
};

export default Home;
