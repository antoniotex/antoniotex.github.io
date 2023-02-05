import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

type ModalFullProps = {
  open: boolean;
};

export const Container = styled.div``;

export const OpenButton = styled.button`
  border: none;
  padding: 10px 20px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.small};
  border-radius: 8px;
`;

export const ModalFull = styled.div<ModalFullProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: ${theme.colors.black}ee;
  display: ${(p: ModalFullProps) => (p.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px;
  padding-bottom: 0;
`;

export const ModalContent = styled.div`
  background: ${theme.colors.white};
  border-radius: 16px;
  min-width: 200px;
  min-height: 100px;
`;
