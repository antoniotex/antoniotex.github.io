import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 200px;

  @media (max-width: 1024px) {
    padding: 0 5px;
    margin-top: 60px;
  }
`;
