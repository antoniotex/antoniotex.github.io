import * as S from './styles.css';

const Profile: React.FC = () => {
  return (
    <S.Container>
      <S.TitlePictureContainer>
        <S.TitleContainer>
          <S.ProfileTitle>Antonio Teixeira</S.ProfileTitle>
          <S.ProfileSubTitle>Desenvolvedor Frontend</S.ProfileSubTitle>
        </S.TitleContainer>
        <S.ProfilePictureContainer>
          <S.ProfilePicture
            src='src/common/images/profile.jpeg'
            alt='Profile image'
          />
        </S.ProfilePictureContainer>
      </S.TitlePictureContainer>
      <S.ProfileDescription>
        I'm a full-stack web developer, making great stuff happen since 2012.
        Currently building awesome tools for developers at Prezly.
      </S.ProfileDescription>
      <S.ContactButton>Entre em contato</S.ContactButton>
    </S.Container>
  );
};

export default Profile;
