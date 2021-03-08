import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

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
                tjelesnim, emocionalnim i psihickim.
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

const HomeContainer = styled.div`
    background: #F7E7D7;
    height: 100%;
    width: 100%;
    display:flex,column;
    text-align:center;
`
const HomeTitle = styled.h1`
    color:#000000;
    font-family:"Karla";
    font-size:xx-large;
    padding-bottom:1cm;
    padding-top:0.5cm;
    padding-left:0.3cm;
    margin-bottom:1cm;        
`
const HomeCardsWrapper = styled(motion.div)`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`

const HomeCards = styled(motion.div)`
    background-color:#FCD3BF;
    border-radius:25px;
    width:35vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:10px;
    height:50vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    font-family:"Karla";
    margin-bottom:50px;
`
const HomeCardHeader = styled(motion.div)``

const HomeCardTitles = styled(motion.h2)`
    color:#000000;
    font-family:"Rubik";
`
const HomeDescriptionWrapper = styled(motion.div)`

`
const HomeCardDescriptions = styled(motion.p)`
color:#000000;
text-align:center;
`

const HomeParagraph = styled.div`
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#EDC3AF;
    font-family:"Karla";
    font-size:xx-large;
    padding-top:2cm;
    padding-bottom:3cm;
`
const HomeSecondParagraph = styled.div`
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#000000;
    font-family:"Karla";
    font-size:xx-large;
    padding-top:2cm;
    padding-bottom:3cm;
`
