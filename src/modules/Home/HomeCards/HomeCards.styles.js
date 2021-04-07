import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HomeCardsRoot = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 30px 60px;
`

export const HomeCardsWrapper = styled(motion.div)`
    display: grid;
    grid-column-gap: 150px;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    row-gap: 30px;
`
