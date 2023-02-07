import styled from 'styled-components';
import { theme } from '../../../../common/styles/theme.css';

export const Container = styled.div`
  /* width: 430px; */
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 20px 50px ${({ theme }) => theme.colors.text}55;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;

  > :first-child {
    position: absolute;
    left: 0;
    top: -5px;
  }
`;

export const Title = styled.h4`
  margin: 20px 0;
  font-size: ${theme.font.sizes.medium};
`;

export const Description = styled.p`
  font-size: ${theme.font.sizes.small};
  margin-bottom: 30px;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TechPill = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  font-weight: ${theme.font.weight.normal};
  margin-right: 8px;
  padding: 4px 16px;
  border-radius: 16px;
  white-space: nowrap;
  margin-top: 8px;
`;

export const Link = styled.a`
  cursor: pointer;
`;
