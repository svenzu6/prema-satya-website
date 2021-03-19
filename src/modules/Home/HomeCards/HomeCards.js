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
                            Rado cu vam pomoci u lijecenju
                            tijela, uma i emocija
                        "
                    imageName="blob"
                    linkDescription="saznaj više"
                    linkPage="prva-konzultacija"
                    title="Uzimanje slucaja"
                />
                <HomeCard
                    description="
                            Homeopatski pripravci su
                            prirodini i koriste se u lijecenju
                            akutnih i kronicnih tegoba
                        "
                    linkDescription="saznaj više"
                    linkPage="lijekovi"
                    title="Odabir lijeka"
                />
                <HomeCard
                    description="
                            Homeopatija nudi njezan i efikasan
                            pristup lijecenju
                        "
                    linkDescription="saznaj više"
                    linkPage="prva-kontrola"
                    title="Lijecenje"
                />
            </HomeCardsWrapper>
        </HomeCardsRoot>
    )
}