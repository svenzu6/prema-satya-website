import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HomeContainer = styled.div`
    background: #F7E7D7;
    height: 100%;
    width: 100%;
    display:flex,column;
    text-align:center;
`
export const HomeTitle = styled.h1`
    color:#000000;
    font-family:"Karla";
    font-size:xx-large;
    padding-bottom:1cm;
    padding-top:0.5cm;
    padding-left:0.3cm;
    margin-bottom:1cm;        
`
export const HomeCardsWrapper = styled(motion.div)`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`
export const HomeCards = styled(motion.div)`
    background-color:#FCD3BF;
    border-radius:25px;
    width:35vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:10px;
    height:50vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    font-family:"Karla";
    margin-bottom:50px;
`
export const HomeCardHeader = styled(motion.div)``
export const HomeCardTitles = styled(motion.h2)`
    color:#000000;
    font-family:"Rubik";
`
export const HomeDescriptionWrapper = styled(motion.div)``
export const HomeCardDescriptions = styled(motion.p)`
color:#000000;
text-align:center;
`
export const HomeParagraph = styled.div`
    background-color:white;
    display:flex,column;
    color:#EDC3AF;
    text-align:center;
    font-family:"Karla";
    font-size:xx-large;
    padding-top:2cm;
    padding-bottom:3cm;
`
export const HomeSecondParagraph = styled.div`
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#000000;
    font-family:"Karla";
    font-size:xx-large;
    padding-top:2cm;
    padding-bottom:3cm;
`
