import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 35px;
  height: 270px;
  position: relative;
  cursor: pointer;

  ::after {
    position: absolute;
    content: '';
    background: ${({ theme }) => theme.colors.primary};
    width: 3px;
    height: 150px;
    bottom: -200px;
  }

  @media (max-width: 425px) {
    padding-top: 20px;
    ::after {
      width: 2px;
    }
  }
`;

export const EmailText = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${theme.font.family.sourceCode};
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.sizes.small};
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
`;
