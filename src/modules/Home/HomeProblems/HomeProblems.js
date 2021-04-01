import Image from 'next/image'

import {
    HomeProblemsDescription,
    HomeProblemsRoot,
    HomeProblemsText,
    HomeProblemsTitle,
    HomeProblemsTitleWrapper,
    HomeProblemsWrapper,
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
            <HomeProblemsWrapper>
                <HomeProblemsText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Alergije
                </HomeProblemsText>
                <HomeProblemsText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Nesanica
                </HomeProblemsText>
                <HomeProblemsText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Tegobe kod djece
                </HomeProblemsText>
                <HomeProblemsText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Povišena temperatura
                </HomeProblemsText>
                <HomeProblemsText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Emocionalne tegobe
                </HomeProblemsText>
                <HomeProblemsText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Infektivne bolesti
                </HomeProblemsText>
                <HomeProblemsText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Kožne bolesti
                </HomeProblemsText>
                <HomeProblemsText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Srčane bolesti
                </HomeProblemsText>
                <HomeProblemsText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Probavne tegobe
                </HomeProblemsText>
            </HomeProblemsWrapper>
        </HomeProblemsRoot>
    )
}
