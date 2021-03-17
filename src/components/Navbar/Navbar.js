import Link from 'next/link'
import React from 'react'

import {
    NavbarLeftSide,
    NavbarRightSide,
    NavRoot,
    NavTitle,
} from './Navbar.styles.js'

const Navbar = () => {
    return (
        <NavRoot>
            <NavbarLeftSide>
                <Link
                    href="/"
                    passHref={true}
                >
                    <NavTitle>
                        Prema-Satya
                    </NavTitle>
                </Link>
            </NavbarLeftSide>
            <NavbarRightSide>
                <Link
                    href="/"
                    passHref={true}
                >
                    <a>
                        Home
                    </a>
                </Link>
                <Link
                    href="/about"
                    passHref={true}
                >
                    <a>
                        O meni
                    </a>
                </Link>
                <Link
                    href="/contact"
                    passHref={true}
                >
                    <a>
                        Kontakt
                    </a>
                </Link>
            </NavbarRightSide>
        </NavRoot>
    )
}

export default Navbar
