import Link from 'next/link'

import {
    HomeMoreRoot,
    HomeMoreRouter,
} from './HomeMoreButton.styles'

export const HomeMoreButton = () => {
    return (
        <HomeMoreRoot>
            <Link href="./primjena-homeopatije">
                <HomeMoreRouter>
                    saznajte više
                </HomeMoreRouter>
            </Link>
        </HomeMoreRoot>
    )
}
