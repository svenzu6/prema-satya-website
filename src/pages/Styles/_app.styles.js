import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
  }

  a {
    color: black;
    text-decoration: none;
    :visited {
      color: black;
    }
  }

  p {
    margin: 0;
  }

  h1 {
    margin: 0
  }

  #__next {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
`