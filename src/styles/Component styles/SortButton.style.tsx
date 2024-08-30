import styled from "styled-components";
import { color } from "../../variables/theme";

const ButtonWrap = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: end;
    margin: 0 -10%;
    &:hover .dropdown-content{
        display: block;
        opacity: 1;
        transform: translateY(0);
    }
`

const Button = styled.button`
    border-radius: .7vw;
    font-size:clamp(0.1vw, 1vw, 2.4vw);
    background-color: ${color.white};
    color: ${color.secondaryGray};
    padding: 1vw;
    width: 10vw;
    z-index: 2;
    border: 1px solid ${color.secondaryGray};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5vw;
`
const DropdownContent = styled.div`
    display: none;
    font-size: clamp(0.1vw, 1vw, 2.4vw);
    margin-top: 3.2vw;
    width: 10vw;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    
`

const DropdownElement = styled.div`
    color: black;
    padding: 0.8vw 1vw;
    text-decoration: none;
    display: block;
    cursor: pointer;
    &:hover {
        background-color: #f1f1f1;
    }

`


export {ButtonWrap, Button, DropdownContent, DropdownElement}