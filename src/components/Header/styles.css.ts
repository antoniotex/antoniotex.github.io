import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
`;

export const NavBar = styled.nav`
  width: fit-content;
`;

export const Menu = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
`;

export const MenuItem = styled.li`
  padding: 16px 0;
  cursor: pointer;
  position: relative;

  :after {
    position: absolute;
    left: 0px;
    content: '';
    height: 40px;
    width: 0%;
    border-bottom: solid 3px ${theme.colors.primary};
    transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
    opacity: 0;
  }

  :hover:after {
    opacity: 1;
    width: 50%;
  }
`;

export const Number = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.font.sizes.medium};
  margin-right: 8px;
  font-family: ${theme.font.family.sourceCode};
  font-weight: ${theme.font.weight.normal};
  letter-spacing: 0.2px;
`;

export const Link = styled(Number)`
  color: ${theme.colors.black};
  margin-right: 16px;
`;
