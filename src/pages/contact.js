import Head from 'next/head'

import {
    ContactContainer,
    ContactText,
} from './Styles/contact.styles'

export default function Contact() {
    return (
        <>
            <Head>
                <title>
                    Kontakt
                </title>
            </Head>
            <ContactContainer>
                <ContactText>
                    Kontakt
                </ContactText>
            </ContactContainer>
        </>
    )
}
