import Head from 'next/head'

import HomeopathyHistory from '../modules/Home/HomeopathyHistory/HomeopathyHistory.js'

export default function Medicine() {
    return (
        <>
            <Head>
                <title>
                    Povijest Homeopatije
                </title>
            </Head>
            <HomeopathyHistory />
        </>
    )
}
