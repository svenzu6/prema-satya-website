import Layout from '../components/Layout/Layout'

import { GlobalStyles } from './Styles/_app.styles.js'

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
