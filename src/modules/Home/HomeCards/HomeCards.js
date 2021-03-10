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
                Sto vam homeopatija nudi?
            </HomeCardsTitle>
            <HomeCardsWrapper>
                <HomeCard
                    description="
                            Rado cu vam pomoci u lijecenju
                            tijela, uma i emocija
                        "
                    title="Savjetovanje"
                />
                <HomeCard
                    description="
                            Homeopatski pripravci su
                            prirodini i koriste se u lijecenju
                            akutnih i kronicnih tegoba
                        "
                    title="Lijekovi"
                />
                <HomeCard
                    description="
                            Homeopatija nudi njezan i efikasan
                            pristup lijecenju
                        "
                    title="Lijecenje"
                />
            </HomeCardsWrapper>
        </HomeCardsRoot>
    )
}