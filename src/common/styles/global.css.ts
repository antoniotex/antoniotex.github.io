import { createGlobalStyle } from 'styled-components';
import { theme } from './theme.css';

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
    color: ${theme.colors.black};
    max-width: 1500px;
    margin: 0 auto;
    background-image: url('src/common/images/background/lines_bg.svg');
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
