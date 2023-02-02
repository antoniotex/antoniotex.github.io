import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

export const Container = styled.article`
  /* border: 1px solid green; */
  max-width: 900px;
  margin: 0 50px;
`;

export const TitlePictureContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
`;

export const ProfileTitle = styled.h1`
  font-size: ${theme.font.sizes.xxlarge};
  font-weight: ${theme.font.weight.extraBold};
  color: ${theme.colors.primary};
`;

export const ProfileSubTitle = styled.h1`
  font-size: ${theme.font.sizes.large};
  margin-top: 40px;
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
`;

export const ProfilePicture = styled.img`
  width: 250px;
  height: 250px;
  right: 40px;
  top: -100px;
`;

export const ProfileDescription = styled.p`
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.weight.normal};
  margin-top: 40px;
`;

export const ContactButton = styled.button`
  margin-top: 80px;
  background: ${theme.colors.primary};
  border: none;
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.medium};
  padding: 20px 30px;
  border-radius: 16px;
`;
