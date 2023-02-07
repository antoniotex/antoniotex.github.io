import * as S from './styles.css';
import ProfileImage from '../../common/images/profile_light.png';
import ProfileImageDark from '../../common/images/profile_dark.png';

import { ModalButton } from '../ModalButton';
import ContactForm from '../ContactForm/ContactForm';
import { useTheme } from 'styled-components';

const Profile: React.FC = () => {
  const { title } = useTheme();

  return (
    <S.Container>
      <S.TitlePictureContainer>
        <S.TitleContainer>
          <S.ProfileTitle>Antonio Teixeira</S.ProfileTitle>
          <S.ProfileSubTitle>Desenvolvedor Frontend</S.ProfileSubTitle>
        </S.TitleContainer>
        <S.ProfilePictureContainer>
          <S.ProfilePicture
            src={title === 'light' ? ProfileImage : ProfileImageDark}
            alt='Profile image'
          />
        </S.ProfilePictureContainer>
      </S.TitlePictureContainer>
      <S.ProfileDescription>
        Sou desenvolvedor web frontend, mas com grande bagagem no backend, sendo
        útil em projetos que necessitem atuar nos 2 lados. Atualmente (2023) uma
        demissão em massa me pegou e estou aberto a novas oportunidades.
      </S.ProfileDescription>
      <ModalButton title='Entre em contato'>
        <ContactForm />
      </ModalButton>
    </S.Container>
  );
};

export default Profile;
