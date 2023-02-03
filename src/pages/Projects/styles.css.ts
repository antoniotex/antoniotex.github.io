import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

export const Container = styled.div``;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
`;

export const SectionDescription = styled.p`
  font-size: ${theme.font.sizes.medium};
  margin-bottom: 50px;
`;
