import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

export const Container = styled.div``;

export const Description = styled.p`
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.weight.normal};
  margin-bottom: 40px;
`;

export const ModalButton = styled.button`
  background: ${theme.colors.primary};
  border: none;
  color: ${theme.colors.white};
  font-weight: ${theme.font.weight.semiBold};
  font-size: ${theme.font.sizes.medium};
  padding: 20px 60px;
  border-radius: 16px;
`;