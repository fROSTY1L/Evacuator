import styled from "styled-components";

const Wrap = styled.div`
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5vw;
    font-size: 1vw;
`

const Logo = styled.div`
    width: 9vw;
`
const LogoImg = styled.img`
    width: 100%;
`
const MainButtons = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Nav = styled.div`
    display: flex;
    gap: 5vw;
`

const NavButton = styled.div`
    cursor: pointer;
`
const ButtonAnimation = `
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    
    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
    
    &:active {
        transform: scale(0.95);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }
`
const AddButton = styled.div`
    background-color: #00A0E2;
    color: #FFFFFF;
    padding: 1vw 2vw;
    border-radius: 2vw;
    text-align: center;
    ${ButtonAnimation}
`

export {Wrap, Logo, LogoImg, Nav, NavButton, AddButton, MainButtons, ButtonAnimation}