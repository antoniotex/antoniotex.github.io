import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 900px;
  margin: 100px auto;
`;

export const Open = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 40px;
`;

export const OpenText = styled.h2`
  font-family: ${theme.font.family.sourceCode};
  font-size: ${theme.font.sizes.large};
  font-weight: ${theme.font.weight.extraBold};
`;

export const Number = styled(OpenText)`
  color: ${theme.colors.primary};
  font-weight: ${theme.font.weight.normal};
  margin-right: 16px;
`;

export const Close = styled(OpenText)`
  color: ${theme.colors.gray};
  align-self: flex-end;
  margin-top: 40px;
`;
