import styled from 'styled-components';
import { theme } from '../../common/styles/theme.css';

export const Container = styled.form`
  width: 100vw;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-height: 90vh;

  @media (max-width: 425px) {
    /* padding: 0px 0px 0px 0px; */
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.sizes.large};
  text-align: center;
  margin-bottom: 30px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: ${theme.font.sizes.medium};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: ${theme.font.sizes.medium};
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${theme.font.weight.semiBold};
  font-size: ${theme.font.sizes.xxsmall};
  background: ${({ theme }) => theme.colors.secondary};
  width: fit-content;
  padding: 0 5px;
  position: absolute;
  left: 15px;
  top: -8px;
  white-space: nowrap;
`;

export const Input = styled.input`
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  height: 40px;
  border-radius: 10px;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${theme.font.sizes.xsmall};
  background: none;
  background-color: none;
  padding: 5px;

  :focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  height: 100px;
  max-width: 100%;
  min-width: 100%;
  max-height: 60vh;
  border-radius: 10px;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${theme.font.sizes.xsmall};
  padding: 8px 5px;
  background: none;
  background-color: none;

  :focus {
    outline: 1.5px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${theme.font.sizes.xxsmall};
  margin-left: 4px;
  margin-top: 2px;
`;

export const SubmitButton = styled.button`
  width: fit-content;
  border: none;
  padding: 15px 40px;
  font-size: ${theme.font.sizes.xsmall};
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 40px;
  margin: 0 auto;
  margin-top: 20px;

  :disabled {
    background: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SubmittedContainer = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const SubmittedTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const SubmittedDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  max-width: 300px;
  font-size: ${theme.font.sizes.xsmall};
  margin-top: 20px;
  margin-bottom: 20px;
`;
