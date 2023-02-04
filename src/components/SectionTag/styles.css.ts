import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 900px;
  margin: 100px auto;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    margin: 80px auto;
  }

  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

export const Open = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const OpenText = styled.h2`
  font-family: ${theme.font.family.sourceCode};
  font-size: ${theme.font.sizes.large};
  font-weight: ${theme.font.weight.extraBold};

  @media (max-width: 425px) {
    font-size: ${theme.font.sizes.medium};
  }
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
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
