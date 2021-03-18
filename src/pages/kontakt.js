import Head from 'next/head'

import {
    ContactContainer,
    ContactText,
} from './Styles/kontakt.styles'

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
                    Kratke informacije i dogovor termina
                    *Možete poslati i SMS poruku za dogovor savjetovanja
                    *Vikendom zvati samo u hitnim slučajevima
                    Mobitel
                    091 790 8841
                    Upiti na Poziv Radnim danom 14-15
                    Prema Satya
                    RADNO VRIJEME
                    Pon-Pet 9-19
                    Po potrebi klijenata
                    Za vikend upitati
                    na mobitel 15-16h
                </ContactText>
            </ContactContainer>
        </>
    )
}
