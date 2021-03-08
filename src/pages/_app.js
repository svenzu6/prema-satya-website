import styled, { createGlobalStyle } from 'styled-components'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
    return (

        <Root>
            <GlobalStyles />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Root>
    )
}

const GlobalStyles = createGlobalStyle`
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
  #__next {
    display:flex;
    height: 100%;
    flex-direction: column;
  }
`

const Root = styled.div`
  width: 100%;
  height: 100%;
`

export default MyApp
