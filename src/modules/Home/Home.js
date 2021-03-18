import React from 'react'

import { CallToAction } from './CallToAction/CallToAction'
import { HomeCards } from './HomeCards/HomeCards'
import { HomeHero } from './HomeHero/HomeHero'
import { HomeHomeopathy } from './HomeHomeopathy/HomeHomeopathy'
import { HomeIlness } from './HomeIlness/HomeIlness'

const Home = () => {
    return (
        <>
            <HomeHero />
            <HomeHomeopathy />
            <HomeIlness />
            <CallToAction />
            <HomeCards />
        </>
    )
}

export default Home
