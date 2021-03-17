import Head from 'next/head'

import {
    ConsultationContainer,
    ConsultationHeroRoot,
    ConsultationText,
    ConsultationTextContainer,
    ConsultationTextDots,
    ConsultationTitle,
    ConsultationTitleSub,
} from './Styles/consultation.styles'

export default function Consultation() {
    return (
        <>
            <Head>
                <title>
                    Konzultacija
                </title>
            </Head>
            <ConsultationContainer>
                <ConsultationHeroRoot>
                    <ConsultationTitle>
                        KAKO IZGLEDA UZIMANJE SLUČAJA?
                    </ConsultationTitle>
                    <ConsultationTitleSub>
                        (homeopatska konzultacija)
                    </ConsultationTitleSub>
                </ConsultationHeroRoot>
                <ConsultationTextContainer>
                    <ConsultationText>
                        Homeopat započinje razgovor u ugodnoj atmosferi
                        kako bi osoba mogla podijeliti svoje osjećaje i iskustva.
                        Za homeopata je svaka osoba jedinstvena i zahtijeva individualizirani pristup.
                        Tokom razgovora, homeopat prikuplja informacije te dobiva „sliku“ pacijenta.
                        Svrha homeopatskog razgovora je doći do totaliteta simptoma na tjelesnoj,
                        emocionalnoj i psihičkoj razini. Homeopat sluša i
                        posmatra klijenta aktivno i empatično. Ako osoba
                        osjeti pažnju i razumijevanje, a ne osudu, pokazati će
                        svoje unutrašnje stanje ili suštinu. Bit nije prikupljanje što više
                        podataka, već prikaz suštine unutrašnje patologije klijenta.
                    </ConsultationText>
                    <ConsultationText>
                        Najčešće intervju ili konzultacija započinje
                        opisivanjem problema ili tegoba.
                        Klijenti većinom kreću opisivanjem tjelesnih problema,
                        iznose svoje liječničke dijagnoze, donose laboratorijske testove,
                        nalaze i sl. Homeopat se u početku zadovoljava tim informacijama
                        iako one nisu od presudne važnosti za propisivanje homeopatskog lijeka,
                        ali su važne za ocjenu ozbiljnosti bolesti, a posebno za prognozu budućnosti
                        zdravstvenog stanja.
                    </ConsultationText>
                    <ConsultationText>
                        Važan je slijed tj. evolucija sadašnjeg patološkog stanja klijenta,
                        točan redoslijed pojave simptoma.Kada se to dogodilo?
                        Je li simptomima ili bolesti prethodio neki veći životni događaj?
                        Što bi mogli biti uzroci za nastajanje simptoma?
                        Uglavnom fokus je na nekoliko glavnih utjecaja koji su
                        mogli dovesti do sadašnjeg pataloškog stanja: – mentalni ili
                        emocinalni šokovi(npr. smrt bliske osobe, odvajanje od voljenih osoba,
                        financijski gubitci, gubitak posla, kriza identiteta i drugi životni stresovi)
                        – svaka ozbiljnija bolest koja je mogla utjecati na opće zdravlje klijenta.
                    </ConsultationText>
                    <ConsultationTextDots>
                        • Svi tretmani koje je osoba primila  tokom
                        života jer terapije često mogu biti supresivne (potiskujuće).
                        Važno je razmotriti primanje lijekova, operacije ,psihoterapije,
                        tireoidni hormoni, kontracepcije, kortikosteroidi, antibiotici, cjepiva i reakcije
                        na njih.
                    </ConsultationTextDots>
                    <ConsultationText>
                        Učestala pitanja:
                    </ConsultationText>
                    <ConsultationTextDots>
                        • Okruženje – osjetljivost na promjene vremena, tolerancija prema temperaturi,
                        vlažnosti zraka, suncu, vjetru, zatvorenom prostoru i sl.
                    </ConsultationTextDots>
                    <ConsultationTextDots>
                        • Vrijeme, sezone – dolazi li do nekih promjena tokom
                        određenih sezona ili doba dana
                    </ConsultationTextDots>
                    <ConsultationTextDots>
                        • Spavanje i snovi- kvaliteta spavanja, položaji spavanja,
                        vrijeme i razlozi buđenja, otkrivanje ili pokrivanje
                        određenih dijelova tijela, obični snovi ili noćne more,
                        somnabulizam, zvukovi tijekom spavanja, itd.
                    </ConsultationTextDots>
                    <ConsultationTextDots>
                        • Ishrana – apetit, žeđ, omiljena hrana, averzije ili pogoršanja
                        od određene hrane.
                    </ConsultationTextDots>
                    <ConsultationTextDots>
                        • Seksualnost- smanjena ili povećana seksualna želja,
                        posebne opsesije vezane za seks
                    </ConsultationTextDots>
                    <ConsultationTextDots>
                        • Tjelesni sistemi – funkcioniranje cirkulatornog,
                        endokrinog, gastrointestinalnog, respiratnornog, kože,
                        menstrualna funkcija i trudnoća.
                    </ConsultationTextDots>
                    <ConsultationTextDots>
                        • Životna energija – kvaliteta životne energije u
                        svakodnevnom životu i različitim okolnostima
                    </ConsultationTextDots>
                    <ConsultationTextDots>
                        • Emocije- strahovi, fobije, iritabilnost,
                        nedostatak samopouzdanja nakon trudnoće.
                    </ConsultationTextDots>
                    <ConsultationTextDots>
                        • Odnosi-  prema voljenim osobama, prijateljima,
                        radnim kolegama
                    </ConsultationTextDots>
                    <ConsultationTextDots>
                        • Mentalna razina- pamćenje, koncentracija,
                        halucinacije, deluzije
                    </ConsultationTextDots>
                    <ConsultationTextDots>
                        • Obiteljska povijest bolesti
                    </ConsultationTextDots>
                    <ConsultationText>
                        Nakon uzimanja cijelog slučaja, homeopat  u
                        završnoj analizi (diferencijacija),
                        proučava lijekove te odabire onaj koji se najviše
                        poklapa sa suštinom totaliteta simptoma klijenta.
                    </ConsultationText>
                </ConsultationTextContainer>
            </ConsultationContainer>
        </>
    )
}
