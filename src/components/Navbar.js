import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

// FIXME RENAME NAV TO NAVROOT
const Navbar = () => {
    return (
        <Navroot>
            <LeftSide>

                <Image
                    height={30}
                    src="/icons/herbs.svg"
                    width={30}
                />
                <Link
                    href="/"
                    passHref={true}
                >
                    <NavTitle>
                        Prema-Satya
                    </NavTitle>
                </Link>

            </LeftSide>
            <RightSide>
                <Link
                    href="/"
                    passHref={true}
                    s={true}
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
            </RightSide>
        </Navroot>
    )
}

export default Navbar

const Navroot = styled.div`
    height: 80px;
    background : #C5DBBB;
    color: white;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 10px 20px;
    position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;
    
    
    `

const RightSide = styled.div`
    font-family: "Karla";
    column-gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size:large;
`
const LeftSide = styled.div`
    
    column-gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    
`
const NavTitle = styled.a`
font-size:5vh;
font-family: "Karla";
`