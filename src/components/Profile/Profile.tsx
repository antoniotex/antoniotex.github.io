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
        Sou desenvolvedor web frontend, mas com grande bagagem no backend, sendo
        útil em projetos que necessitem atuar nos 2 lados. Atualmente (2023) a
        demissão em me pegou e estou aberto a novas oportunidades.
      </S.ProfileDescription>
      <ModalButton title='Entre em contato'>
        <ContactForm />
      </ModalButton>
    </S.Container>
  );
};

export default Profile;
