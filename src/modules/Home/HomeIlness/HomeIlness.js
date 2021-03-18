import Image from 'next/image'

import {
    HomeIlnessDescription,
    HomeIlnessRoot,
    HomeIlnessText,
    HomeIlnessTitle,
    HomeIlnessTitleFill,
    HomeIlnessWrapper,
    HomeIlnesTitleWrapper,
} from './HomeIlnessStyle'

export const HomeIlness = () => {
    return (
        <HomeIlnessRoot>
            <HomeIlnesTitleWrapper>
                <HomeIlnessTitle>
                    Pomaže kod svih
                </HomeIlnessTitle>
                <HomeIlnessTitleFill>
                    'modernih' problema
                </HomeIlnessTitleFill>
                <HomeIlnessDescription>
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
                </HomeIlnessDescription>
            </HomeIlnesTitleWrapper>
            <HomeIlnessWrapper>
                <HomeIlnessText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Alergije
                </HomeIlnessText>
                <HomeIlnessText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Nesanica
                </HomeIlnessText>
                <HomeIlnessText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Tegobe kod djece
                </HomeIlnessText>
                <HomeIlnessText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Povisena temperatura
                </HomeIlnessText>
                <HomeIlnessText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Emocionalne tegobe
                </HomeIlnessText>
                <HomeIlnessText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Infektivne bolesti
                </HomeIlnessText>
                <HomeIlnessText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Kozne bolesti
                </HomeIlnessText>
                <HomeIlnessText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Srcane bolesti
                </HomeIlnessText>
                <HomeIlnessText>
                    <Image
                        height={30}
                        src="/icons/checkmark.svg"
                        width={30}
                    />
                    Probavne tegobe
                </HomeIlnessText>
            </HomeIlnessWrapper>
        </HomeIlnessRoot>
    )
}
