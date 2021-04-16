import HeroTemplate from '../../components/TextTemplate/HeroTemplate'
import ParagraphTemplate from '../../components/TextTemplate/ParagraphTemplate'
import TitleTemplate from '../../components/TextTemplate/TitleTemplate'

import {
    UseOfContainer,
    UseOfContent,
} from './UseOf.styles'

export default function UseOf() {
    return (
        <UseOfContainer>
            <HeroTemplate imageName="lavanda">
                <TitleTemplate>
                    PRIMJENA HOMEOPATIJE
                </TitleTemplate>
            </HeroTemplate>
            <UseOfContent>
                <ParagraphTemplate>
                    Gdje se primjenjuje homeopatija?
                    <br />
                    <ul>
                        <li>
                            Tegobe kod djece
                        </li>
                        <li>
                            Kožne bolesti
                        </li>
                        <li>
                            Nesanica
                        </li>
                        <li>
                            Trema
                        </li>
                        <li>
                            Tegobe na putovanju
                        </li>
                        <li>
                            Probavne tegobe
                        </li>
                        <li>
                            Koštano – mišićni sustav
                        </li>
                        <li>
                            Povišena temperatura
                        </li>
                        <li>
                            Tegobe kod životinja
                        </li>
                        <li>
                            Alergije
                        </li>
                        <li>
                            Dječje zarazne bolesti
                        </li>
                        <li>
                            Trudnoća I porod
                        </li>
                        <li>
                            Mokraćne Tegobe
                        </li>
                        <li>
                            Srce i krvožilni sustav
                        </li>
                        <li>
                            Ozljede i nezgode
                        </li>
                        <li>
                            Infektivne bolesti

                        </li>
                        <li>
                            Autoimune bolesti
                        </li>
                        <li>
                            Tegobe kod dojenčadi
                        </li>
                        <li>
                            Operacije
                        </li>
                        <li>
                            Reproduktivni sustav
                        </li>
                        <li>
                            Emocionalne i psihičke tegobe
                        </li>
                    </ul>
                    <br />
                    ZNAKOVI ISCJELJENJA
                    <br />
                    <ul>
                        <li>
                            Viša razina energije
                        </li>
                        <li>
                            Povećan otpor na stres
                        </li>
                        <li>
                            Bolje raspoloženje
                        </li>
                        <li>
                            Bolje samopouzdanje
                        </li>
                        <li>
                            Bolji stav prema obavezama (posao, učenje)
                        </li>
                        <li>
                            Pozitivniji pogled na život
                        </li>
                        <li>
                            Prekidanje loših i stvaranje novih veza
                        </li>
                        <li>
                            Bolji odnosi s prijateljima, kolegama, obitelji
                        </li>
                        <li>
                            Kreativnost
                        </li>
                    </ul>
                    <br />
                    Homeopatsko pogoršanje – nekada se stanje tijela pogorša.
                    Općenito, pogoršanje je ili kratkotrajno i bolno, ili sporo, manje dramatično i dugotrajnije.
                    To pogoršanje često je posljedica eliminacije toksina putem tjelesnog sustava eliminacije
                    (učestalija stolica, češće mokrenje), putem kože u obliku osipa,
                    prištića, čireva , obilnijeg znojenja , temperature ; putem nosa kao kihanje,
                    prehlade ili putem usta kao povraćanje.

                    Privremeno pogoršanje ne tumači se kao nus pojava,
                    nego kao znak da tijelo radi na vlastitom iscjeljenju.

                    Kratak privremeni povratak starih simptoma dobar je znak
                    i pripada kategoriji znakova iscjeljenja.
                </ParagraphTemplate>
            </UseOfContent>
        </UseOfContainer>

    )
}
