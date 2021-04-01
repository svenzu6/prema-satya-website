import Head from 'next/head'

import CheckUp from '../modules/CheckUp/CheckUp'

export default function FirstCheckUp() {
    return (
        <>
            <Head>
                <title>
                    Prva Kontrola
                </title>
            </Head>
            <CheckUp />
        </>
    )
}
