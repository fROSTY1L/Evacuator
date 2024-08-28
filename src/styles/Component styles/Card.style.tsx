import styled from "styled-components";

const CardWrap = styled.div`
    width: 80%;
    background-color: #ffffff;
    box-shadow: 2px 2px 8px rgba(119, 119, 119, 0.5);
    margin-left: 10%;
    border-radius: 20px;
`

const CardTitle = styled.p`
    font-size: 2rem;
    font-weight: 500;
    padding: 48px 40px 0 40px;
`

const CardContent = styled.div`
    margin: 0 48px;
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
    background: #F2F4F8;
    height: 16%;
    align-items: center;
    border-radius: 10px;
    padding: 0 2%;
    color: #777777;
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
    margin-left: 20%;
    border-radius: 10px;

`
const CardAddressTitle = styled.div`
    display: flex;
    align-content: center;
    padding-left: 5%;
    color: #777777;
`

const CardAddressTitleImgWrap = styled.div`

`

const CardAddressTitleImg = styled.img`

`

const CardAddress = styled.div`
    padding: 2% 10%;
`

const CardContactsWrap = styled.div`

`

export { CardContactsWrap, CardImg, CardAddressTitleImgWrap, CardAddressTitleImg, CardImgWrap, CardInfo, CardInfoWrap, CardInfoPrice, CardInfoTitle, CardWrap, CardTitle, CardContent, CardAddress, CardAddressWrap, CardAddressTitle }


