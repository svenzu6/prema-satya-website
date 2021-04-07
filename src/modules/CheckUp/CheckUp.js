import HeroTemplate from '../../components/TextTemplate/HeroTemplate'
import ParagraphTemplate from '../../components/TextTemplate/ParagraphTemplate'
import TitleTemplate from '../../components/TextTemplate/TitleTemplate'

import {
    CheckUpContainer,
    CheckUpContent,
} from './CheckUp.styles'

export default function CheckUp() {
    return (
        <CheckUpContainer>
            <HeroTemplate imageName="lavanda">
                <TitleTemplate>
                    ZAŠTO JE VAŽNA PRVA KONTROLA?
                </TitleTemplate>
            </HeroTemplate>
            <CheckUpContent>
                <ParagraphTemplate>
                    Nakon uzimanja slučaja (prve homeopatske konzultacije) i propisivanja
                    prvog homeopatskog lijeka, od velike je važnosti  dogovaranje termina prve kontrole.
                    Idealan vremenski razmak su dva mjeseca.
                    <br />
                    <br />
                    Mnogima je to prilično dugo razdoblje za čekanje,
                    pogotovo ako nema nikakvih reakcija,
                    tako da se preporučuje razdoblje od jednog mjeseca nakon prvog uzimanja lijeka.
                    <br />
                    <br />
                    Zašto je važna prva kontrola?
                    <br />
                    Promjene, bilo pozitivne ili negativne, uglavnom se odviju tokom jednog mjeseca.
                    Homeopat tada na prvoj kontroli mora procijeniti klijentovo stanje prikupljajući
                    slijedeće informacije:
                    <br />
                    <ul>
                        <li>
                            Kakvo je opće stanje klijenta? Je li se zdravlje popravilo, pogoršalo ili je
                            ostalo nepromijenjeno nakon uzimanja lijeka?
                        </li>
                        <br />
                        <br />
                        <li>
                            Energija (ima li klijent ima više energije i motivacije ili je
                            energija smanjena ili nepromijenjena?)
                        </li>
                        <br />
                        <br />
                        <li>
                            Glavne tjelesne poteškoće (jesu li se dogodile promjene u glavnim tjelesnim problemima
                            zbog kojih je klijent i došao na homeopatsku konzultaciju? )
                        </li>
                        <br />
                        <br />
                        <li>
                            Psihičko i emocionalno stanje (je li na emocionalnoj i psihičkoj razini
                            došlo do
                            promjena? Čak i najmanje promjene na ovim razinama
                            pokazuju djelovanje lijeka.)
                        </li>
                        <br />
                        <br />
                        <li>
                            Provjera starih simptoma (homeopat prolazi kroz bilješke sa prve konzultacije i
                            provjerava simptome kako bi ustanovio jesu li
                            nastale promjene bolje
                            ili gore)
                        </li>
                        <br />
                        <br />
                        <li>
                            Novi simptomi (jesu li se pojavili novi simptomi ili možda simptomi
                            iz prošlosti?)
                        </li>
                    </ul>
                    <br />
                    Na prvoj kontroli se uspostavlja bolji i otvoreniji odnos “klijent – homeopat”  što
                    omogućuje dublji uvid u samu „SRŽ“ slučaja.
                    <br />
                    <br />
                    Na kraju kontrole homeopat na osnovu  prethodnih informacija donosi određene
                    zaključke i odluke:
                    <ul>
                        <li>
                            Kakva je reakcija na prvi lijek?
                        </li>
                        <li>
                            Treba li promijeniti lijek?
                        </li>
                        <li>
                            Treba li još čekati sa ponavljanjem
                            ili propisivanjem novog lijeka?
                        </li>
                    </ul>
                    <br />
                    Preporuka za klijente sa kroničnim zdravstvenim problemima je da
                    vode kratke bilješke
                    redoslijedom događaja od vremena kada su prvi puta uzeli homeopatski lijek zbog
                    realnijeg prikaza stanja na prvoj kontroli.
                </ParagraphTemplate>
            </CheckUpContent>
        </CheckUpContainer>
    )
}
