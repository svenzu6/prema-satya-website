import React from 'react'

import {
    HomeCardDescriptions,
    HomeCardHeader,
    HomeCards,
    HomeCardsWrapper,
    HomeCardTitles,
    HomeContainer,
    HomeDescriptionWrapper,
    HomeParagraph,
    HomeSecondParagraph,
    HomeTitle,
} from './HomeStyle'

const Home = () => {
    const textMotion = {
        hover: { opacity: 1 },
        rest: { opacity: 0 },
    }

    return (
        <>
            <HomeContainer>
                <HomeTitle>
                    Lijecenje homeopatijom i
                    {' '}
                    <br />
                    {' '}
                    promicanje svjesnog zivljenja
                </HomeTitle>
                <HomeCardsWrapper>
                    <HomeCards
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <HomeCardHeader>
                            <HomeCardTitles>
                                Savjetovanje
                            </HomeCardTitles>
                        </HomeCardHeader>
                        <HomeDescriptionWrapper
                            animate="rest"
                            initial="rest"
                            whileHover="hover"
                        >
                            <HomeCardDescriptions
                                variants={textMotion}
                            >
                                Rado cu vam pomoci u lijecenju
                                {' '}
                                <p>
                                    tijela,
                                    uma i emocija
                                </p>
                            </HomeCardDescriptions>
                        </HomeDescriptionWrapper>
                    </HomeCards>
                    <HomeCards
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <HomeCardTitles>
                            Lijecenje
                        </HomeCardTitles>
                        <HomeCardDescriptions>
                            Homeopatija nudi njezan i efikasan
                            pristup lijecenju
                        </HomeCardDescriptions>
                    </HomeCards>
                    <HomeCards
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <HomeCardTitles>
                            Lijekovi
                        </HomeCardTitles>
                        <HomeCardDescriptions>
                            Homeopatski pripravci su prirodni i koriste se u lijecenju akutnih i kronicnih tegoba
                        </HomeCardDescriptions>
                    </HomeCards>
                </HomeCardsWrapper>
            </HomeContainer>
            <HomeParagraph>
                <h3>
                    Pomaze kod svih "modernih" zdravstvenih problema
                </h3>
                <p>
                    Homeopatija je "cjelovita", sto znaci
                    da duboko lijeci cijelu osobu na svim razinama istovremeno -
                </p>
                <p>
                    tjelesnim, emocionalnim i psihickim.
                </p>
                {' '}
                <p>
                    Ne lijeci samo simptome bolesti
                    vec potice organizam na SAMOISCJELJENJE.
                </p>
            </HomeParagraph>
            <HomeSecondParagraph>
                <h3>
                    PRIRODAN NACIN LIJECENJA
                </h3>
                <p>
                    Homeopatija je jedna od najstarijih i najsire prihvacenih metoda prirodne
                </p>
                <p>
                    medicine koja putem
                    Individualnog pristupa propisuje klijentu homeopatske lijekove.
                </p>
            </HomeSecondParagraph>
        </>
    )
}
export default Home
