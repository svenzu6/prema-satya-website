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
                Lijecenje homeopatijom i promicanje svjesnog zivljenja
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
                            Homeopatija nudi njezan i efikasan
                            pristup lijecenju
                        "
                    title="Lijecenje"
                />
                <HomeCard
                    description="
                            Homeopatiski privaci su
                            prirodini i koriste se u liencenju
                            aktualnih i kornicnih tegoba
                        "
                    title="Lijekovi"
                />
            </HomeCardsWrapper>
        </HomeCardsRoot>
    )
}