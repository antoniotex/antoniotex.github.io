import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

type MenuProps = {
  top: number;
  scroll: boolean;
};

type ContainerProps = {
  scroll: boolean;
};

export const Container = styled.header<ContainerProps>`
  display: flex;
  justify-content: center;
  -webkit-backdrop-filter: ${(p: ContainerProps) =>
    p.scroll ? 'blur(30px)' : 'none'};
  backdrop-filter: ${(p: ContainerProps) => (p.scroll ? 'blur(30px)' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 998;

  @media (max-width: 1024px) {
    padding: 0 10px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 998;
    height: 50px;
    justify-content: flex-end;
  }

  @media (max-width: 425px) {
    padding: 0 5px;
  }
`;

export const NavBar = styled.nav<MenuProps>`
  width: fit-content;
  position: relative;
  transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  -webkit-backdrop-filter: ${(p: MenuProps) =>
    p.scroll ? 'blur(30px)' : 'none'};
  backdrop-filter: ${(p: MenuProps) => (p.scroll ? 'blur(30px)' : 'none')};
  width: 1500px;
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;

  @media (max-width: 1024px) {
    display: flex;
    height: max-content;
    position: absolute;
    box-shadow: 0 20px 50px ${theme.colors.black}55;
    padding-top: 50px;
    width: 100%;
    top: ${(p: MenuProps) => p.top}px;
    opacity: ${(p: MenuProps) => (p.top === 0 ? '1' : '0')};
    left: 0;
    z-index: 998;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    /* background: ${theme.colors.white}; */
    width: 100%;
  }
`;

export const MenuItem = styled.a`
  padding: 16px 0;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  :link {
    text-decoration: none;
  }

  :visited {
    text-decoration: none;
  }

  :hover {
    text-decoration: none;
  }

  :active {
    text-decoration: none;
  }

  :after {
    position: absolute;
    top: 4px;
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

  @media (max-width: 1024px) {
    padding: 10px 0;
    width: 200px;
    margin: 0 auto;

    :last-child {
      margin-bottom: 10px;
    }
  }
`;

export const Number = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.font.sizes.small};
  margin-right: 8px;
  font-family: ${theme.font.family.sourceCode};
  font-weight: ${theme.font.weight.normal};
  letter-spacing: 0.2px;

  @media (max-width: 1080px) {
    margin-right: 0px;
  }

  @media (max-width: 1024px) {
    font-size: ${theme.font.sizes.medium};
  }
`;

export const Link = styled(Number)`
  color: ${theme.colors.black};
  margin-right: 16px;
`;

export const Hamburger = styled.span`
  display: flex;
  align-items: center;
  /* width: 35px; */
  justify-content: center;
  display: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: flex;
    z-index: 999;
  }
`;
