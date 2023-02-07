import { ReactElement, useContext } from 'react';
import { CgClose } from 'react-icons/cg';
import { useTheme } from 'styled-components';
import { AppContext } from '../../store/AppContext';
import * as S from './styles.css';

type ModalButtonProps = {
  children: ReactElement;
  title: string;
};

const ModalButton: React.FC<ModalButtonProps> = ({ children, title }) => {
  const {
    modal: { open, toggleModal },
  } = useContext(AppContext);

  const { colors } = useTheme();

  return (
    <>
      <S.OpenButton onClick={toggleModal}>{title}</S.OpenButton>
      <S.ModalFull open={open}>
        <S.ModalContent>
          <S.ModalHeader>
            <CgClose
              style={{ cursor: 'pointer' }}
              onClick={toggleModal}
              color={colors.text}
              size={25}
            />
          </S.ModalHeader>
          {children}
        </S.ModalContent>
      </S.ModalFull>
    </>
  );
};

export default ModalButton;
