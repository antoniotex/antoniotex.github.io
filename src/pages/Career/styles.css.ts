import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

export const Container = styled.div``;

export const CareerInfo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;

  :last-child {
    margin-bottom: 0px;
  }
`;

export const Role = styled.h4`
  color: ${theme.colors.primary};
  font-weight: ${theme.font.weight.semiBold};
  font-size: ${theme.font.sizes.medium};
`;

export const Company = styled(Role)`
  color: ${theme.colors.black};
  margin-left: 4px;
  font-weight: ${theme.font.weight.normal};
`;
