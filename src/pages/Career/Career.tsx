import { useTranslation } from 'react-i18next';
import { SectionTag } from '../../components/SectionTag';
import * as S from './styles.css';

const Career: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionTag num='04' title={t('section.career')} idItem='experiencia'>
      <S.Container>
        <S.CareerInfo>
          <S.Role>{t('career.role.foursys')}</S.Role>
          <S.Company>{` @Foursys. ${t('career.month.feb')}/2022 - ${t(
            'career.month.feb'
          )}/2023`}</S.Company>
        </S.CareerInfo>
        <S.CareerInfo>
          <S.Role>{t('career.role.dclick')}</S.Role>
          <S.Company>{` @Dclick. ${t('career.month.sep')}/2021 - ${t(
            'career.month.feb'
          )}/2022`}</S.Company>
        </S.CareerInfo>
        <S.CareerInfo>
          <S.Role>{t('career.role.act')}</S.Role>
          <S.Company>{` @ACT Digital. ${t('career.month.jan')}/2021 - ${t(
            'career.month.sep'
          )}/2021`}</S.Company>
        </S.CareerInfo>
        <S.CareerInfo>
          <S.Role>{t('career.role.s2')}</S.Role>
          <S.Company>{` @S2 Holding. ${t('career.month.aug')}/2020 - ${t(
            'career.month.nov'
          )}/2020`}</S.Company>
        </S.CareerInfo>
        <S.CareerInfo>
          <S.Role>{t('career.role.funcao')}</S.Role>
          <S.Company>{` @Função Sistemas. ${t('career.month.aug')}/2019 - ${t(
            'career.month.aug'
          )}/2020`}</S.Company>
        </S.CareerInfo>
      </S.Container>
    </SectionTag>
  );
};

export default Career;
