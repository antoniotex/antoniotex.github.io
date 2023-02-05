import { ReactElement, useContext, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { theme } from '../../common/styles/theme.css';
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

  return (
    <>
      <S.OpenButton onClick={toggleModal}>{title}</S.OpenButton>
      <S.ModalFull open={open}>
        <S.ModalContent>
          <S.ModalHeader>
            <CgClose
              style={{ cursor: 'pointer' }}
              onClick={toggleModal}
              color={theme.colors.black}
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
