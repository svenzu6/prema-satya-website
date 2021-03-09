import Head from 'next/head'

import {
    ContactContainer,
    ContactText,
} from './Styles/contactStyle'

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
