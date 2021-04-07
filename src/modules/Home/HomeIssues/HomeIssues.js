import Image from 'next/image'

import {
    HomeIssuesRoot,
    HomeProblemsText,
} from './HomeIssues.styles'

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

export const HomeIssues = () => {
    return (
        <HomeIssuesRoot>
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
        </HomeIssuesRoot>
    )
}
