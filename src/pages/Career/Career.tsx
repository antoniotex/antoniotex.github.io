import { SectionTag } from '../../components/SectionTag';
import * as S from './styles.css';

const Career: React.FC = () => {
  return (
    <SectionTag num='04' title='experiencia'>
      <S.Container>
        <S.CareerInfo>
          <S.Role>{`Desenvolvedor Frontend React`}</S.Role>
          <S.Company>{` @ Foursys. fev/2022 - fev/2023`}</S.Company>
        </S.CareerInfo>
        <S.CareerInfo>
          <S.Role>{`Desenvolvedor Frontend React`}</S.Role>
          <S.Company>{` @ Foursys. fev/2022 - fev/2023`}</S.Company>
        </S.CareerInfo>
        <S.CareerInfo>
          <S.Role>{`Desenvolvedor Frontend React`}</S.Role>
          <S.Company>{` @ Foursys. fev/2022 - fev/2023`}</S.Company>
        </S.CareerInfo>
        <S.CareerInfo>
          <S.Role>{`Desenvolvedor Frontend React`}</S.Role>
          <S.Company>{` @ Foursys. fev/2022 - fev/2023`}</S.Company>
        </S.CareerInfo>
      </S.Container>
    </SectionTag>
  );
};

export default Career;
