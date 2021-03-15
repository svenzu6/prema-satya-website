import Head from 'next/head'

import {
    FaqContainer,
    FaqText,
} from './Styles/faq.styles'

export default function Faq() {
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
