import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: 270px;
  position: relative;

  ::after {
    position: absolute;
    content: '';
    background: ${theme.colors.primary};
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
