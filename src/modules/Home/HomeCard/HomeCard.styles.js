import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HomeCardRoot = styled(motion.div)`
    background-color:#FCD3BF;
    border-radius:25px;
    display:flex;
    padding: 30px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: 350px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    font-family:"Karla";
`

export const HomeCardTitle = styled(motion.h2)`
    color:#000000;
    font-family:"Rubik";
`

export const HomeCardDescription = styled(motion.p)`
    color:#000000;
    text-align:center;
`