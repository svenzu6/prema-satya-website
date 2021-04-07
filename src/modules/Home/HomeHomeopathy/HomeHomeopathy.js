import Link from 'next/link'

import {
    HomeHomeopathyButton,
    HomeHomeopathyDescription,
    HomeHomeopathyRoot,
    HomeHomeopathySubTitle,
    HomeHomeopathyTitle,
    HomeHomeopathyTitleWrapper,
} from './HomeHomeopathy.styles'

export const HomeHomeopathy = () => {
    return (
        <HomeHomeopathyRoot>
            <HomeHomeopathyTitleWrapper>
                <HomeHomeopathySubTitle>
                    Homeopatija
                </HomeHomeopathySubTitle>
                <HomeHomeopathyTitle>
                    Prirodan Način Liječenja
                </HomeHomeopathyTitle>
                <HomeHomeopathyDescription>
                    Homeopatija (zasnovana po načelima dr. Hahnemanna)
                    {' '}
                    <br />
                    je jedna od najstarijih
                    i najšire prihvaćenih metoda prirodne
                    {' '}
                    <br />
                    medicine koja putem individualnog
                    pristupa osobi
                    {' '}
                    <br />
                    {' '}
                    propisuje homeopatske lijekove.
                </HomeHomeopathyDescription>
                <Link
                    href="/povijest-homeopatije"
                    passHref={true}
                >
                    <HomeHomeopathyButton>
                        Saznajte više
                    </HomeHomeopathyButton>
                </Link>
            </HomeHomeopathyTitleWrapper>
        </HomeHomeopathyRoot>
    )
}