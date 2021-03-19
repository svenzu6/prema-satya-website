import Head from 'next/head'

import FirstConsultation from '../modules/FirstConsultation/FirstConsultation'

export default function Consultation() {
    return (
        <>
            <Head>
                <title>
                    Konzultacija
                </title>
            </Head>
            <FirstConsultation />
        </>
    )
}
