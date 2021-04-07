import Image from 'next/image'

import {
    AboutMeContainer,
    AboutMeText,
    AboutMeTitle,
} from './AboutMe.styles'

export default function About() {
    return (
        <AboutMeContainer>
            <div>
                <Image
                    height={2000}
                    src="/images/mirjana.png"
                    width={2000}
                />
            </div>
            <div>
                <AboutMeTitle>
                    Mirjana
                    {' '}
                    <br />
                    Turuk-Zubčić
                </AboutMeTitle>
                <AboutMeText>
                    Osjećam radost životnog postojanja, zahvalnost sveopćem Duhu svjetlosti i
                    ljubavi što imam mogućnost kroz homeopatiju (na prirodan način) pomoći
                    ljudima uspostaviti ravnotežu i zdravlje.
                    <br />
                    <br />
                    Kako sam se 2002. godine osobno susrela s homeopatijom,
                    shvatila sam da oslobađanjem svake negativne emocije,
                    svake blokade, postajem sve bliža svom izvornom biću.
                    To putovanje k sebi, uz homeopatiju ,
                    postalo je za mene velika, značajna avantura
                    koja me odvela na studij homeopatije s ciljem :
                    pomoći i drugima „na putu k sebi“.
                    <br />
                    <br />
                    {' '}
                    Tako sam završila Englesku međunarodnu školu klasične homeopatije
                    ( The London International College of Homeopathy )
                    i ubrzo nakon toga Internacionalnu akademiju klasične
                    homeopatije.
                    <br />
                    {' '}
                    ( International Academy of Classical Homeopathy – Greece )
                    <br />
                    <br />
                    Kako bih ispunila svoju životnu misiju, danas,
                    radeći kao homeopat nastojim objediniti klijentov
                    način života, njegove poteškoće i bolest u jednu sveobuhvatnu
                    homeopatsku anamnezu, na osnovu koje propisujem određeni homeopatski
                    lijek koji otapa traume,pomaže podsvijesti da proradi blokade i pruža
                    klijentima mogućnost ostvarenja vlastitih potencijala te ispunjen, zdrav
                    i sretan život.
                    <br />
                    <br />
                    • Član sam Hrvatske udruge homeopata
                    <br />
                    <br />
                    • Imam licencu za samostalni rad HUH-a
                </AboutMeText>
            </div>
        </AboutMeContainer>
    )
}
