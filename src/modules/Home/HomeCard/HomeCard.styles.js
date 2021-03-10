import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HomeCardRoot = styled(motion.div)`
    background-color:rgb(241, 87, 75);
    border-radius:25px;
    display:flex;
    padding: 30px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: 350px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    font-family:"Karla"; 
    position:relative;
    /* background-size: cover;   
    background-image:linear-gradient(#d6ada96b,#00000085),url("/images/advice.jpg");  */
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
