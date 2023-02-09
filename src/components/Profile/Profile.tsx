import * as S from './styles.css';
import ProfileImage from '../../common/images/profile_light.png';
import ProfileImageDark from '../../common/images/profile_dark.png';

import { ModalButton } from '../ModalButton';
import ContactForm from '../ContactForm/ContactForm';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';

const Profile: React.FC = () => {
  const { title } = useTheme();
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.TitlePictureContainer>
        <S.TitleContainer>
          <S.ProfileTitle>Antonio Teixeira</S.ProfileTitle>
          <S.ProfileSubTitle>{t('home.subtitle')}</S.ProfileSubTitle>
        </S.TitleContainer>
        <S.ProfilePictureContainer>
          <S.ProfilePicture
            src={title === 'light' ? ProfileImage : ProfileImageDark}
            alt='Profile image'
          />
        </S.ProfilePictureContainer>
      </S.TitlePictureContainer>
      <S.ProfileDescription>{t('home.description')}</S.ProfileDescription>
      <ModalButton title={t('contact.title')}>
        <ContactForm />
      </ModalButton>
    </S.Container>
  );
};

export default Profile;
