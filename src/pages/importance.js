import Head from 'next/head'

import {
    ImportanceContainer,
    ImportanceText,
} from './Styles/importance.styles'

export default function Importance() {
    return (
        <>
            <Head>
                <title>
                    Importance
                </title>
            </Head>
            <ImportanceContainer>
                <ImportanceText>
                    ZAŠTO JE VAŽNO DOĆI NA PRVU KONTROLU?
                    Nakon uzimanja slučaja (prve homeopatske konzultacije) i propisivanja
                    prvog homeopatskog lijeka, od velike je važnosti  dogovaranje termina prve kontrole.
                    Idealan vremenski razmak bio bi dva mjeseca.
                    Kako je to klijentima prilično dugo razdoblje za čekanje,
                    pogotovo ako nema baš nikakve reakcije,
                    preporučuje se razdoblje od jednog mjeseca nakon prvog uzimanja lijeka.
                    Zašto je važna prva kontrola?
                    Promjene, bilo pozitivne ili negativne, uglavnom se odviju u toku jednog mjeseca.
                    Homeopat tada na prvoj kontroli mora procijeniti klijentovo stanje prikupljajući
                    slijedeće informacije:
                    Kakvo je opće stanje klijenta? Je li se zdravlje popravilo, pogoršalo ili je
                    ostalo nepromijenjeno nakon uzimanja lijeka?
                    Energija ( ima li klijent ima više energije i motivacije ili je
                    energija smanjena ili nepromijenjena?)
                    Glavne tjelesne poteškoće ( jesu li se dogodile promjene u glavnim tjelesnim problemima
                    zbog kojih je klijent i došao na homeopatsku konzultaciju? )
                    Psihičko i emocionalno stanje ( je li na emocionalnoj i psihičkoj razini došlo do
                    promjena? Čak i najmanje promjene na ovim razinama pokazuju djelovanje lijeka. )
                    Provjera starih simptoma ( homeopat prolazi kroz bilješke sa prve konzultacije i
                    provjerava simptom po simptom da bi ustanovio jesu li se promjene dogodile na bolje ili gore ? )
                    Novi simptomi ( jesu li se pojavili novi simptomi ili možda simptomi iz prošlosti? )
                    Na prvoj kontroli se uspostavlja bolji i otvoreniji odnos “klijent – homeopat”  što
                    omogućuje dublji uvid u samu „SRŽ“ slučaja.
                    Na kraju kontrole homeopat na osnovu  prethodnih informacija donosi određene
                    zaključke i odluke:
                    Kakva je bila reakcija na prvi lijek , te
                    je li potrebno dati novi lijek ili je potrebno još čekati sa ponavljanjem
                    ili propisivanjem novog lijeka.
                    Bilo bi čak poželjno da klijenti sa kroničnim zdravstvenim problemima  vode kratke bilješke
                    redoslijedom što im se sve događalo od vremena kada su uzeli prvi puta homeopatski lijek što
                    bi olakšalo i njima i homeopatu vođenje prve kontrole.
                </ImportanceText>
            </ImportanceContainer>
        </>
    )
}
