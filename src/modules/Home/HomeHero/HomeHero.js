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
                Liječenje homeopatijom i promicanje svjesnog življenja
            </HomeHeroDescription>
            <HomeHeroButtonWrapper>
                <Link
                    href="/o-homeopatiji"
                    passHref={true}
                >
                    <HomeHeroButtonRight>
                        Saznajte više
                    </HomeHeroButtonRight>
                </Link>
                <Link
                    href="/kontakt"
                    passHref={true}
                >
                    <HomeHeroButtonLeft>
                        Kontakt
                    </HomeHeroButtonLeft>
                </Link>
            </HomeHeroButtonWrapper>
        </HomeHeroRoot>
    )
}