import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HomeCardsRoot = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 50px 60px;
`

export const HomeCardsWrapper = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 150px;
    justify-content: space-around;
`
