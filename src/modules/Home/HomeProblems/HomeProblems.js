import Image from 'next/image'

import {
    HomeProblemsDescription,
    HomeProblemsRoot,
    HomeProblemsTitle,
    HomeProblemsTitleWrapper,
} from './HomeProblems.styles'

export const HomeProblems = () => {
    return (
        <HomeProblemsRoot>
            <HomeProblemsTitleWrapper>
                <HomeProblemsTitle>
                    Pomaže kod svih
                    {' '}
                    <br />
                    'modernih' problema
                </HomeProblemsTitle>
                <HomeProblemsDescription>
                    Homeopatija je “cjelovita”, što znači da liječi
                    {' '}
                    <br />
                    cijelu osobu na svim razinama
                    istovremeno –
                    {' '}
                    <br />
                    tjelesnim, emocionalnim i psihičkim.
                    <br />
                    <br />
                    Ne liječi samo simptome bolesti, već potiče organizam
                    na SAMOISCJELJENJE.
                </HomeProblemsDescription>
            </HomeProblemsTitleWrapper>
            <div />
        </HomeProblemsRoot>
    )
}
