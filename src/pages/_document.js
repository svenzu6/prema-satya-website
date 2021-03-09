import Document, {
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

class CustomDocument extends Document {

    static async getInitialProps(context) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = context.renderPage

        try {
            context.renderPage = () => {
                return originalRenderPage({
                    enhanceApp: (App) => {
                        return (props) => {
                            return sheet.collectStyles(<App {...props} />)
                        }
                    },
                })
            }

            const initialProps = await Document.getInitialProps(context)

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="/fonts/style.css"
                        rel="stylesheet"
                    />
                    <meta
                        content="#febb01"
                        name="theme-color"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}
export default CustomDocument
