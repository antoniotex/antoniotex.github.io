import { useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import * as S from './styles.css';

const Email: React.FC = () => {
  const { modal } = useContext(AppContext);

  return (
    <S.Container onClick={modal.toggleModal}>
      <S.EmailText>antoniotx.dev@gmail.com</S.EmailText>
    </S.Container>
  );
};

export default Email;
