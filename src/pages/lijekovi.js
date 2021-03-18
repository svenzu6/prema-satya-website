import Head from 'next/head'

import {
    MedicineContainer,
    MedicineText,
} from './Styles/lijekovi.styles'

export default function Medicine() {
    return (
        <>
            <Head>
                <title>
                    Medicine
                </title>
            </Head>
            <MedicineContainer>
                <MedicineText>
                    HOMEOPATSKI LIJEKOVI
                    Homeopatski lijekovi su biljnog, mineralnog i životinjskog porijekla. Svaki
                    homeopatski lijek je razrijeđen i potenciran. Potenciranje se sastoji iz dva procesa:
                    – 1. Razrjeđivanja odabrane tvari vodom i li alkoholom
                    – 2. Snažnog tresenja ili ritmičkog udaranja bočicom o tvrdu podlogu.
                    Svrha razrjeđivanja je da se izgube eventualna toksična svojstva
                    jer se tako smanjuje materijalni udio tvari u otopini
                    ( npr. lijekovi od žive, olova, arsena),
                    a energetski udio se pojačava tresenjem
                    ili udaranjem.Ponavljanjem razrjeđivanja
                    određene tvari u vodi više ne ostane niti
                    jedna molekula te iste početne tvari, ali
                    tresenjem ili udaranjem, u vodi ostaje njen
                    energetski zapis koji pomaže organizmu u samoiscjeljenju.
                    Što je neka tvar tako više puta potencirana , homeopatski
                    pripravak postaje „jači“ što znači da dublje i dugoročnije djeluje.
                    Upute za lijekove:
                    • Homeopatske lijekove uzeti plastičnom žličicom, nemojte dirati prstima
                    • Homeopatske lijekove nemojte izlagati direktno suncu, mobitelima, TV-ima,
                    računalima ( svemu što zrači )
                    • Granulice rastopiti pod jezikom i 10-15 minuta PRIJE i POSLIJE upotrebe
                    ne jesti , ne piti, ne prati zube
                    • Prevelika količina crne kave, jaki čajevi ( kamilica, menta )
                    i kamfor neutraliziraju homeopatske lijekove ( preporučeno izbjegavati
                    tokom homeopatskog liječenja)
                    • Dosadašnju terapiju propisanu od vašeg liječnika možete smanjiti
                    ili prekinuti SAMO uz konzultaciju sa svojim liječnikom
                    • Ne uzimati homeopatske lijekove svojevoljno
                    • Mjesec dana nakon prve homeopatske obrade, obavezna je kontrola
                    • Zabilježite ili zapamtite sve promjene ili
                    reakcije iza uzimanja homeopatskog lijeka da bi ih mogli reči svome homeopatu
                </MedicineText>
            </MedicineContainer>
        </>
    )
}
