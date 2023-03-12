import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Trirong", serif;
  }
  body {
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.textColor};
  } 
`
