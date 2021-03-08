import Head from 'next/head'
import styled from 'styled-components'

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

const ContactContainer = styled.div`
    background: #FBF3EB;
    height: 100%;
    width: 100%;
`
const ContactText = styled.h1`
    color:#000000;
`