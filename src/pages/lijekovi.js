import Head from 'next/head'

import Meds from '../modules/Meds/Meds'

export default function Medicine() {
    return (
        <>
            <Head>
                <title>
                    Homeopatski Lijekovi
                </title>
            </Head>
            <Meds />
        </>
    )
}
