import { createGlobalStyle } from 'styled-components';
import { theme } from './theme.css';
import bg from '../images/background/lines_bg.svg';
import bgDark from '../images/background/lines_bg-dark.svg';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: ${theme.font.family.roboto};
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    padding: 0 40px;
    color: ${({ theme }) => theme.colors.text};
    max-width: 1500px;
    margin: 0 auto;
    background-image: url(${(p: any) =>
      p.theme.title == 'dark' ? bgDark : bg});

    @media (max-width: 1024px) {
        padding: 0 0;
    }
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
