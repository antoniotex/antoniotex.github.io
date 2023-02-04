import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

type LevelItemProps = {
  opacity: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: 0 20px 50px ${theme.colors.black}55;
  border-radius: 16px;
  background: ${theme.colors.white};

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const TechText = styled.h3`
  font-weight: ${theme.font.weight.normal};
  font-size: ${theme.font.sizes.medium};

  @media (max-width: 1024px) {
    font-size: ${theme.font.sizes.small};
  }

  @media (max-width: 768px) {
    font-size: ${theme.font.sizes.xsmall};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0px;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 425px) {
    margin-bottom: 10px;
  }
`;

export const Level = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
  }

  @media (max-width: 425px) {
  }
`;

export const LevelItem = styled.div<LevelItemProps>`
  position: relative;
  width: 90px;
  height: 40px;
  border-radius: 8px;
  margin-left: 16px;
  background: ${(p: LevelItemProps) =>
    p.opacity === '00' ? theme.colors.lightGray : 'none'};

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${theme.colors.primary}${(p: LevelItemProps) => p.opacity};
    border-radius: 8px;
  }

  :first-child {
    margin-left: 0px;
  }

  @media (max-width: 1024px) {
    width: 80px;
    height: 35px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 20px;
    margin-left: 8px;
  }

  @media (max-width: 425px) {
    width: 30px;
    height: 15px;
    margin-left: 4px;
  }
`;
