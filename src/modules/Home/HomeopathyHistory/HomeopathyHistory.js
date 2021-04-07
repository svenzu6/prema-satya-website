import HeroTemplate from '../../../components/TextTemplate/HeroTemplate'
import ParagraphTemplate from '../../../components/TextTemplate/ParagraphTemplate'
import TitleTemplate from '../../../components/TextTemplate/TitleTemplate'

import {
    HomeopathyHistoryContainer,
    HomeopathyHistoryContent,
} from './HomeopathyHistory.styles'

export default function HomeopathyHistory() {
    return (
        <HomeopathyHistoryContainer>
            <HeroTemplate imageName="lavanda">
                <TitleTemplate>
                    POVIJEST HOMEOPATIJE
                </TitleTemplate>
            </HeroTemplate>
            <HomeopathyHistoryContent>
                <ParagraphTemplate>
                    HIPOKRAT (460 – 380.pr.Kr.) poznat kao 'otac medicine' pisao je i govorio o dva pristupa
                    liječenju: – putem suprotnosti (alopatska medicina) i putem sličnosti (homeopatija)
                    <br />
                    <br />
                    PARACELSUS ( 16 st. ) – švicarski filozof i liječnik nastavlja tu ideju
                    liječenja putem sličnosti.
                    <br />
                    <br />
                    Začetnik klasične homeopatije , kakvu danas poznajemo u praktičnoj
                    primjeni je SAMUEL HAHNEMANN (1755- 1843), njemački liječnik i kemičar.
                    Nezadovoljan tadašnjim načinima liječenja (puštanje krvi, pijavice, toksični lijekovi poput žive
                    arsena koji izazivaju štetne nus pojave), krenuo je u istraživanje, pisanje i prevođenje stranih
                    djela u području kemije. Najveće djelo koje je preveo,
                    'Rasprava o ljekovitim travama' dr. Cullena (škotskog liječnika),
                    potaknula je Hahnemanna da ispita koru Peruvijanskog drveta od koje se dobiva kinin,
                    lijek za malariju. Uzeo je 7 grama kinina i razvio simptome slične simptomima malarije
                    koje zapravo kinin i liječi. Simptomi su prestajali, ali svakim ponovnim uzimanjem bi se
                    vraćali. Znači, ako se kinin uzima u velikim količinama, u zdravoj osobi stvara simptome
                    slične onima u malariji, a ako ju uzme osoba oboljela od malarije u malim količinama, ona
                    će se izliječiti.
                    <br />
                    <br />
                    To je bio početak razvoja HOMEOPATIJE, temeljen na glavnom principu “SLIČNO SE LIJEČI SLIČNIM“
                    ( Similia Similibus Curentur ) te je Hahnemann ostatak života proveo usavršavajući taj sustav
                    liječenja.
                    Otkrio je da je bolest unutarnji proces koji se odvija logično i po pravilima, te da osim
                    tjelesnih simptoma uključuje i misli i osjećaje.
                    <br />
                    <br />
                    Počeo je uzimati i druge lijekove koji su se u ono vrijeme koristili i davao ih svojim kolegama,
                    studentima i drugim zdravim ljudima kojima se svidjela njegova teorija.
                    Zapisivao je svaku promjenu koja se događala njegovim dragovoljcima i
                    promatrao kako svaka nova supstanca utječe na um, emocije i tijelo – na cijeli
                    ljudski organizam.
                    <br />
                    <br />
                    Ti detaljnji zapisi kasnije su u homeopatiji prepoznati kao tzv. dokazivanja koje je Hahnemann
                    skupio u knjige lijekova koje su poznate pod imenom Materia Medica.
                    Dolazili su mu bolesni ljudi sa simptomima sličnim onima koji su bili zapisani u
                    dokazivanjima određene supstance i kada bi im dao tu supstancu u vrlo malim količinama
                    bivali su izliječeni.
                    <br />
                    <br />
                    Hahnemann je ovaj način liječenja nazvao HOMEOPATIJA, od grčkih riječi homois=kao ili slično,
                    i pathos=patnja.
                    <br />
                    <br />
                    Kroz svoju homeopatsku praksu Hahnemann se dosjetio da bi homeopatske preparate prvo mogao
                    snažno protresti, a ne samo promiješati kao do sada. Na njegovo veliko iznenađenje i zadovoljstvo
                    rezultati su bili bolji nego prije. Ovom novom metodom pripremanja homeopatskog lijeka bolesni
                    ljudi su se oporavljali puno brže.
                    Te nove metode razrijeđivanja i protresanja nazivamo potenciranjem i dan danas su osnova za
                    pripremanje homeopatskih lijekova koji se pripremaju u homeopatskim ljekarnama prema strogim
                    specifikacijama Dr. Hahnemanna.
                    <br />
                    <br />
                    Nakon opsežne prakse i puno eksperimentiranja Hahnemann je uveo standard za dva mjerila pripreme
                    homeopatskih lijekova. Jedno je tzv. decimalno, a drugo centezimalno mjerilo.
                    Unutar ova dva mjerila, jačina lijeka je zabilježena brojevima. Decimalno mjerilo je označeno
                    slovom X ( npr. 6X, 9X ), a centezimalno sa C ili CH ( npr. C 30, C200 ).
                    Ti brojevi predstavljaju opseg do kojeg su lijekovi razrijeđeni i protrešeni. Što je veći broj,
                    manja je količina krute, materijalne supstance unutar lijeka.
                    <br />
                    <br />
                    Kao posljedica tog procesa, Hahnemann je mogao koristiti minimalne količine različitih supstanci
                    (biljnih, mineralnih i životinjskih ) i nekih otrovnih supstanci, a bez ikakvog otrovnog učinka.
                    Ono što lijek čini homeopatskim nije samo potenciranje, nego činjenica da je lijek propisan na
                    temelju zakona sličnosti.
                    <br />
                    <br />
                    Upravo zbog potenciranja mnogi ljudi nisu prihvatili homeopatiju i pridaju joj
                    status placebo-efekta jer se čini nemoguće da neka supstanca, koja je toliko
                    razrijeđena, može izazvati određenu reakciju izliječenja kod pacijenta.
                    Međutim, to je lako osporiti vrlo uspješnim djelovanjem homeopatskih pripravaka na bebe,
                    malu djecu, životinje i biljke koji nisu podložni sugestijama uma i tzv.placebo-efektu.
                    <br />
                    <br />
                    Popularnost homeopatije je brzo rasla unatoč velikom otporu nekih liječnika i
                    ljekarnika i dan danas raste. Koristi se gotovo u svim zemljama svijeta.
                    Fakulteti i bolnice raširili su se kroz Europu, Sjevernu i Južnu Ameriku i Indiju.
                </ParagraphTemplate>
            </HomeopathyHistoryContent>
        </HomeopathyHistoryContainer>
    )
}