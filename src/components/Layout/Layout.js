import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

import {
    LayoutRoot,
    Root,
} from './Layout.styles.js'

export default function Layout({ children }) {
    return (
        <Root>
            <LayoutRoot>
                <Navbar />
                {children}
                <Footer />
            </LayoutRoot>
        </Root>
    )
}
