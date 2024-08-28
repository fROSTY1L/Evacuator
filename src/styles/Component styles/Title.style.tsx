import styled from "styled-components";

const TitleWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 50%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #586C75;
    opacity: 80%;

`

const TitleContent = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600; 
    font-size: 2.3vw;
    color: #FFFFFF;
    gap: .5rem;
`
const City = styled.p`
    display: inline;
    position: relative;
    color: #6AD3FF;
        &:after {
            content: "";
            left: 0;
            bottom: 0;
            position: absolute;
            width: 100%;
            height: 4px; 
            background: #6AD3FF; 
        }
`
const Container = styled.div`
    width: 100%;
    position: relative;
`

const Image = styled.img`
    display: block;
    width: 100%;
    height: auto; 
 `

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px; 
  background: linear-gradient(to bottom, transparent, #FFFFFF); 
  pointer-events: none;
  
`

export { Container, Image, Overlay, TitleWrap, TitleContent, City }