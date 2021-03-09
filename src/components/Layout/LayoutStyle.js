import styled, { createGlobalStyle } from 'styled-components'

export const LayoutRoot = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
`

export const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    scroll-behavior:smooth;
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
    display:flex;
    height: 100%;
    flex-direction: column;
  }
`
export const Root = styled.div`
  width: 100%;
  height: 100%;
`