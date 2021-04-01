import { HomeCard } from '../HomeCard/HomeCard'

import {
    HomeCardsRoot,
    HomeCardsWrapper,
} from './HomeCards.styles'

export const HomeCards = () => {
    return (
        <HomeCardsRoot>
            <HomeCardsWrapper>
                <HomeCard
                    description="
                            Pomoći ću vam u liječenju
                            tijela, uma i emocija
                        "
                    imageName="homeopatska-konzultacija"
                    linkDescription="saznajte više"
                    linkPage="prva-konzultacija"
                    title="Uzimanje slučaja"
                />
                <HomeCard
                    description="
                            Homeopatski pripravci su
                            prirodni i koriste se u liječenju
                            akutnih i kroničnih tegoba
                        "
                    imageName="homeopatski-lijekovi"
                    linkDescription="saznajte više"
                    linkPage="lijekovi"
                    title="Odabir lijeka"
                />
                <HomeCard
                    description="
                            Homeopatija nudi nježan i efikasan
                            pristup liječenju
                        "
                    imageName="homeopatsko-lijecenje"
                    linkDescription="saznajte više"
                    linkPage="prva-kontrola"
                    title="Liječenje"
                />
            </HomeCardsWrapper>
        </HomeCardsRoot>
    )
}