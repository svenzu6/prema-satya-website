import Head from 'next/head'

import AboutMe from '../modules/AboutMe/AboutMe'

export default function About() {
    return (
        <>
            <Head>
                <title>
                    O meni
                </title>
            </Head>
            <AboutMe />
        </>
    )
}
