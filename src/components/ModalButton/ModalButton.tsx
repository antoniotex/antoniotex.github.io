import { ReactElement, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { theme } from '../../common/styles/theme.css';
import * as S from './styles.css';

type ModalButtonProps = {
  children: ReactElement;
  title: string;
};

const ModalButton: React.FC<ModalButtonProps> = ({ children, title }) => {
  const [open, setOpen] = useState(true);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <S.OpenButton onClick={openModal}>{title}</S.OpenButton>
      <S.ModalFull open={open}>
        <S.ModalContent>
          <S.ModalHeader>
            <CgClose
              style={{ cursor: 'pointer' }}
              onClick={openModal}
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
