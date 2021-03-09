import Image from 'next/image'

import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

import {
    GlobalStyles,
    LayoutRoot,
    Root,
} from './LayoutStyle'

export default function Layout({ children }) {
    return (
        <Root>
            <GlobalStyles />
            <LayoutRoot>
                <Navbar />
                {children}
                <Footer />
            </LayoutRoot>
        </Root>
    )
}
