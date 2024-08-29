import styled from "styled-components";
import { color } from "../../variables/theme";
import { ButtonAnimation } from "../Header.style";

const CardWrap = styled.div`
    width: 80%;
    background-color: ${color.white};
    box-shadow: 2px 2px 8px rgba(119, 119, 119, 0.5);
    margin-left: 10%;
    border-radius: 20px;
    padding: 2vh 0;
`

const CardTitle = styled.div`
    padding: 1vh 3vw;
    font-size: 2vw;
    font-weight: 500;
    
`

const CardContent = styled.div`
    font-size: clamp(0.1vw, 1vw, 2.4vw);
    position: relative;
    margin: 0 3vw;
    width: 90%;
    display: grid;
    grid-template-columns: 30% 40% 26%;
`
const CardImgWrap = styled.div`
    position: relative;
    width: 100%;
`

const CardImg = styled.img`
    width: 100%
`

const CardInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5%;
    
`

const CardInfo =  styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: ${color.primaryGray};
    height: 16%;
    align-items: center;
    border-radius: 10px;
    padding: 0 2%;
    color: ${color.secondaryGray};
    
`

const CardInfoPrice = styled.div`
    font-weight: 500;
`

const CardInfoTitle = styled.div`

`

const CardAddressWrap = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFF5CC;
    border-radius: 10px;
    height: fit-content;

`
const CardAddressTitle = styled.div`
    display: flex;
    align-content: center;
    padding-left: 5%;
    color: ${color.secondaryGray};
`

const CardAddress = styled.div`
    padding: 2% 10%;
`

const CardContactsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    flex-direction: column;
    margin-left: 20%;
`
const ContactElement = `
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 18%;
`
const CardChat = styled.div`
    ${ContactElement}
    ${ButtonAnimation}
    color: #FFFFFF;
    background: #66C6EE;
`

const CardPhone = styled.div`
    ${ContactElement}
    ${ButtonAnimation}
    color: #FFFFFF;
    background: #00A0E2;
`

const CardId = styled.div`
    ${ContactElement}
    ${ButtonAnimation}
    color: #00A0E2;
    background: #FFFFFF;
    border: 1px solid ${color.primary}
`
const CardCommentary = styled.div`
    padding: 2vh 3vw;
    font-size: 2.5vh;
`

export { CardContactsWrap, CardCommentary, CardImg, CardId, CardChat, CardImgWrap, CardPhone, CardInfo, CardInfoWrap, CardInfoPrice, CardInfoTitle, CardWrap, CardTitle, CardContent, CardAddress, CardAddressWrap, CardAddressTitle }


