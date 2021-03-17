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
                Postupak homeopatskog lijecenja
            </HomeCardsTitle>
            <HomeCardsWrapper>
                <HomeCard
                    description="
                            Rado cu vam pomoci u lijecenju
                            tijela, uma i emocija
                        "
                    imageName="blob"
                    linkDescription="saznaj vise"
                    linkPage="consultation"
                    title="Uzimanje slucaja"
                />
                <HomeCard
                    description="
                            Homeopatski pripravci su
                            prirodini i koriste se u lijecenju
                            akutnih i kronicnih tegoba
                        "
                    linkDescription="saznaj vise"
                    linkPage="medicine"
                    title="Odabir lijeka"
                />
                <HomeCard
                    description="
                            Homeopatija nudi njezan i efikasan
                            pristup lijecenju
                        "
                    linkDescription="saznaj vise"
                    linkPage="importance"
                    title="Lijecenje"
                />
            </HomeCardsWrapper>
        </HomeCardsRoot>
    )
}