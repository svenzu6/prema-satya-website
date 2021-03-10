import Link from 'next/link'

import {
    HomeHeroButtonLeft,
    HomeHeroButtonRight,
    HomeHeroButtonWrapper,
    HomeHeroDescription,
    HomeHeroRoot,
    HomeHeroTitle,

} from './HomeHero.styles'

export const HomeHero = () => {
    return (
        <HomeHeroRoot>
            <HomeHeroTitle>
                Prema-Satya
            </HomeHeroTitle>
            <HomeHeroDescription>
                Lijecenje homeopatijom i promicanje svjesnog zivljenja
            </HomeHeroDescription>
            <HomeHeroButtonWrapper>
                <Link
                    href="/contact"
                    passHref={true}
                >
                    <HomeHeroButtonLeft>
                        Kontakt
                    </HomeHeroButtonLeft>

                </Link>
                <Link
                    href="/faq"
                    passHref={true}
                >
                    <HomeHeroButtonRight>
                        Saznajte vise
                    </HomeHeroButtonRight>
                </Link>
            </HomeHeroButtonWrapper>
        </HomeHeroRoot>
    )
}