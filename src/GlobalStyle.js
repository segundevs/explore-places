import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({theme}) => theme.colors.bg};
    color: ${({theme}) => theme.colors.color};
    overflow-x: hidden;
  }
`

export default GlobalStyle