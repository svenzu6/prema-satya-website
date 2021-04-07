import HeroTemplate from '../../components/TextTemplate/HeroTemplate'
import ParagraphTemplate from '../../components/TextTemplate/ParagraphTemplate'
import TitleTemplate from '../../components/TextTemplate/TitleTemplate'

import {
    MedsContainer,
    MedsContent,
} from './Meds.styles'

export default function Meds() {
    return (
        <MedsContainer>
            <HeroTemplate imageName="lavanda">
                <TitleTemplate>
                    HOMEOPATSKI LIJEKOVI
                </TitleTemplate>
            </HeroTemplate>
            <MedsContent>
                <ParagraphTemplate>
                    Homeopatski lijekovi su biljnog, mineralnog ili životinjskog porijekla. Svaki
                    homeopatski lijek je razrijeđen i potenciran. Potenciranje nastaje iz dva procesa:
                    <br />
                    <br />
                    <ul>
                        <li>
                            Razrjeđivanja odabrane tvari vodom ili alkoholom
                        </li>
                        <br />
                        <br />
                        <li>
                            Snažnog tresenja ili ritmičkog udaranja bočicom o tvrdu podlogu.
                        </li>
                    </ul>
                    <br />
                    <br />
                    Svrha razrjeđivanja je neutralizacija eventualnih toksičnih svojstava
                    jer se tako smanjuje materijalni udio tvari u otopini
                    ( npr. lijekovi od žive, olova, arsena),
                    a energetski udio se pojačava tresenjem
                    ili udaranjem. Ponavljanjem razrjeđivanja
                    određene tvari u vodi više ne ostane niti
                    jedna molekula te iste početne tvari, ali
                    tresenjem ili udaranjem, u vodi ostaje njen
                    energetski zapis koji pomaže organizmu u samoiscjeljenju.
                    Što je neka tvar tako više puta potencirana , homeopatski
                    pripravak postaje „jači“ što znači da dublje i dugoročnije djeluje.
                    <br />
                    <br />
                    Upute za lijekove:
                    <ul>

                        <li>
                            Homeopatske lijekove uzeti plastičnom žličicom, nemojte dirati prstima
                        </li>
                        <br />
                        <li>
                            {' '}
                            Homeopatske lijekove nemojte izlagati direktno suncu, mobitelima, TV-ima,
                            računalima ( svemu što zrači )
                        </li>
                        <br />
                        <li>
                            Granulice rastopiti pod jezikom i 10-15 minuta PRIJE i POSLIJE upotrebe
                            ne jesti , ne piti, ne prati zube
                        </li>
                        <br />
                        <li>
                            Prevelika količina crne kave, jaki čajevi ( kamilica, menta )
                            i kamfor neutraliziraju homeopatske lijekove ( preporučeno izbjegavati
                            tokom homeopatskog liječenja)
                        </li>
                        <br />
                        <li>
                            Dosadašnju terapiju propisanu od vašeg liječnika možete smanjiti
                            ili prekinuti SAMO uz konzultaciju sa svojim liječnikom
                        </li>
                        <br />
                        <li>
                            Ne uzimati homeopatske lijekove svojevoljno
                        </li>
                        <br />
                        <li>
                            Mjesec dana nakon prve homeopatske obrade, obavezna je kontrola
                        </li>
                        <br />
                        <li>
                            Zabilježite ili zapamtite sve promjene ili
                            reakcije iza uzimanja homeopatskog lijeka da bi ih mogli opisati
                            svome homeopatu
                        </li>
                    </ul>
                </ParagraphTemplate>
            </MedsContent>
        </MedsContainer>
    )
}
