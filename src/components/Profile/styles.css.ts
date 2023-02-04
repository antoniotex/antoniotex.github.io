import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

export const Container = styled.article`
  max-width: 900px;
  margin: 0 50px;

  @media (max-width: 1024px) {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TitlePictureContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const ProfileTitle = styled.h1`
  font-size: ${theme.font.sizes.xxlarge};
  font-weight: ${theme.font.weight.extraBold};
  color: ${theme.colors.primary};

  @media (max-width: 1024px) {
    font-size: ${theme.font.sizes.large};
    white-space: nowrap;
  }

  @media (max-width: 425px) {
    font-size: calc(${theme.font.sizes.medium} + 5px);
  }
`;

export const ProfileSubTitle = styled.h1`
  font-size: ${theme.font.sizes.large};
  margin-top: 40px;

  @media (max-width: 1024px) {
    font-size: ${theme.font.sizes.small};
    margin-top: 0px;
  }
  @media (max-width: 425px) {
    font-size: ${theme.font.sizes.xsmall};
  }
`;

export const ProfilePictureContainer = styled.div`
  position: relative;

  ::before {
    position: absolute;
    content: '';
    background: ${theme.colors.primary};
    width: 100%;
    height: 4px;
    top: -15px;
    right: -15px;
  }

  ::after {
    position: absolute;
    content: '';
    background: ${theme.colors.primary};
    width: 4px;
    height: 100%;
    top: -15px;
    right: -15px;
  }

  @media (max-width: 1024px) {
    width: fit-content;
    margin: 0 auto;
    margin-top: 40px;
  }
`;

export const ProfilePicture = styled.img`
  width: 250px;
  height: 250px;

  @media (max-width: 1024px) {
    width: 60vw;
    height: 60vw;
  }
`;

export const ProfileDescription = styled.p`
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.weight.normal};
  margin-top: 40px;

  @media (max-width: 425px) {
    margin-top: 20px;
    font-size: ${theme.font.sizes.small};
    text-align: justify;
  }
`;

export const ContactButton = styled.button`
  margin-top: 80px;
  background: ${theme.colors.primary};
  border: none;
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.medium};
  padding: 20px 30px;
  border-radius: 16px;
  width: 100%;

  @media (max-width: 1024px) {
    margin-top: 40px;
    font-size: ${theme.font.sizes.small};
    padding: 20px 20px;
    max-width: 400px;
  }

  @media (max-width: 425px) {
    max-width: 100%;
  }
`;
