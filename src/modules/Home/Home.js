import React from 'react'

import { CallToAction } from './CallToAction/CallToAction'
import { HomeCards } from './HomeCards/HomeCards'
import { HomeHero } from './HomeHero/HomeHero'
import { HomeHomeopathy } from './HomeHomeopathy/HomeHomeopathy'
import { HomeIssues } from './HomeIssues/HomeIssues'
import { HomeProblems } from './HomeProblems/HomeProblems'

const Home = () => {
    return (
        <>
            <HomeHero />
            <HomeHomeopathy />
            <HomeProblems />
            <HomeIssues />
            <CallToAction />
            <HomeCards />
        </>
    )
}

export default Home
