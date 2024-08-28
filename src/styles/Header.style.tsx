import styled from "styled-components";

const Wrap = styled.div`
    height: 156px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 100px;
`

const Logo = styled.div`
    width: 9%;
`
const LogoImg = styled.img`
    width: 100%;
`
const MainButtons = styled.div`
    width: 50%;
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

const AddButton = styled.div`
    background-color: #00A0E2;
    color: #FFFFFF;
    padding: 16px 36px;
    border-radius: 50px;
    text-align: center;
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

export {Wrap, Logo, LogoImg, Nav, NavButton, AddButton, MainButtons}