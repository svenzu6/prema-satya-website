import HeroTemplate from '../../components/TextTemplate/HeroTemplate'
import ParagraphTemplate from '../../components/TextTemplate/ParagraphTemplate'
import TitleTemplate from '../../components/TextTemplate/TitleTemplate'

import {
    ContactContainer,
    ContactContent,
    ContactSubtitle,
} from './Contact.styles'

export default function Contact() {
    return (
        <ContactContainer>
            <HeroTemplate imageName="lavanda">
                <TitleTemplate>
                    KONTAKT
                </TitleTemplate>
            </HeroTemplate>
            <ContactContent>
                <ParagraphTemplate>
                    <ContactSubtitle>
                        RADNO VRIJEME:
                    </ContactSubtitle>
                    <br />
                    Pon-Pet:
                    {' '}
                    <br />
                    <br />
                    9.00 - 19.00 h
                    <br />
                    <br />
                    * Upiti na poziv radnim danom od
                    {' '}
                    <ContactSubtitle>
                        15.00-16.00h
                    </ContactSubtitle>
                    <br />
                    <br />
                    * Upiti vikendom samo u hitnim slučajevima
                    <br />
                    <br />
                    Kratke informacije i dogovor termina na mobilni broj:
                    <br />
                    <br />
                    <ContactSubtitle>
                        +385 91 790 8841
                    </ContactSubtitle>
                    (WhatsApp i Viber)
                    <br />
                    <br />
                    *Možete poslati i SMS poruku za dogovor savjetovanja
                </ParagraphTemplate>
            </ContactContent>
        </ContactContainer>
    )
}
