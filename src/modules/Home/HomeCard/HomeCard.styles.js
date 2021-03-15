import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HomeCardRoot = styled(motion.div)`
    /* background-color: ${(props) => (props.isDisabled ? 'red' : 'green')}; */
    border-radius:25px;
    display:flex;
    padding: 30px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: 350px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    font-family:"Karla-Extra-Light";
    position: relative;
    background-color:#9aa37b;
`

export const HomeCardTitle = styled.h2`
    color:#ffffff;
    font-family:"Rubik";
`

export const HomeCardDescription = styled.p`
    color:#ffffff;
    text-align:center;
    font-family:'Karla-Light-Extreme';  
`
