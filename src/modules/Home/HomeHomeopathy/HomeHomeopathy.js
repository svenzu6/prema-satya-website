import Link from 'next/link'

import {
    HomeHomeopathyButton,
    HomeHomeopathyDescription,
    HomeHomeopathyDescriptionWrapper,
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
                <HomeHomeopathyDescriptionWrapper>
                    <HomeHomeopathyDescription>
                        Homeopatija (zasnovana po načelima dr. Hahnemanna);
                        jedna je od najstarijih
                        i najšire prihvaćenih metoda prirodne
                        medicine koja putem individualnog
                        pristupa osobi
                        propisuje homeopatske lijekove.
                    </HomeHomeopathyDescription>
                </HomeHomeopathyDescriptionWrapper>
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