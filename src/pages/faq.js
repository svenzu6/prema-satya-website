import Head from 'next/head'

import {
    FaqContainer,
    FaqText,
} from './Styles/faq.styles'

export default function About() {
    return (
        <>
            <Head>
                <title>
                    FAQ
                </title>
            </Head>
            <FaqContainer>
                <FaqText>
                    FAQ
                </FaqText>
            </FaqContainer>
        </>
    )
}
