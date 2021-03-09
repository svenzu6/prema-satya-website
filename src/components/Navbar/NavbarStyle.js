import styled from 'styled-components'

export const NavRoot = styled.div`
    height: 80px;
    background : #C5DBBB;
    color: white;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 10px 20px;
	position: sticky;
	top: 0;
`
export const NavbarRightSide = styled.div`
    font-family: "Karla";
    column-gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size:large;
`
export const NavbarLeftSide = styled.div`
    column-gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
`
export const NavTitle = styled.a`
    font-size:5vh;
    font-family: "Karla";
`