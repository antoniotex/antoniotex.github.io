import { useTranslation } from 'react-i18next';
import { SectionTag } from '../../components/SectionTag';
import * as S from './styles.css';

const Career: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionTag num='04' title={t('section.career')} idItem='experiencia'>
      <S.Container>
        <S.CareerInfo>
          <S.Role>{`Desenvolvedor Frontend React`}</S.Role>
          <S.Company>{` @Foursys. fev/2022 - fev/2023`}</S.Company>
        </S.CareerInfo>
        <S.CareerInfo>
          <S.Role>{`Desenvolvedor Frontend React / React Native`}</S.Role>
          <S.Company>{` @Dclick. set/2021 - fev/2022`}</S.Company>
        </S.CareerInfo>
        <S.CareerInfo>
          <S.Role>{`Analista de Sistemas`}</S.Role>
          <S.Company>{` @ACT Digital. jan/2021 - set/2021`}</S.Company>
        </S.CareerInfo>
        <S.CareerInfo>
          <S.Role>{`Desenvolvedor Fullstack`}</S.Role>
          <S.Company>{` @S2 Holding. ago/2020 - nov/2020`}</S.Company>
        </S.CareerInfo>
        <S.CareerInfo>
          <S.Role>{`Desenvolvedor .NET Júnior`}</S.Role>
          <S.Company>{` @Função Sistemas. ago/2019 - ago/2020`}</S.Company>
        </S.CareerInfo>
      </S.Container>
    </SectionTag>
  );
};

export default Career;
