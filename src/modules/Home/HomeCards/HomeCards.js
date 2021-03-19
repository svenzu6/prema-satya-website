import { HomeCard } from '../HomeCard/HomeCard'

import {
    HomeCardsRoot,
    HomeCardsTitle,
    HomeCardsWrapper,
} from './HomeCards.styles'

export const HomeCards = () => {
    return (
        <HomeCardsRoot>
            <HomeCardsTitle>
                Postupak Homeopatskog
                <br />
                {' '}
                Liječenja
            </HomeCardsTitle>
            <HomeCardsWrapper>
                <HomeCard
                    description="
                            Pomoći ću vam u liječenju
                            tijela, uma i emocija
                        "
                    imageName="blob"
                    linkDescription="saznaj više"
                    linkPage="prva-konzultacija"
                    title="Uzimanje slučaja"
                />
                <HomeCard
                    description="
                            Homeopatski pripravci su
                            prirodni i koriste se u liječenju
                            akutnih i kroničnih tegoba
                        "
                    linkDescription="saznaj više"
                    linkPage="lijekovi"
                    title="Odabir lijeka"
                />
                <HomeCard
                    description="
                            Homeopatija nudi nježan i efikasan
                            pristup liječenju
                        "
                    linkDescription="saznaj više"
                    linkPage="prva-kontrola"
                    title="Liječenje"
                />
            </HomeCardsWrapper>
        </HomeCardsRoot>
    )
}