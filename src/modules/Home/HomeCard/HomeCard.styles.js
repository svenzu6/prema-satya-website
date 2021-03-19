import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HomeCardRoot = styled(motion.div)`
    border-radius: 25px;
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 350px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    font-family: "Karla-Extra-Light";
    background-color: #9aa37b;
`

export const HomeCardTitle = styled.h2`
    color: #ffffff;
    font-family: "Rubik";
`

export const HomeCardDescription = styled.p`
    color: #ffffff;
    text-align: center;
    font-family: 'Karla-Extra-Light';  
`
