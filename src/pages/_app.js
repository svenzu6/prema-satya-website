import { GlobalStyles } from '../components/_app.styles.js'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
