import {
    FirstConsultationContainer,
    FirstConsultationHeroRoot,
    FirstConsultationText,
    FirstConsultationTextContainer,
    FirstConsultationTextDots,
    FirstConsultationTitle,
    FirstConsultationTitleSub,
} from './FirstConsultation.styles'

export default function FirstConsultation() {
    return (
        <FirstConsultationContainer>
            <FirstConsultationHeroRoot>
                <FirstConsultationTitle>
                    KAKO IZGLEDA UZIMANJE SLUČAJA?
                </FirstConsultationTitle>
                <FirstConsultationTitleSub>
                    (homeopatska konzultacija)
                </FirstConsultationTitleSub>
            </FirstConsultationHeroRoot>
            <FirstConsultationTextContainer>
                <FirstConsultationText>
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
                </FirstConsultationText>
                <FirstConsultationText>
                    Najčešće intervju ili konzultacija započinje
                    opisivanjem problema ili tegoba.
                    Klijenti većinom kreću opisivanjem tjelesnih problema,
                    iznose svoje liječničke dijagnoze, donose laboratorijske testove,
                    nalaze i sl. Homeopat se u početku zadovoljava tim informacijama
                    iako one nisu od presudne važnosti za propisivanje homeopatskog lijeka,
                    ali su važne za ocjenu ozbiljnosti bolesti, a posebno za prognozu budućnosti
                    zdravstvenog stanja.
                </FirstConsultationText>
                <FirstConsultationText>
                    Važan je slijed tj. evolucija sadašnjeg patološkog stanja klijenta,
                    točan redoslijed pojave simptoma.Kada se to dogodilo?
                    Je li simptomima ili bolesti prethodio neki veći životni događaj?
                    Što bi mogli biti uzroci za nastajanje simptoma?
                    Uglavnom fokus je na nekoliko glavnih utjecaja koji su
                    mogli dovesti do sadašnjeg pataloškog stanja: – mentalni ili
                    emocinalni šokovi(npr. smrt bliske osobe, odvajanje od voljenih osoba,
                    financijski gubitci, gubitak posla, kriza identiteta i drugi životni stresovi)
                    – svaka ozbiljnija bolest koja je mogla utjecati na opće zdravlje klijenta.
                </FirstConsultationText>
                <ul>
                    <FirstConsultationTextDots>
                        Svi tretmani koje je osoba primila  tokom
                        života jer terapije često mogu biti supresivne (potiskujuće).
                        Važno je razmotriti primanje lijekova, operacije ,psihoterapije,
                        tireoidni hormoni, kontracepcije, kortikosteroidi, antibiotici, cjepiva i reakcije
                        na njih.
                    </FirstConsultationTextDots>
                </ul>
                <FirstConsultationText>
                    Učestala pitanja:
                </FirstConsultationText>
                <ul>
                    <FirstConsultationTextDots>
                        Okruženje – osjetljivost na promjene vremena, tolerancija prema temperaturi,
                        vlažnosti zraka, suncu, vjetru, zatvorenom prostoru i sl.
                    </FirstConsultationTextDots>
                    <FirstConsultationTextDots>
                        Vrijeme, sezone – dolazi li do nekih promjena tokom
                        određenih sezona ili doba dana
                    </FirstConsultationTextDots>
                    <FirstConsultationTextDots>
                        Spavanje i snovi - kvaliteta spavanja, položaji spavanja,
                        vrijeme i razlozi buđenja, otkrivanje ili pokrivanje
                        određenih dijelova tijela, obični snovi ili noćne more,
                        somnabulizam, zvukovi tijekom spavanja, itd.
                    </FirstConsultationTextDots>
                    <FirstConsultationTextDots>
                        Ishrana – apetit, žeđ, omiljena hrana, averzije ili pogoršanja
                        od određene hrane.
                    </FirstConsultationTextDots>
                    <FirstConsultationTextDots>
                        Seksualnost - smanjena ili povećana seksualna želja,
                        posebne opsesije vezane za seks
                    </FirstConsultationTextDots>
                    <FirstConsultationTextDots>
                        Tjelesni sistemi – funkcioniranje cirkulatornog,
                        endokrinog, gastrointestinalnog, respiratnornog, kože,
                        menstrualna funkcija i trudnoća.
                    </FirstConsultationTextDots>
                    <FirstConsultationTextDots>
                        Životna energija – kvaliteta životne energije u
                        svakodnevnom životu i različitim okolnostima
                    </FirstConsultationTextDots>
                    <FirstConsultationTextDots>
                        Emocije - strahovi, fobije, iritabilnost,
                        nedostatak samopouzdanja nakon trudnoće.
                    </FirstConsultationTextDots>
                    <FirstConsultationTextDots>
                        Odnosi - prema voljenim osobama, prijateljima,
                        radnim kolegama
                    </FirstConsultationTextDots>
                    <FirstConsultationTextDots>
                        Mentalna razina - pamćenje, koncentracija,
                        halucinacije, deluzije
                    </FirstConsultationTextDots>
                    <FirstConsultationTextDots>
                        Obiteljska povijest bolesti
                    </FirstConsultationTextDots>
                </ul>
                <FirstConsultationText>
                    Nakon uzimanja cijelog slučaja, homeopat  u
                    završnoj analizi (diferencijacija),
                    proučava lijekove te odabire onaj koji se najviše
                    poklapa sa suštinom totaliteta simptoma klijenta.
                </FirstConsultationText>
            </FirstConsultationTextContainer>
        </FirstConsultationContainer>
    )
}