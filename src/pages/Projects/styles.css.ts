import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

export const Container = styled.div``;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SectionDescription = styled.p`
  font-size: ${theme.font.sizes.medium};
  margin-bottom: 50px;
`;
