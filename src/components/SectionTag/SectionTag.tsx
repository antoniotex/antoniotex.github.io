import { ReactElement } from 'react';
import { useTheme } from 'styled-components';
import * as S from './styles.css';

type Props = {
  children: ReactElement;
  num: string;
  title: string;
  idItem: string;
};

const SectionTag: React.FC<Props> = ({ children, num, title, idItem }) => {
  return (
    <S.Container id={idItem}>
      <S.Open>
        <S.Number>{num}.</S.Number>
        <S.OpenText>{`<${title}>`}</S.OpenText>
      </S.Open>
      {children}
      <S.Close>{`</${title}>`}</S.Close>
    </S.Container>
  );
};

export default SectionTag;
