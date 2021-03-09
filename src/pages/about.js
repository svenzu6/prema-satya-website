import Head from 'next/head'

import {
    AboutContainer,
    AboutText,
} from './Styles/about.styles'

export default function About() {
    return (
        <>
            <Head>
                <title>
                    O meni
                </title>
            </Head>
            <AboutContainer>
                <AboutText>
                    O meni
                </AboutText>
            </AboutContainer>
        </>
    )
}
