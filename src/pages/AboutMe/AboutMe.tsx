import { useTranslation } from 'react-i18next';
import { SectionTag } from '../../components/SectionTag';
import * as S from './styles.css';

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <SectionTag num='01' title={t('section.about')} idItem='sobre'>
        <S.AboutText>{t('about.description')}</S.AboutText>
      </SectionTag>
    </S.Container>
  );
};

export default AboutMe;
