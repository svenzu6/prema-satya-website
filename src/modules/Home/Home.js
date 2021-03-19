import React from 'react'

import { CallToAction } from './CallToAction/CallToAction'
import { HomeCards } from './HomeCards/HomeCards'
import { HomeHero } from './HomeHero/HomeHero'
import { HomeHomeopathy } from './HomeHomeopathy/HomeHomeopathy'
import { HomeProblems } from './HomeProblems/HomeProblems'

const Home = () => {
    return (
        <>
            <HomeHero />
            <HomeHomeopathy />
            <HomeProblems />
            <HomeCards />
            <CallToAction />
        </>
    )
}

export default Home
