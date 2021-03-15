import React from 'react'

import { HomeCards } from './HomeCards/HomeCards'
import { HomeHero } from './HomeHero/HomeHero'
import { HomeIlness } from './HomeIlness/HomeIlness'

const Home = () => {
    return (
        <>
            <HomeHero />
            <HomeCards />
            <HomeIlness />
        </>
    )
}
export default Home
