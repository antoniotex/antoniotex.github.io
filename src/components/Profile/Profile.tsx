import * as S from './styles.css';
import ProfileImage from '../../common/images/profile.jpeg';
import { ModalButton } from '../ModalButton';
import ContactForm from '../ContactForm/ContactForm';

const Profile: React.FC = () => {
  return (
    <S.Container>
      <S.TitlePictureContainer>
        <S.TitleContainer>
          <S.ProfileTitle>Antonio Teixeira</S.ProfileTitle>
          <S.ProfileSubTitle>Desenvolvedor Frontend</S.ProfileSubTitle>
        </S.TitleContainer>
        <S.ProfilePictureContainer>
          <S.ProfilePicture src={ProfileImage} alt='Profile image' />
        </S.ProfilePictureContainer>
      </S.TitlePictureContainer>
      <S.ProfileDescription>
        I'm a full-stack web developer, making great stuff happen since 2012.
        Currently building awesome tools for developers at Foursys.
      </S.ProfileDescription>
      <ModalButton title='Entre em contato'>
        <ContactForm />
      </ModalButton>
    </S.Container>
  );
};

export default Profile;
