import HeroTemplate from '../../components/TextTemplate/HeroTemplate'
import ParagraphTemplate from '../../components/TextTemplate/ParagraphTemplate'
import TitleTemplate from '../../components/TextTemplate/TitleTemplate'

import { CheckUpContainer } from './CheckUp.styles'

export default function CheckUp() {
    return (
        <CheckUpContainer>
            <HeroTemplate imageName="lavanda">
                <TitleTemplate>
                    ZAŠTO JE VAŽNA PRVA KONTROLA?
                </TitleTemplate>
            </HeroTemplate>
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
                <br />
                • Kakvo je opće stanje klijenta? Je li se zdravlje popravilo, pogoršalo ili je
                ostalo nepromijenjeno nakon uzimanja lijeka?
                <br />
                <br />
                • Energija ( ima li klijent ima više energije i motivacije ili je
                energija smanjena ili nepromijenjena?)
                <br />
                <br />
                • Glavne tjelesne poteškoće ( jesu li se dogodile promjene u glavnim tjelesnim problemima
                zbog kojih je klijent i došao na homeopatsku konzultaciju? )
                <br />
                <br />
                • Psihičko i emocionalno stanje ( je li na emocionalnoj i psihičkoj razini došlo do
                promjena? Čak i najmanje promjene na ovim razinama pokazuju djelovanje lijeka. )
                <br />
                <br />
                • Provjera starih simptoma ( homeopat prolazi kroz bilješke sa prve konzultacije i
                provjerava simptom po simptom da bi ustanovio jesu li se promjene dogodile na bolje
                ili gore ? )
                <br />
                <br />
                • Novi simptomi ( jesu li se pojavili novi simptomi ili možda simptomi iz prošlosti? )
                <br />
                <br />
                Na prvoj kontroli se uspostavlja bolji i otvoreniji odnos “klijent – homeopat”  što
                omogućuje dublji uvid u samu „SRŽ“ slučaja.
                <br />
                <br />
                Na kraju kontrole homeopat na osnovu  prethodnih informacija donosi određene
                zaključke i odluke:
                <br />
                <br />
                • Kakva je bila reakcija na prvi lijek , te
                je li potrebno dati novi lijek ili je potrebno još čekati sa ponavljanjem
                ili propisivanjem novog lijeka.
                <br />
                <br />
                Bilo bi čak poželjno da klijenti sa kroničnim zdravstvenim problemima
                vode kratke bilješke
                redoslijedom što im se sve događalo od vremena kada su uzeli prvi puta homeopatski lijek što
                bi olakšalo i njima i homeopatu vođenje prve kontrole.
            </ParagraphTemplate>
        </CheckUpContainer>
    )
}
