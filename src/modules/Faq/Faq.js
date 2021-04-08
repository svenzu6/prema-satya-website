import HeroTemplate from '../../components/TextTemplate/HeroTemplate'
import TitleTemplate from '../../components/TextTemplate/TitleTemplate'

import {
    FaqContainer,
    FaqContent,
    FaqDescription,
    FaqGrid,
    FaqSubTitle,
    FaqText,
    FaqTitle,
} from './Faq.styles'

export default function Faq() {
    return (
        <FaqContainer>
            <HeroTemplate imageName="lavanda">
                <TitleTemplate>
                    O HOMEOPATIJI
                </TitleTemplate>
            </HeroTemplate>
            <FaqContent>
                <FaqTitle>
                    Što je homeopatija?
                </FaqTitle>
                <br />
                <br />
                <FaqDescription>
                    Homeopatija (zasnovana po načelima dr. Hahnemanna); jedna je od najstarijih i najšire
                    prihvaćenih metoda prirodne medicine koja putem individualnog pristupa klijentu propisuje
                    homeopatske lijekove.
                    Mi ljudi smo duhovno- materijalna bića. Našim
                    fizičkim tijelom vibrira i struji vitalna energija.
                    <br />
                    <br />
                    Bolest, bilo akutna ili kronična, nastaje poremećajem
                    vitalne energije, a simptomi bolesti su poruke našeg
                    tijela o nastaloj energetskoj neravnoteži.
                    Homeopatija je “cjelovita“, što znači da duboko
                    liječi cijelu osobu na svim razinama istovremeno- fizičkoj,
                    emocionalnoj i psihičkoj, a ne samo simptome bolesti te potiče
                    organizam na SAMOISCJELJENJE.
                    <br />
                    <br />
                    Homeopatski ljekovi ne stvaraju ovisnost,
                    ne izazivaju nuspojave, niti su toksični.
                    Danas postoji više pristupa homeopatskom
                    liječenju, a najčešće se koriste klasična,
                    klinička i kompleksna homeopatija.
                </FaqDescription>
                <FaqGrid>
                    <div>
                        <FaqSubTitle>
                            KLASIČNA HOMEOPATIJA
                        </FaqSubTitle>
                        <FaqText>
                            Propisuje se samo jedan lijek u određenom vremenskom razdoblju prema načelu
                            „liječi se osoba, a ne bolest“. Liječe se uzroci,
                            <br />
                            {' '}
                            a ne samo simptomi bolesti.
                            Zanimljiva je za osobe koje žele proširiti svoju svjesnost i
                            spoznati poveznicu svojih zdravstvenih tegoba, osjećaja i rekacija na životne situacije.
                            Ovaj način liječenja koristi visoke i niske potencije homeopatskih lijekova.
                        </FaqText>
                    </div>
                    <div>
                        <FaqSubTitle>
                            KOMPLEKSNA HOMEOPATIJA
                        </FaqSubTitle>
                        <FaqText>
                            U liječenju koristi više od jednog lijeka istovremeno i pripravke koji
                            su mješavina više lijekova , a mogu se kupiti u lijekarnama.
                            {' '}
                            <br />
                            Postoji mogućnost
                            da takav pripravak nema uvijek iscjeljujuće djelovanje jer sadrži više lijekova
                            za određenu bolest, ali ne onaj koji bi prema individualnom ( klasičnom) pristupu
                            klijentu bio odabran.
                        </FaqText>
                    </div>
                    <div>
                        <FaqSubTitle>
                            KLINIČKA HOMEOPATIJA
                        </FaqSubTitle>
                        <FaqText>
                            Liječi bolest i bolesne dijelove tijela.
                            Nije usredotočena na osobu kao cjelinu.
                            <br />
                            Liječnici klasične medicine koji se bave homeopatijom
                            često koriste ovaj pristup liječenja.
                        </FaqText>
                    </div>
                </FaqGrid>
            </FaqContent>
        </FaqContainer>
    )
}
