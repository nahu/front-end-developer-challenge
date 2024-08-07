import { createGlobalStyle } from 'styled-components';
import backgroundImage from '@/assets/images/talent-calc-bg.png';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background-image: url(${backgroundImage});
    background-size: auto;
    background-repeat: repeat;
    padding-bottom: 40px;
  }
`;

export default GlobalStyle;
