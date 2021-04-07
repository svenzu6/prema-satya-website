import Image from 'next/image'

import {
    HomeProblemsDescription,
    HomeProblemsRoot,
    HomeProblemsText,
    HomeProblemsTitle,
    HomeProblemsTitleWrapper,
    HomeProblemsWrapper,
} from './HomeProblems.styles'

const issues = [
    'Alergije',
    'Nesanica',
    'Tegobe kod djece',
    'Povišena temperatura',
    'Emocionalne tegobe',
    'Infektivne bolesti',
    'Kožne bolesti',
    'Srčane bolesti',
    'Probavne tegobe',
]
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
            <HomeProblemsWrapper>
                {issues.map((issue) => {
                    return (
                        <HomeProblemsText key={issue}>
                            <Image
                                height={30}
                                src="/icons/checkmark.svg"
                                width={30}
                            />
                            {issue}
                        </HomeProblemsText>
                    )
                })}
            </HomeProblemsWrapper>
        </HomeProblemsRoot>
    )
}
