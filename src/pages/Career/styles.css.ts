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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Role = styled.h4`
  color: ${theme.colors.primary};
  font-weight: ${theme.font.weight.semiBold};
  font-size: ${theme.font.sizes.medium};

  @media (max-width: 1024px) {
    font-size: ${theme.font.sizes.small};
  }
`;

export const Company = styled(Role)`
  color: ${theme.colors.gray};
  margin-left: 4px;
  font-weight: ${theme.font.weight.normal};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
